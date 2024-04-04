import { authOptions } from '@/server/auth.js'
import NextAuth from 'next-auth'

export default NextAuth(authOptions)
