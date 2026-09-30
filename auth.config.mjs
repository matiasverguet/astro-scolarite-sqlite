// auth.config.mjs
import Google from '@auth/core/providers/google';
import { defineConfig } from 'auth-astro';

export default defineConfig({
  // Ajoute cette ligne pour forcer le domaine HTTPS en production
  baseUrl: process.env.AUTH_URL || 'https://scolarite.verguet-bailly.fr',
  
  providers: [
    Google({
      clientId: import.meta.env.GOOGLE_CLIENT_ID,
      clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'select_account',
        },
      },
    }),
  ],

  callbacks: {
    async redirect({ url, baseUrl }) {
      return `${baseUrl}/`;
    },
  },
});