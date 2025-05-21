'use client';

import Link from 'next/link';

export default function Landing() {
  return (
    <main className="container fade-in" style={{ textAlign: 'center' }}>
      <h1>Login Successful!</h1>
      <p style={{ margin: '1rem 0' }}>Welcome back to your dashboard.</p>
      <Link href="/" passHref>
        <button>Go to Homepage</button>
      </Link>
        {/* Robot image below */}
      <div style={{ marginTop: '3rem' }}>
        <img src="/flyingbot.gif" alt="Robot" style={{ width: '300px', height: 'auto' }} />
      </div>
    </main>
  );
}
