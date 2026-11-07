import { z } from 'zod';
const SignUpSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: 'Name must be at least 2 characters long.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    password: z
      .string()
      .min(8, { message: 'Password must be at least 8 characters long.' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  });

const SignInSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  password: z.string().min(8, { message: 'Please enter a password.' }),
});
export { SignUpSchema, SignInSchema };
