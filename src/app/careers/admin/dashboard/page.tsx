'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import ProtectedRoute from '@/components/ProtectedRoute';
import { 
  FileText, Download, Trash2, CheckCircle, XCircle, Clock, 
  Users, Briefcase, TrendingUp, LogOut, Filter, ArrowUpDown, ArrowUp, ArrowDown,
  Sparkles, Brain, Target, Award, Settings, BarChart3, Zap
} from 'lucide-react';

interface Application {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  job_title: string;
  experience: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  resume_url: string;
  resume_name: string;
  resume_size?: number;
  created_at: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  cover_letter: string;
  ai_score?: number;
  skills_match?: number;
}

interface MLConfig {
  enabled: boolean;
  autoShortlist: boolean;
  minScore: number;
  skillsWeight: number;
  experienceWeight: number;
  portfolioWeight: number;
}

function Dashboard() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [sortField, setSortField] = useState<keyof Application>('created_at');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [showMLConfig, setShowMLConfig] = useState(false);
  const [mlProcessing, setMlProcessing] = useState(false);
  const [mlConfig, setMlConfig] = useState<MLConfig>({
    enabled: true,
    autoShortlist: false,
    minScore: 70,
    skillsWeight: 40,
    experienceWeight: 30,
    portfolioWeight: 30,
  });

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const { data, error } = await supabase
          .from('applications')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching applications:', error);
        } else {
          setApplications(data || []);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();

    // Subscribe to realtime updates
    const channel = supabase
      .channel('applications')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'applications' }, (payload) => {
        fetchApplications();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleStatusChange = async (appId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('applications')
        .update({ status: newStatus })
        .eq('id', appId);

      if (error) throw error;
      
      // Refresh applications
      const { data } = await supabase
        .from('applications')
        .select('*')
        .order('created_at', { ascending: false });
      setApplications(data || []);
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleDelete = async (appId: string) => {
    if (confirm('Are you sure you want to delete this application?')) {
      try {
        const { error } = await supabase
          .from('applications')
          .delete()
          .eq('id', appId);

        if (error) throw error;

        setSelectedApp(null);
        
        // Refresh applications
        const { data } = await supabase
          .from('applications')
          .select('*')
          .order('created_at', { ascending: false });
        setApplications(data || []);
      } catch (error) {
        console.error('Error deleting application:', error);
      }
    }
  };

  const downloadResume = (app: Application) => {
    if (app.resume_url) {
      window.open(app.resume_url, '_blank');
    }
  };

  const handleLogout = async () => {
    await logout();
    router.push('/careers');
  };

  // ML-based scoring algorithm
  const calculateAIScore = (app: Application): number => {
    let score = 0;
    const weights = mlConfig;

    // Experience scoring (0-100)
    const expYears = parseInt(app.experience) || 0;
    const expScore = Math.min((expYears / 10) * 100, 100);
    score += (expScore * weights.experienceWeight) / 100;

    // Skills matching (based on cover letter keywords)
    const skillKeywords = [
      'react', 'typescript', 'node', 'python', 'java', 'aws', 'cloud',
      'ai', 'ml', 'docker', 'kubernetes', 'api', 'database', 'sql',
      'agile', 'scrum', 'leadership', 'team', 'project'
    ];
    const coverLetter = app.cover_letter?.toLowerCase() || '';
    const matchedSkills = skillKeywords.filter(skill => 
      coverLetter.includes(skill)
    ).length;
    const skillsScore = Math.min((matchedSkills / skillKeywords.length) * 100, 100);
    score += (skillsScore * weights.skillsWeight) / 100;

    // Portfolio/Links scoring
    let portfolioScore = 0;
    if (app.linkedin) portfolioScore += 30;
    if (app.github) portfolioScore += 40;
    if (app.portfolio) portfolioScore += 30;
    score += (portfolioScore * weights.portfolioWeight) / 100;

    return Math.round(score);
  };

  // Run ML scoring on all pending applications
  const runMLShortlisting = async () => {
    setMlProcessing(true);
    try {
      const pendingApps = applications.filter(app => app.status === 'pending');
      
      for (const app of pendingApps) {
        const aiScore = calculateAIScore(app);
        
        // Auto-shortlist if score meets threshold
        const newStatus = mlConfig.autoShortlist && aiScore >= mlConfig.minScore 
          ? 'reviewed' 
          : app.status;

        await supabase
          .from('applications')
          .update({ 
            status: newStatus,
            ai_score: aiScore,
            skills_match: Math.round((aiScore / 100) * 10) * 10
          })
          .eq('id', app.id);
      }

      // Refresh applications
      const { data } = await supabase
        .from('applications')
        .select('*')
        .order('created_at', { ascending: false });
      
      setApplications(data || []);
      alert(`Processed ${pendingApps.length} applications with AI scoring!`);
    } catch (error) {
      console.error('Error running ML shortlisting:', error);
      alert('Error processing applications');
    } finally {
      setMlProcessing(false);
    }
  };

  // Bulk actions
  const handleBulkAction = async (action: 'accept' | 'reject', appIds: string[]) => {
    if (!confirm(`Are you sure you want to ${action} ${appIds.length} application(s)?`)) return;
    
    try {
      for (const id of appIds) {
        await supabase
          .from('applications')
          .update({ status: action === 'accept' ? 'accepted' : 'rejected' })
          .eq('id', id);
      }
      
      const { data } = await supabase
        .from('applications')
        .select('*')
        .order('created_at', { ascending: false });
      setApplications(data || []);
    } catch (error) {
      console.error('Error with bulk action:', error);
    }
  };

  const handleSort = (field: keyof Application) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const getSortIcon = (field: keyof Application) => {
    if (sortField !== field) {
      return <ArrowUpDown className="w-4 h-4 opacity-50" />;
    }
    return sortDirection === 'asc' 
      ? <ArrowUp className="w-4 h-4 text-cyan-400" />
      : <ArrowDown className="w-4 h-4 text-cyan-400" />;
  };

  const filteredApps = filterStatus === 'all' 
    ? applications 
    : applications.filter(app => app.status === filterStatus);

  // Sort applications
  const sortedApps = [...filteredApps].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    
    if (aValue === null || aValue === undefined) return 1;
    if (bValue === null || bValue === undefined) return -1;
    
    let comparison = 0;
    
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      comparison = aValue.toLowerCase().localeCompare(bValue.toLowerCase());
    } else if (typeof aValue === 'number' && typeof bValue === 'number') {
      comparison = aValue - bValue;
    } else {
      comparison = String(aValue).localeCompare(String(bValue));
    }
    
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  const stats = {
    total: applications.length,
    pending: applications.filter(a => a.status === 'pending').length,
    reviewed: applications.filter(a => a.status === 'reviewed').length,
    accepted: applications.filter(a => a.status === 'accepted').length,
    rejected: applications.filter(a => a.status === 'rejected').length,
    avgAIScore: applications.filter(a => a.ai_score).length > 0
      ? Math.round(applications.reduce((sum, a) => sum + (a.ai_score || 0), 0) / applications.filter(a => a.ai_score).length)
      : 0,
    highQuality: applications.filter(a => (a.ai_score || 0) >= 80).length,
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Welcome, {user?.email}</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setShowMLConfig(!showMLConfig)}
              className="flex items-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors shadow-sm"
            >
              <Settings className="w-4 h-4" />
              ML Config
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 rounded-lg transition-colors shadow-sm"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>

        {/* ML Configuration Panel */}
        {showMLConfig && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-2xl p-6 mb-8 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <Brain className="w-6 h-6 text-purple-600" />
              <h2 className="text-xl font-bold text-gray-900">AI Shortlisting Configuration</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="flex items-center gap-2 mb-4 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={mlConfig.enabled}
                    onChange={(e) => setMlConfig({ ...mlConfig, enabled: e.target.checked })}
                    className="w-5 h-5 text-purple-600 rounded"
                  />
                  <span className="font-semibold text-gray-900">Enable AI Scoring</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={mlConfig.autoShortlist}
                    onChange={(e) => setMlConfig({ ...mlConfig, autoShortlist: e.target.checked })}
                    className="w-5 h-5 text-purple-600 rounded"
                  />
                  <span className="font-semibold text-gray-900">Auto-shortlist high scores</span>
                </label>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Minimum Score for Auto-shortlist: {mlConfig.minScore}%
                </label>
                <input
                  type="range"
                  min="50"
                  max="95"
                  step="5"
                  value={mlConfig.minScore}
                  onChange={(e) => setMlConfig({ ...mlConfig, minScore: parseInt(e.target.value) })}
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Skills Weight: {mlConfig.skillsWeight}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={mlConfig.skillsWeight}
                  onChange={(e) => setMlConfig({ ...mlConfig, skillsWeight: parseInt(e.target.value) })}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Experience Weight: {mlConfig.experienceWeight}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={mlConfig.experienceWeight}
                  onChange={(e) => setMlConfig({ ...mlConfig, experienceWeight: parseInt(e.target.value) })}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Portfolio Weight: {mlConfig.portfolioWeight}%
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={mlConfig.portfolioWeight}
                  onChange={(e) => setMlConfig({ ...mlConfig, portfolioWeight: parseInt(e.target.value) })}
                  className="w-full"
                />
              </div>
            </div>

            <button
              onClick={runMLShortlisting}
              disabled={mlProcessing || !mlConfig.enabled}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
            >
              {mlProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                  Processing...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Run AI Shortlisting on Pending Applications
                </>
              )}
            </button>
          </motion.div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Total Applications</p>
                <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
              </div>
              <Briefcase className="w-8 h-8 text-cyan-600" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-yellow-200 rounded-xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Pending Review</p>
                <p className="text-3xl font-bold text-yellow-600">{stats.pending}</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-600" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-blue-200 rounded-xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Reviewed</p>
                <p className="text-3xl font-bold text-blue-600">{stats.reviewed}</p>
              </div>
              <Users className="w-8 h-8 text-blue-600" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white border border-green-200 rounded-xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">Accepted</p>
                <p className="text-3xl font-bold text-green-600">{stats.accepted}</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-600 text-sm mb-1 font-semibold">Avg AI Score</p>
                <p className="text-3xl font-bold text-purple-700">{stats.avgAIScore}%</p>
              </div>
              <Brain className="w-8 h-8 text-purple-600" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-600 text-sm mb-1 font-semibold">High Quality (80+)</p>
                <p className="text-3xl font-bold text-orange-700">{stats.highQuality}</p>
              </div>
              <Award className="w-8 h-8 text-orange-600" />
            </div>
          </motion.div>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-4 mb-6">
          <Filter className="w-5 h-5 text-gray-600" />
          <div className="flex gap-2">
            {['all', 'pending', 'reviewed', 'accepted', 'rejected'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm ${
                  filterStatus === status
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Applications List */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          {sortedApps.length === 0 ? (
            <div className="p-12 text-center text-gray-500">
              No applications found
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th 
                      className="px-6 py-4 text-left text-sm font-semibold text-gray-900 cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={() => handleSort('full_name')}
                    >
                      <div className="flex items-center gap-2">
                        Applicant
                        {getSortIcon('full_name')}
                      </div>
                    </th>
                    <th 
                      className="px-6 py-4 text-left text-sm font-semibold text-gray-900 cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={() => handleSort('job_title')}
                    >
                      <div className="flex items-center gap-2">
                        Position
                        {getSortIcon('job_title')}
                      </div>
                    </th>
                    <th 
                      className="px-6 py-4 text-left text-sm font-semibold text-gray-900 cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={() => handleSort('experience')}
                    >
                      <div className="flex items-center gap-2">
                        Experience
                        {getSortIcon('experience')}
                      </div>
                    </th>
                    <th 
                      className="px-6 py-4 text-left text-sm font-semibold text-gray-900 cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={() => handleSort('status')}
                    >
                      <div className="flex items-center gap-2">
                        Status
                        {getSortIcon('status')}
                      </div>
                    </th>
                    <th 
                      className="px-6 py-4 text-left text-sm font-semibold text-purple-900 cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={() => handleSort('ai_score')}
                    >
                      <div className="flex items-center gap-2">
                        <Brain className="w-4 h-4" />
                        AI Score
                        {getSortIcon('ai_score')}
                      </div>
                    </th>
                    <th 
                      className="px-6 py-4 text-left text-sm font-semibold text-gray-900 cursor-pointer hover:bg-gray-100 transition-colors"
                      onClick={() => handleSort('created_at')}
                    >
                      <div className="flex items-center gap-2">
                        Applied
                        {getSortIcon('created_at')}
                      </div>
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {sortedApps.map((app, index) => {
                    const aiScore = app.ai_score || 0;
                    const scoreColor = aiScore >= 80 ? 'text-green-600 bg-green-50' 
                      : aiScore >= 60 ? 'text-blue-600 bg-blue-50'
                      : aiScore > 0 ? 'text-yellow-600 bg-yellow-50'
                      : 'text-gray-400 bg-gray-50';
                    
                    return (
                    <motion.tr
                      key={app.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-medium text-gray-900">{app.full_name}</p>
                          <p className="text-sm text-gray-600">{app.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900">{app.job_title}</td>
                      <td className="px-6 py-4 text-gray-900">{app.experience} years</td>
                      <td className="px-6 py-4">
                        <select
                          value={app.status}
                          onChange={(e) => handleStatusChange(app.id, e.target.value)}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium border-2 transition-colors ${
                            app.status === 'pending' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                            app.status === 'reviewed' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                            app.status === 'accepted' ? 'bg-green-50 text-green-700 border-green-200' :
                            'bg-red-50 text-red-700 border-red-200'
                          }`}
                        >
                          <option value="pending">Pending</option>
                          <option value="reviewed">Reviewed</option>
                          <option value="accepted">Accepted</option>
                          <option value="rejected">Rejected</option>
                        </select>
                      </td>
                      <td className="px-6 py-4">
                        {aiScore > 0 ? (
                          <div className="flex items-center gap-2">
                            <span className={`px-3 py-1.5 rounded-lg text-sm font-bold ${scoreColor}`}>
                              {aiScore}%
                            </span>
                            {aiScore >= 80 && <Sparkles className="w-4 h-4 text-yellow-500" />}
                          </div>
                        ) : (
                          <span className="text-gray-400 text-sm">Not scored</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-gray-600 text-sm">
                        {new Date(app.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setSelectedApp(app)}
                            className="p-2 bg-cyan-50 text-cyan-600 hover:bg-cyan-100 rounded transition-colors"
                            title="View Details"
                          >
                            <FileText className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => downloadResume(app)}
                            className="p-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded transition-colors"
                            title="Download Resume"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(app.id)}
                            className="p-2 bg-red-50 text-red-600 hover:bg-red-100 rounded transition-colors"
                            title="Delete Application"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  )})}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Application Detail Modal */}
      {selectedApp && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6 z-50" onClick={() => setSelectedApp(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white border border-gray-200 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Application Details</h2>
            
            {/* AI Score Banner */}
            {selectedApp.ai_score && selectedApp.ai_score > 0 && (
              <div className={`mb-6 p-4 rounded-xl border-2 ${
                selectedApp.ai_score >= 80 ? 'bg-green-50 border-green-200' :
                selectedApp.ai_score >= 60 ? 'bg-blue-50 border-blue-200' :
                'bg-yellow-50 border-yellow-200'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Brain className={`w-6 h-6 ${
                      selectedApp.ai_score >= 80 ? 'text-green-600' :
                      selectedApp.ai_score >= 60 ? 'text-blue-600' :
                      'text-yellow-600'
                    }`} />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">AI Match Score</p>
                      <p className={`text-2xl font-bold ${
                        selectedApp.ai_score >= 80 ? 'text-green-700' :
                        selectedApp.ai_score >= 60 ? 'text-blue-700' :
                        'text-yellow-700'
                      }`}>{selectedApp.ai_score}%</p>
                    </div>
                  </div>
                  {selectedApp.ai_score >= 80 && (
                    <div className="flex items-center gap-2 text-green-600">
                      <Award className="w-5 h-5" />
                      <span className="font-semibold">Top Candidate</span>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            <div className="space-y-4">
              <div>
                <label className="text-gray-600 text-sm">Full Name</label>
                <p className="text-gray-900 font-medium">{selectedApp.full_name}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-600 text-sm">Email</label>
                  <p className="text-gray-900">{selectedApp.email}</p>
                </div>
                <div>
                  <label className="text-gray-600 text-sm">Phone</label>
                  <p className="text-gray-900">{selectedApp.phone}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-600 text-sm">Position</label>
                  <p className="text-gray-900">{selectedApp.job_title}</p>
                </div>
                <div>
                  <label className="text-gray-600 text-sm">Experience</label>
                  <p className="text-gray-900">{selectedApp.experience} years</p>
                </div>
              </div>
              {selectedApp.linkedin && (
                <div>
                  <label className="text-gray-600 text-sm">LinkedIn</label>
                  <a href={selectedApp.linkedin} target="_blank" className="text-cyan-600 hover:underline block">
                    {selectedApp.linkedin}
                  </a>
                </div>
              )}
              {selectedApp.github && (
                <div>
                  <label className="text-gray-600 text-sm">GitHub</label>
                  <a href={selectedApp.github} target="_blank" className="text-cyan-600 hover:underline block">
                    {selectedApp.github}
                  </a>
                </div>
              )}
              {selectedApp.portfolio && (
                <div>
                  <label className="text-gray-600 text-sm">Portfolio</label>
                  <a href={selectedApp.portfolio} target="_blank" className="text-cyan-600 hover:underline block">
                    {selectedApp.portfolio}
                  </a>
                </div>
              )}
              <div>
                <label className="text-gray-600 text-sm">Cover Letter</label>
                <p className="text-gray-900 whitespace-pre-wrap bg-gray-50 p-4 rounded-lg border border-gray-200">{selectedApp.cover_letter}</p>
              </div>
            </div>

            <button
              onClick={() => setSelectedApp(null)}
              className="mt-6 w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <ProtectedRoute requireAdmin>
      <Dashboard />
    </ProtectedRoute>
  );
}
