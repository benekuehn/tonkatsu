import { menuItemsRouter } from "@/server/api/routers/menuItem";
import { createTRPCRouter } from "@/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  menuItems: menuItemsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
