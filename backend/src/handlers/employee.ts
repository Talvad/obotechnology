import { getGroups, type PromiseApiResult, type ApiEvent } from "../lib/auth";
import { HttpError, json, safely } from "../lib/http";

const Routes = {
  GET_EMPLOYEE_DASHBOARD: "GET /api/v1/employee/dashboard",
};

type RouteHandler = (event: ApiEvent) => PromiseApiResult;

const routeHandlers: Record<string, RouteHandler> = {
  [Routes.GET_EMPLOYEE_DASHBOARD]: async (event) => {
    return json(200, {
      message: "Employee Dashboard",
      groups: getGroups(event),
      // Replace with real data
      data: { openTasks: 0, announcements: [] },
    });
  },
};

export const handler = (event: ApiEvent): PromiseApiResult =>
  safely(async () => {
    const route = routeHandlers[event.routeKey];
    if (!route) throw new HttpError(404, "Not found", "NotFound");
    return route(event);
  });
