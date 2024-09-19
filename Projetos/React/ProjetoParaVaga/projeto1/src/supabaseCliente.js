import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://qepilejtfjvxrfqjxkgg.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlcGlsZWp0Zmp2eHJmcWp4a2dnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3NzAyMzIsImV4cCI6MjA0MjM0NjIzMn0.cNdVXuGS6U-3lMWOMGcCQgsFmjZtU7MOi3aNaWt_AyA";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY); 
