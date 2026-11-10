export type FormState =
  | {
      error?: string;
      message?: string;
      fieldErrors?: Record<string, string[] | undefined>;
      /** Non-secret field values, so inputs are not wiped when a submit fails. */
      values?: Record<string, string>;
    }
  | undefined;

export type ApiUser = {
  username: string;
  email?: string;
  name?: string;
  status?: string;
  enabled?: boolean;
  createdAt?: string;
  groups: string[];
};

export type Me = {
  id?: string;
  email?: string;
  name?: string;
  groups: string[];
};
