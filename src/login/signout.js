import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(); // Get the authentication instance

export const handleSignOut = (navigate) => {
  signOut(auth).then(() => {
    navigate('/'); // Redirect to the login page after sign-out
  }).catch((error) => {
    console.error('Error signing out:', error);
  });
};

export default handleSignOut;



