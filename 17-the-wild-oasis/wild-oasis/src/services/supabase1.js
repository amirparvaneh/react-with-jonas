import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://lioytfwsagkutdplrtid.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxpb3l0ZndzYWdrdXRkcGxydGlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ5MDI5MzAsImV4cCI6MjAzMDQ3ODkzMH0.RvYllcO9xjdoVZi5Vq5cgnjL95QAaWjB9IHC7StuzZA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
