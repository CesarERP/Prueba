import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

// 1. Extraemos la función de autenticación
const { auth } = NextAuth(authConfig);

// 2. La envolvemos en una función explícita para que Next.js la reconozca sin problemas
export default function proxy(request: any) {
  return auth(request);
}

// 3. Mantenemos la configuración de las rutas a proteger
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};