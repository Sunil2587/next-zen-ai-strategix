-- Add github, ai_score, and skills_match columns to applications table
ALTER TABLE applications 
ADD COLUMN IF NOT EXISTS github TEXT,
ADD COLUMN IF NOT EXISTS ai_score INTEGER,
ADD COLUMN IF NOT EXISTS skills_match INTEGER;

-- Add comments to the columns
COMMENT ON COLUMN applications.github IS 'GitHub profile URL of the applicant';
COMMENT ON COLUMN applications.ai_score IS 'AI-calculated match score (0-100)';
COMMENT ON COLUMN applications.skills_match IS 'Skills match percentage (0-100)';

-- Create index for faster AI score queries
CREATE INDEX IF NOT EXISTS idx_applications_ai_score ON applications(ai_score DESC);

-- Verify the columns were added
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'applications' 
AND column_name IN ('github', 'ai_score', 'skills_match');
