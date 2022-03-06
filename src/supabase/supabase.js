import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database 
const supabase = createClient('https://kjdfchehyjheuutobjdb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNjczMDA0OCwiZXhwIjoxOTMyMzA2MDQ4fQ.9A3uBTWE5yztfnyrVdvQb1WM_IuvIimbmM3SU3PcNZM')

export {supabase}