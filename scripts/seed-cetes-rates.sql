-- Create initial CETES rates data for production deployment
-- This script seeds the database with current market rates

INSERT INTO cetes_rates (
  id,
  rate_28_days,
  rate_91_days,
  rate_182_days,
  rate_364_days,
  fetched_at,
  is_current,
  created_at
) VALUES (
  gen_random_uuid(),
  10.45,
  10.25,
  10.15,
  10.05,
  NOW(),
  true,
  NOW()
) ON CONFLICT (is_current) WHERE is_current = true DO UPDATE SET
  rate_28_days = EXCLUDED.rate_28_days,
  rate_91_days = EXCLUDED.rate_91_days,
  rate_182_days = EXCLUDED.rate_182_days,
  rate_364_days = EXCLUDED.rate_364_days,
  fetched_at = EXCLUDED.fetched_at,
  created_at = EXCLUDED.created_at;

-- Log the initial seed operation
INSERT INTO rate_update_log (
  id,
  attempted_at,
  success,
  rates_fetched,
  created_at
) VALUES (
  gen_random_uuid(),
  NOW(),
  true,
  '{"28": 10.45, "91": 10.25, "182": 10.15, "364": 10.05}'::jsonb,
  NOW()
);
