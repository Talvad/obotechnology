'use server';

import type { FormState } from '@/lib/types';
import z from 'zod';

function pick(
  raw: Record<string, unknown>,
  keys: string[],
): Record<string, string> {
  const out: Record<string, string> = {};
  for (const key of keys) if (typeof raw[key] === 'string') out[key] = raw[key];
  return out;
}
type Parsed<S extends z.ZodType> =
  | { ok: true; data: z.infer<S> }
  | { ok: false; state: NonNullable<FormState> };

function parse<S extends z.ZodType>(
  schema: S,
  formData: FormData,
  keep: string[] = ['email'],
): Parsed<S> {
  const raw = Object.fromEntries(formData);
  const result = schema.safeParse(raw);
  if (result.success) return { ok: true, data: result.data };
  return {
    ok: false,
    state: {
      fieldErrors: result.error.flatten().fieldErrors as Record<
        string,
        string[] | undefined
      >,
      values: pick(raw, keep),
    },
  };
}

const email = z.email('Enter a valid email address');
const password = z
  .string()
  .min(8, 'At least 8 characters')
  .regex(/[a-z]/, 'Include a lowercase letter')
  .regex(/[A-Z]/, 'Include an uppercase letter')
  .regex(/[0-9]/, 'Include a number');
const code = z.string().trim().min(6, 'Enter the code from your email');

// SIGN UP
const signupSchema = z
  .object({
    name: z.string().trim().min(1, 'Enter your name').max(30),
    email,
    password,
    confirmPassword: z.string(),
  })
  .refine((v) => v.password === v.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

export async function signupAction(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsed = parse(signupSchema, formData, ['name', 'email']);
  if (!parsed.ok) return parsed.state;
  const { name, email, password } = parsed.data;
  return { error: 'Error message', values: { name, email } };
}

// CONFIRM
const confirmSchema = z.object({ email, code });
export async function confirmAction(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsed = parse(confirmSchema, formData);
  if (!parsed.ok) return parsed.state;
  const { email } = parsed.data;
  return { error: 'Error message', values: { email } };
}

// RESEND
const emailSchema = z.object({ email });
export async function resendCodeAction(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsed = parse(emailSchema, formData);
  if (!parsed.ok) return parsed.state;
  const { email } = parsed.data;
  return { error: 'Error message', values: { email } };
}

// LOGIN
const loginSchema = z.object({
  email,
  password: z.string().min(1, 'Enter your password'),
});
export async function loginAction(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsed = parse(loginSchema, formData);
  if (!parsed.ok) return parsed.state;
  const { email, password } = parsed.data;
  return { error: 'Error message', values: { email } };
}
