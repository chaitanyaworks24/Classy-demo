'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
  const password = formData.get('password');

  // Very simple demo auth
  const demoPassword = process.env.NEXT_PUBLIC_STUDIO_DEMO_PASSWORD || 'demo@123';

  if (password === demoPassword) {
    const cookieStore = await cookies();
    cookieStore.set('studio_session', 'authenticated', { path: '/' });
    redirect('/studio');
  }

  return { error: 'Invalid password. Try "demo@123" for this prototype.' };
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('studio_session');
  redirect('/studio/login');
}
