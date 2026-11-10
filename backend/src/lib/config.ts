function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

// Read lazily so each function only needs the variables it actually uses.
export const config = {
  // get userPoolId() {
  //   return required('USER_POOL_ID');
  // },
  get clientId() {
    return required("CLIENT_ID");
  },
};
