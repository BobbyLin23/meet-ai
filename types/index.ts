import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "~/server/trpc/routers";

export type AgentGetOne = inferRouterOutputs<AppRouter>['agents']['getOne']
