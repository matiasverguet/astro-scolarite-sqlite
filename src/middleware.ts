// src/middleware.ts
import { getSession } from 'auth-astro/server';

export async function onRequest(context: any, next: any) {
  // Ne pas vérifier la session sur les routes d'authentification ou la page de login
  if (context.url.pathname.startsWith('/api/auth/') || context.url.pathname === '/login') {
    return next();
  }

  try {
    const session = await getSession(context.request);

    if (!session) {
      return context.redirect('/login');
    }

    return next();
  } catch (error) {
    console.error('Erreur de session:', error);
    return context.redirect('/login');
  }
}