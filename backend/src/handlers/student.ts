import { getGroups, type PromiseApiResult, type ApiEvent } from "../lib/auth";
import { HttpError, json, safely } from "../lib/http";

const StudentRoutes = {
  GET_COURSES: "GET /api/v1/student/courses",
};

type RouteHandler = (event: ApiEvent) => PromiseApiResult;

const routeHandlers: Record<string, RouteHandler> = {
  [StudentRoutes.GET_COURSES]: async (event) => {
    return json(200, {
      message: "Student courses",
      groups: getGroups(event),
      // Replace with real data
      data: { courses: [] },
    });
  },
};

export const handler = (event: ApiEvent): PromiseApiResult =>
  safely(async () => {
    const route = routeHandlers[event.routeKey];
    if (!route) throw new HttpError(404, "Not found", "NotFound");
    return route(event);
  });
