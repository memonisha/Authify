'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Verified() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/signup?verified=true');
    }, 2000); // 2 second wait

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="container fade-in" style={{ textAlign: 'center' }}>
      <h2>Email Verified!</h2>
      <p>Redirecting you back to complete signup…</p>
    </main>
  );
}
