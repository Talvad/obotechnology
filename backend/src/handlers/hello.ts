import { ApiEvent, ApiResult } from "../lib/auth";
import { HttpError, json, safely } from "../lib/http";

const HelloRoutes = {
  GET_HELLO: "GET /api/v1/hello",
};

export const handler = (event: ApiEvent): ApiResult => {
  return safely(async () => {
    switch (event.routeKey) {
      case HelloRoutes.GET_HELLO:
        return json(200, { message: "Hello from API, health is okay" });
      default:
        throw new HttpError(404, "Not Found", "NotFound");
    }
  });
};
