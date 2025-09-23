-- Create table to log rate update attempts
CREATE TABLE IF NOT EXISTS public.rate_update_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  attempted_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  success BOOLEAN NOT NULL,
  error_message TEXT,
  rates_fetched JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_rate_update_log_attempted_at ON public.rate_update_log (attempted_at DESC);

-- Enable RLS
ALTER TABLE public.rate_update_log ENABLE ROW LEVEL SECURITY;

-- Allow public read access to logs (for debugging)
CREATE POLICY "Allow public read access to rate_update_log" 
ON public.rate_update_log FOR SELECT 
USING (true);
