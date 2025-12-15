# NextZen AI Strategix - Vercel Deployment Guide

## 🚀 Quick Deploy to Vercel

### Step 1: Push to GitHub
```bash
git push origin main
```

### Step 2: Import to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure environment variables (see below)
5. Click "Deploy"

## 🔐 Environment Variables for Vercel

Add these in Vercel Dashboard → Settings → Environment Variables:

### Required Variables:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### How to get Supabase credentials:
1. Go to [app.supabase.com](https://app.supabase.com)
2. Select your project
3. Go to Settings → API
4. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Step 3: Database Setup

Run this SQL in Supabase SQL Editor:

```sql
-- Add AI columns for admin dashboard
ALTER TABLE applications 
ADD COLUMN IF NOT EXISTS github TEXT,
ADD COLUMN IF NOT EXISTS ai_score INTEGER,
ADD COLUMN IF NOT EXISTS skills_match INTEGER;

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_applications_ai_score ON applications(ai_score DESC);
CREATE INDEX IF NOT EXISTS idx_applications_status ON applications(status);
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON applications(created_at DESC);
```

## 📝 Post-Deployment

1. **Update NEXT_PUBLIC_SITE_URL**: After deployment, update this variable with your actual Vercel URL
2. **Configure Custom Domain**: (Optional) Vercel → Settings → Domains
3. **Set up Storage**: Ensure Supabase storage bucket `resumes` is created with public access

## ✅ Vercel Configuration

The project includes:
- ✅ `vercel.json` - Build configuration
- ✅ `next.config.js` - Optimized for production
- ✅ Environment variables template
- ✅ Automatic deployments on push

## 🎯 Features Included

- AI-powered candidate shortlisting
- ML scoring algorithm
- Admin dashboard with analytics
- Resume upload & management
- Responsive design
- SEO optimized (robots.txt, sitemap.xml)
- PWA support (manifest.json)

## 🔧 Troubleshooting

**Build fails?**
- Check environment variables are set correctly
- Ensure all required variables are added

**Database errors?**
- Verify Supabase credentials
- Run the SQL migrations above
- Check RLS policies in Supabase

**Images not loading?**
- Verify Supabase storage is configured
- Check `resumes` bucket exists and is public
