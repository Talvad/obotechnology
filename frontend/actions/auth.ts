'use server';

import { SignInSchema, SignUpSchema } from './schema';
import { FormState } from './type';

export async function signUp(
  _: FormState,
  formData: FormData,
): Promise<FormState> {
  const rawData = {
    name: String(formData.get('name') ?? ''),
    email: String(formData.get('email') ?? ''),
    password: String(formData.get('password') ?? ''),
    confirmPassword: String(formData.get('confirm-password') ?? ''),
  };

  const result = SignUpSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      message: 'Validation failed. Please correct the highlighted errors.',
      errors: result.error.flatten().fieldErrors,
      fields: {
        name: rawData.name,
        email: rawData.email,
      },
    };
  }

  const { name, email, password } = result.data;

  try {
    console.log('SIGN UP SUCCESS', { name, email, password });
  } catch (error) {
    console.log('SIGN UP ERROR', error);
    let errorMessage = 'User account creation failed.';

    return {
      success: false,
      message: errorMessage,
    };
  }

  return {
    success: true,
    message: 'User account created successfully.',
  };
}

export async function signIn(_: FormState, formData: FormData) {
  const rawData = {
    email: String(formData.get('email') ?? ''),
    password: String(formData.get('password') ?? ''),
  };

  const result = SignInSchema.safeParse(rawData);

  if (!result.success) {
    return {
      success: false,
      message: 'Validation failed. Please correct the highlighted errors.',
      errors: result.error.flatten().fieldErrors,
      fields: {
        email: rawData.email,
      },
    };
  }

  const { email, password } = result.data;

  try {
    console.log('SIGN IN SUCCESS', { email, password });
  } catch (error) {
    console.log('SIGN IN ERROR', error);
    let errorMessage = 'Invalid email or password.';

    return {
      success: false,
      message: errorMessage,
    };
  }

  return {
    success: true,
    message: 'User logged in successfully.',
  };
}
