import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc'
import { createNewIncomeHandler, getAllIncomesHandler } from './income.handler'
import { ZCreateNewIncomeInputSchema, ZGetAllIncomesInputSchema } from './income.schema'

export const incomeRouter = createTRPCRouter({
  create: protectedProcedure.input(ZCreateNewIncomeInputSchema).mutation(createNewIncomeHandler),
  getAll: protectedProcedure.input(ZGetAllIncomesInputSchema).query(getAllIncomesHandler),
})
