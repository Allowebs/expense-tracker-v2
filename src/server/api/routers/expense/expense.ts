import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc'
import { createNewExpenseHandler, getAllExpensesHandler } from './expense.handler'
import { ZCreateNewExpenseInputSchema, ZGetAllExpensesInputSchema } from './expense.schema'

export const expenseRouter = createTRPCRouter({
  create: protectedProcedure.input(ZCreateNewExpenseInputSchema).mutation(createNewExpenseHandler),
  getAll: protectedProcedure.input(ZGetAllExpensesInputSchema).query(getAllExpensesHandler),
})
