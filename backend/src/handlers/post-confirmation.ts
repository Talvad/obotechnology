import type { PostConfirmationTriggerHandler } from "aws-lambda";
import {
  AdminAddUserToGroupCommand,
  AdminListGroupsForUserCommand,
} from "@aws-sdk/client-cognito-identity-provider";
import { cognito } from "../lib/cognito";

/**
 * Self-registered users land in the "students" group once they confirm their email.
 * Users that already have a group (e.g. created by an admin) are left alone.
 */
export const handler: PostConfirmationTriggerHandler = async (event) => {
  if (event.triggerSource !== "PostConfirmation_ConfirmSignUp") return event;

  const { userPoolId, userName } = event;

  const existing = await cognito.send(
    new AdminListGroupsForUserCommand({
      UserPoolId: userPoolId,
      Username: userName,
    }),
  );
  if ((existing.Groups ?? []).length > 0) return event;

  await cognito.send(
    new AdminAddUserToGroupCommand({
      UserPoolId: userPoolId,
      Username: userName,
      GroupName: "students",
    }),
  );
  return event;
};
