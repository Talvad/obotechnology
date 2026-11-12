import {
  CognitoIdentityProviderClient,
  GetUserCommandOutput,
} from "@aws-sdk/client-cognito-identity-provider";

// Created once per execution environment and reused across invocations.
export const cognito = new CognitoIdentityProviderClient({});

export const attr = (user: GetUserCommandOutput, name: string) =>
  user.UserAttributes?.find((a) => a.Name === name)?.Value;
