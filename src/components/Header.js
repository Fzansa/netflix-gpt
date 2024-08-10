import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/contants';
import { toggleGpt } from '../utils/gptSlice';
import { SUPPOTED_LANG } from '../utils/languageConstants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const gptStatus = useSelector((store) => store.gpt.gptStatus);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, name: displayName, avatar: photoURL }));
                navigate('/browse');

            } else {
                // User is signed out
                dispatch(removeUser());
                navigate('/')

            }
        });

        return () => unsubscribe();
    }, [])

    function handleSignOut() {
        signOut(auth).then(() => {
        }).catch((error) => {
            navigate('/error')
        });
    }

    function handleGptSearch() {
        dispatch(toggleGpt());
    }

    function handleLang(val) {
        dispatch(changeLanguage(val));
    }

    return (
        <div className='absolute z-10 bg-gradient-to-b from-black w-full p-4 flex items-center justify-between' >
            <img className='w-44' src={LOGO} alt="logo hai netflixgpt" />
            {user && <div className='flex items-center justify-start gap-4' >
                {gptStatus && <select onChange={(e) => handleLang(e.target.value)} >
                    {SUPPOTED_LANG.map(lang => <option value={lang.identifier} key={lang.identifier}>{lang.languageName}</option>)}
                </select>}
                <button className='py-2 px-4 bg-purple-700 text-white rounded-lg' onClick={handleGptSearch} >{gptStatus ? 'Home Page' : 'GPT Search'}</button>
                <img alt='usericon' src={user?.avatar} className='w-12 ' />
                <button className='font-bold text-white' onClick={handleSignOut} >Sign Out</button>
            </div>}
        </div>
    )
}

export default Header