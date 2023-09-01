import { useState } from 'react';
import { auth } from './firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/router'; // Import useRouter hook

const SignInBox = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const router = useRouter(); // Initialize useRouter hook

  const loginWithGoogle = async () => {
    setIsLoggingIn(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('Logged in with Google', result.user);
      // Handle successful login and redirect to a new path
      router.push('/home'); // Replace '/dashboard' with the desired new path
    } catch (error) {
      console.error('Google login error:', error);
      // Handle login error
    }
    setIsLoggingIn(false);
  };

  return (
    <div className="signin-box">
     <div>
       <img src="images/bg1.png" alt="Responsive Image" className="img-fluid" />
       </div>
       <div style={{width:"20%",height:"20%", position:"absolute",top:"1px",display:"flex",alignItems:"center",justifyContent:"center"}}>
       <img src="images/bg2.png" alt="Responsive Image" className="img-fluid" />
       </div>
       <div style={{width:"100%",height:"50%", position:"absolute",top:"10px",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <button
        className="google btn btn-danger"
        disabled={isLoggingIn}
        onClick={loginWithGoogle}
      >
        {isLoggingIn ? 'Logging in...' : 'Log In'}
      </button>
      &nbsp;&nbsp;
      <button
        className="google btn btn-danger"
        disabled={isLoggingIn}
        onClick={loginWithGoogle}
      >
        {isLoggingIn ? 'Logging in...' : 'Sign up'}
      </button>

      </div>
      
       <div>
       <h1 style={{display:"flex",alignItems:"center",justifyContent:"center",position:"relative",top:"-280px",color:"white"}}>Find the best restaurants, cafés and bars in India</h1>
       </div>
    
    </div>
  );
};

export default SignInBox;
