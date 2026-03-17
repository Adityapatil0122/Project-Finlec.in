import NextAuth from 'next-auth'
import { authOptions } from '@/lib/auth'
const handler = NextAuth(authOptions)
console.log('NextAuth API route called');
export { handler as GET, handler as POST }
