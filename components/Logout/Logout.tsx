import { Button } from '@chakra-ui/button';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { BiLogOut } from 'react-icons/bi';
export const Logout = () => {
  const supabaseClient = useSupabaseClient();

  const router = useRouter();

  const handleSignout = () => {
    supabaseClient.auth.signOut();
    router.push('/');
  };
  return (
    <>
      <Button
        onClick={handleSignout}
        colorScheme='red'
        leftIcon={<BiLogOut />}
        marginRight={'20px'}
      >
        Logout
      </Button>
    </>
  );
};
export default Logout;
