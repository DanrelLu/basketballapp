import { getServerSession } from "next-auth/next";
import { redirect } from "next-auth/next"; // Corrected import path
import { GoogleSignInButton } from 'next-auth/providers/google'; // Corrected import path

export default async function SignInPage() {
    return (
        <GoogleSignInButton />
    );
}
