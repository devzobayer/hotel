import { getAuth, sendEmailVerification } from "firebase/auth";

const auth = getAuth();

export const sendVerificationEmail = async () => {
    if (auth.currentUser) {
        try {
            await sendEmailVerification(auth.currentUser);
            console.log('Verification email sent.');
        } catch (error) {
            console.error('Error sending verification email:', error);
        }
    } else {
        console.log('No user is signed in.');
    }
};