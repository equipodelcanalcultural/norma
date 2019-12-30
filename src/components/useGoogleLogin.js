import {useState, useEffect} from 'react';
import * as Google from 'expo-google-app-auth';

export function useGoogleLogin() {
    const [signedIn, setSignedIn] = useState({logged: false, token: '', name: ''})

    const signIn = async () => {
        const result = await Google.logInAsync({
            androidClientId: '1083777488269-dv4r1p8diatii377v4qb0gtliqbc9nnn.apps.googleusercontent.com',
            scopes: ['profile', 'email']
        })
        await setSignedIn({
            logged: true,
            token: result.accessToken,
            username: result.user.name,
            email: result.user.email,
            profilePicture: result.user.imageUrl

        })
       
    }

    return [signedIn, signIn]
}