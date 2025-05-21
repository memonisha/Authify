'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="container fade-in" style={{ textAlign: 'center' }}>
      <h1 style={{ marginBottom: '2rem' }}>Welcome to Authify 🔐</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
        <Link href="/login">
          <button>Login</button>
        </Link>
        <Link href="/signup">
          <button>Sign Up</button>
        </Link>
      </div>

      {/* Robot image below */}
      <div style={{ marginTop: '3rem' }}>
        <img src="/bot.gif" alt="Robot" style={{ width: '300px', height: 'auto' }} />
      </div>
    </main>
  );
}