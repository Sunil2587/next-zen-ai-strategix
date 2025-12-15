'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FileText, Clock, CheckCircle, XCircle, Eye, Download, LogOut, Briefcase } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import ProtectedRoute from '@/components/ProtectedRoute';

interface Application {
  id: string;
  job_id: string;
  job_title: string;
  full_name: string;
  email: string;
  phone: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  experience: string;
  cover_letter: string;
  resume_url: string;
  resume_name: string;
  resume_size: number;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  created_at: string;
}

function DashboardContent() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);

  useEffect(() => {
    if (user) {
      fetchApplications();
    }
  }, [user]);

  const fetchApplications = async () => {
    try {
      const { data, error } = await supabase
        .from('applications')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setApplications(data || []);
    } catch (error) {
      console.error('Error fetching applications:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    router.push('/careers');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'reviewed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'accepted':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'rejected':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-5 h-5" />;
      case 'reviewed':
        return <Eye className="w-5 h-5" />;
      case 'accepted':
        return <CheckCircle className="w-5 h-5" />;
      case 'rejected':
        return <XCircle className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  const stats = {
    total: applications.length,
    pending: applications.filter(app => app.status === 'pending').length,
    reviewed: applications.filter(app => app.status === 'reviewed').length,
    accepted: applications.filter(app => app.status === 'accepted').length,
    rejected: applications.filter(app => app.status === 'rejected').length,
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />

      <div className="container mx-auto px-6 py-32">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              My Applications
            </h1>
            <p className="text-gray-600">
              Welcome back, {user?.user_metadata?.full_name || user?.email}
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={handleLogout}
            className="mt-4 md:mt-0 inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 rounded-lg transition-colors shadow-sm"
          >
            <LogOut size={20} />
            Logout
          </motion.button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
          >
            <div className="text-3xl font-bold text-gray-900 mb-1">{stats.total}</div>
            <div className="text-gray-600 text-sm">Total Applications</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white border border-yellow-200 rounded-xl p-6 shadow-sm"
          >
            <div className="text-3xl font-bold text-yellow-600 mb-1">{stats.pending}</div>
            <div className="text-gray-600 text-sm">Pending</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white border border-blue-200 rounded-xl p-6 shadow-sm"
          >
            <div className="text-3xl font-bold text-blue-600 mb-1">{stats.reviewed}</div>
            <div className="text-gray-600 text-sm">Reviewed</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white border border-green-200 rounded-xl p-6 shadow-sm"
          >
            <div className="text-3xl font-bold text-green-600 mb-1">{stats.accepted}</div>
            <div className="text-gray-600 text-sm">Accepted</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white border border-red-200 rounded-xl p-6 shadow-sm"
          >
            <div className="text-3xl font-bold text-red-600 mb-1">{stats.rejected}</div>
            <div className="text-gray-600 text-sm">Rejected</div>
          </motion.div>
        </div>

        {/* Applications List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-cyan-500 border-t-transparent"></div>
              <p className="text-gray-400 mt-4">Loading your applications...</p>
            </div>
          ) : applications.length === 0 ? (
            <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center shadow-sm">
              <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Applications Yet</h3>
              <p className="text-gray-600 mb-6">You haven't applied to any positions yet.</p>
              <button
                onClick={() => router.push('/careers')}
                className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors shadow-sm"
              >
                Browse Open Positions
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {applications.map((app, index) => (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:border-cyan-500 hover:shadow-md transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{app.job_title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        <span>Applied: {new Date(app.created_at).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>Job ID: {app.job_id}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${getStatusColor(app.status)}`}>
                        {getStatusIcon(app.status)}
                        <span className="font-semibold capitalize">{app.status}</span>
                      </div>

                      <button
                        onClick={() => setSelectedApp(app)}
                        className="p-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg transition-colors"
                        title="View Details"
                      >
                        <Eye size={20} />
                      </button>

                      <a
                        href={app.resume_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg transition-colors"
                        title="Download Resume"
                      >
                        <Download size={20} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Application Details Modal */}
      {selectedApp && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6" onClick={() => setSelectedApp(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white border border-gray-200 rounded-2xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedApp.job_title}</h2>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border ${getStatusColor(selectedApp.status)}`}>
                  {getStatusIcon(selectedApp.status)}
                  <span className="font-semibold capitalize">{selectedApp.status}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedApp(null)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <XCircle size={28} />
              </button>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">Full Name</label>
                  <p className="text-gray-900">{selectedApp.full_name}</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">Email</label>
                  <p className="text-gray-900">{selectedApp.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">Phone</label>
                  <p className="text-gray-900">{selectedApp.phone}</p>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">Applied On</label>
                  <p className="text-gray-900">{new Date(selectedApp.created_at).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</p>
                </div>
              </div>

              {selectedApp.linkedin && (
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">LinkedIn</label>
                  <a href={selectedApp.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-700">
                    {selectedApp.linkedin}
                  </a>
                </div>
              )}

              {selectedApp.portfolio && (
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-1">Portfolio</label>
                  <a href={selectedApp.portfolio} target="_blank" rel="noopener noreferrer" className="text-cyan-600 hover:text-cyan-700">
                    {selectedApp.portfolio}
                  </a>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Years of Experience</label>
                <p className="text-gray-900">{selectedApp.experience}</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">Cover Letter</label>
                <p className="text-gray-900 whitespace-pre-wrap bg-gray-50 p-4 rounded-lg border border-gray-200">
                  {selectedApp.cover_letter}
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">Resume</label>
                <a
                  href={selectedApp.resume_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors"
                >
                  <Download size={18} />
                  Download {selectedApp.resume_name}
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={() => setSelectedApp(null)}
                className="w-full px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

      <Footer />
    </main>
  );
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}
