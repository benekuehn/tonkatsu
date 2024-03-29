import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { menuItems } from "@/server/db/schema";

export const menuItemsRouter = createTRPCRouter({
  // create: protectedProcedure
  //   .input(z.object({ name: z.string().min(1) }))
  //   .mutation(async ({ ctx, input }) => {
  // simulate a slow db call
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  //     await ctx.db.insert(menuItems).values({
  //       name: input.name,
  //       createdById: ctx.session.user.id,
  //     });
  //   }),

  getLatest: publicProcedure.query(async ({ ctx }) => {
    // await new Promise((resolve) => setTimeout(resolve, 5000));

    return ctx.db.query.menuItems.findFirst({
      orderBy: (posts, { desc }) => [desc(posts.createdAt)],
    });
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
