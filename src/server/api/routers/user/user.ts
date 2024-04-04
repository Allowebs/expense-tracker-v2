import { createTRPCRouter, protectedProcedure, publicProcedure } from '@/server/api/trpc'
import { createNewUserHandler, getCurrentUserHandler } from './user.handler'
import { ZCreateNewUserInputSchema } from './user.schema'

export const userRouter = createTRPCRouter({
  create: publicProcedure.input(ZCreateNewUserInputSchema).mutation(createNewUserHandler),
  me: protectedProcedure.query(getCurrentUserHandler),
})
