import React, { useRef, useState } from 'react'
import Header from './Header'
import { validate } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const [isSignIn, setIsSignIn] = useState(true);
    const [isValid, setIsValid] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    // console.log(password.current.value)

    function handleSignIn() {
        setIsSignIn(!isSignIn);
    }
    function handleValidate(e) {
        e.preventDefault();
        const message = validate(email.current.value, password.current.value);
        setIsValid(message);

        if (message) return;

        if (!isSignIn) {
            // sign up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: "https://fz-ansari.github.io/FZPortfolio/img/simple.png"
                    }).then(() => {
                        const { uid, email, photoURL, displayName } = auth.currentUser;
                        dispatch(addUser({
                            uid: uid,
                            email: email,
                            avatar: photoURL,
                            name: displayName
                        }));

                    }).catch((error) => {
                        setIsValid(error.message);

                    });

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setIsValid(errorCode + '-' + errorMessage);
                    // ..
                });
        } else {
            // sign in
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setIsValid(errorCode + '-' + errorMessage);

                });
        }
    }
    return (
        <div className='relative h-[100vh]'>
            <Header />
            <div>
                <img className='absolute h-full w-full' src='https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_small.jpg' alt='banner of netflix' />
            </div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-85 px-16 py-10 w-[30%] rounded-lg' >
                <h1 className='text-white text-4xl pb-10 pt-0 font-semibold' >{isSignIn ? "Sign In" : "Sign Up"}</h1>
                <form className='flex flex-col gap-4' >
                    {!isSignIn && <input type='text' ref={name} placeholder='Full Name' className='block w-full p-4 rounded-lg border outline-none bg-gray-700' />}
                    <input type='email' ref={email} placeholder='Email or Mobile Number' className='block w-full p-4 rounded-lg border outline-none bg-gray-700' />
                    <input type='password' ref={password} placeholder='Password' className='block w-full p-4 rounded-lg border outline-none bg-gray-700' />
                    {isValid !== null ? <p className='text-red-600' >{isValid}</p> : ''}
                    <button className='bg-red-600 text-white font-semibold rounded-lg p-4' onClick={(e) => handleValidate(e)} >{isSignIn ? 'Sign In' : 'Sign up'}</button>
                    <p className='text-white cursor-pointer' onClick={handleSignIn}> {isSignIn ? <>New to Netflix?<span className='font-semibold'> Sign up Now</span></> : <>Already have account?<span className='font-semibold'> Sign in Now</span></>} </p>
                </form>
            </div>
        </div>
    )
}

export default Login