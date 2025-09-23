-- Create table to store CETES rates with timestamps
CREATE TABLE IF NOT EXISTS public.cetes_rates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  rate_28_days DECIMAL(5,4) NOT NULL,
  rate_91_days DECIMAL(5,4) NOT NULL,
  rate_182_days DECIMAL(5,4) NOT NULL,
  rate_364_days DECIMAL(5,4) NOT NULL,
  fetched_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  is_current BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_cetes_rates_current ON public.cetes_rates (is_current, fetched_at DESC);
CREATE INDEX IF NOT EXISTS idx_cetes_rates_fetched_at ON public.cetes_rates (fetched_at DESC);

-- Enable RLS (though this will be public data)
ALTER TABLE public.cetes_rates ENABLE ROW LEVEL SECURITY;

-- Allow everyone to read rates (public data)
CREATE POLICY "Allow public read access to cetes_rates" 
ON public.cetes_rates FOR SELECT 
USING (true);

-- Only allow system to insert/update rates
CREATE POLICY "Allow system to manage cetes_rates" 
ON public.cetes_rates FOR ALL 
USING (false);
