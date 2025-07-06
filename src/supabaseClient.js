import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oedrnuskcbrnygwuyrls.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lZHJudXNrY2Jybnlnd3V5cmxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4MDkwMDYsImV4cCI6MjA2NzM4NTAwNn0.nIr-vY14XR4q_iO5HNFtBDc1LnF_wiEzPVdLJdJK4Sc";
export const supabase = createClient(supabaseUrl, supabaseKey);
