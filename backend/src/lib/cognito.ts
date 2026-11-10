import { CognitoIdentityProviderClient } from '@aws-sdk/client-cognito-identity-provider';

// Created once per execution environment and reused across invocations.
export const cognito = new CognitoIdentityProviderClient({});
