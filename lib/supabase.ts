import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

// These will be replaced by babel-plugin-transform-inline-environment-variables at build time
const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL) {
  throw new Error(
    "SUPABASE_URL is required. Check your environment variables and babel setup.",
  );
}
if (!SUPABASE_ANON_KEY) {
  throw new Error(
    "SUPABASE_ANON_KEY is required. Check your environment variables and babel setup.",
  );
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
