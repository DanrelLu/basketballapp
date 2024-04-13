"use client";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import SignIn from "./pages/signin";
import useSession from 'next-auth/react';
import redirect from "next/navigation";
import prisma from '../app/lib/prismadb';

// Your client-side code

async function fetchUsers() {
  try {
    const response = await fetch('/api/users');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const users = await response.json();
    console.log('Users from the database:', users);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

// Call the fetchUsers function when needed
fetchUsers();

export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signin" element={<SignIn />}/>
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
});

// import { GoogleSignInButton } from 'next-auth/providers/google';

// export default function SignInPage() {
//   return (
//     <div>
//       <h1>Sign In Page</h1>
//       <GoogleSignInButton />
//     </div>
//   );
// }

