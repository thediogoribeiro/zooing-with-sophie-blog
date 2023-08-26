import { createClient } from '@supabase/supabase-js'
import { EnvironmentVariables } from '../environment'

/*export const supabase = createClient(
  EnvironmentVariables.supabaseUrl,
  EnvironmentVariables.supabaseKey
)*/

export const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY
)