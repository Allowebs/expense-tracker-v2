import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc'
import { createNewInvestmentHandler, getAllInvestmentsHandler } from './investment.handler'
import { ZCreateNewInvestmentInputSchema, ZGetAllInvestmentsInputSchema } from './investment.schema'
export const investmentRouter = createTRPCRouter({
  create: protectedProcedure.input(ZCreateNewInvestmentInputSchema).mutation(createNewInvestmentHandler),
  getAll: protectedProcedure.input(ZGetAllInvestmentsInputSchema).query(getAllInvestmentsHandler),
})
