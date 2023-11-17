import supabase from './supabase';

export const fetchUserDetails = async (email: string) => {
  const { data: scholar } = await supabase
    .from('scholars_profiles')
    .select('*')
    .eq('email', email)
    .single();
  if (scholar?.email) {
    return scholar;
  }
  const { data: staffMember } = await supabase
    .from('staff')
    .select('*')
    .eq('email', email)
    .single();
  if (staffMember.email) {
    return staffMember;
  }
};
