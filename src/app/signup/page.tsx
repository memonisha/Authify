'use client';

import { useState, useEffect, FormEvent } from 'react';
import supabase from '../../utils/supabaseClient';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

// Wrap the search params usage in a separate component
function SignupContent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const isAutoVerified = searchParams.get('verified') === 'true';

  useEffect(() => {
    if (isAutoVerified) {
      setMessage('✅ Your email has been verified successfully!');
    }
  }, [isAutoVerified]);

  async function handleSignup(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setMessage('');

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/verified`,
      },
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      setMessage(
        '✅ Signup successful! Please check your email to confirm your address before logging in.'
      );
    }

    setLoading(false);
  }

  return (
    <main className="container fade-in">
      <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Sign Up</h2>

      {message && <div className="alert alert-success">{message}</div>}
      {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>

      <p style={{ marginTop: '1rem', textAlign: 'center' }}>
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </main>
  );
}

// Main component with Suspense boundary
export default function Signup() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignupContent />
    </Suspense>
  );
}