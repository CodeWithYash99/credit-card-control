import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yijstnnqgzpnllvtfcui.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpanN0bm5xZ3pwbmxsdnRmY3VpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQxNDgyNjgsImV4cCI6MjAwOTcyNDI2OH0.d84aayZQnV0xWinWCUDKQ3Ml2Jyl7qLtVlev8yvLrQY'
export const supabase = createClient(supabaseUrl, supabaseKey)