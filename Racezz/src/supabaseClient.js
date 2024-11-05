import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://xuzcvpiqznqkumjlodpc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1emN2cGlxem5xa3VtamxvZHBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3ODEyMzgsImV4cCI6MjA0NjM1NzIzOH0.pxPIlTq5LW9sk-dMAsqEFWaK0CvKjwgRPy6DwDjRFyE';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
