import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const {loginWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate();

    const from = location.state?.from?. pathname || "/"

    const handleGoogleSignIn = () => {
        loginWithGoogle()
        .then (result => {
            const googleLogged = result.user
            navigate(from, { replace: true });
        })
        .catch((error) => {
            console.log(error);
          })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Login with Google</button>
        </div>
    );
};

export default GoogleLogin;