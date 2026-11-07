export type FormState = {
  success: boolean;
  message?: string;
  errors?: Record<string, string[]>;
  fields?: Record<string, string>;
};
