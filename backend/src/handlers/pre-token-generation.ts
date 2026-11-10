import { scopesForGroups } from "../lib/scopes";

// Minimal shape of the Pre Token Generation V2 event (trigger version V2_0).
interface PreTokenGenerationV2Event {
  request: {
    groupConfiguration?: {
      groupsToOverride?: string[];
    };
  };
  response: {
    claimsAndScopeOverrideDetails?: {
      accessTokenGeneration?: {
        scopesToAdd?: string[];
      };
    };
  };
  [key: string]: unknown;
}

/**
 * Runs whenever Cognito issues tokens (login, refresh, hosted UI).
 * Adds scopes derived from the user's groups to the access token so the HTTP API
 * JWT authorizer can enforce AuthorizationScopes per route.
 */
export const handler = async (event: PreTokenGenerationV2Event) => {
  const groups = event.request.groupConfiguration?.groupsToOverride ?? [];
  const scopes = scopesForGroups(groups);

  if (scopes.length > 0) {
    event.response.claimsAndScopeOverrideDetails = {
      ...event.response.claimsAndScopeOverrideDetails,
      accessTokenGeneration: {
        ...event.response.claimsAndScopeOverrideDetails?.accessTokenGeneration,
        scopesToAdd: scopes,
      },
    };
  }
  return event;
};
