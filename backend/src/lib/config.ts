function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

const VERSION = "v1";
// Read lazily so each function only needs the variables it actually uses.
export const config = {
  // get userPoolId() {
  //   return required('USER_POOL_ID');
  // },
  get clientId() {
    return required("CLIENT_ID");
  },
  get avatarBucket() {
    return required("AVATAR_BUCKET");
  },
  get version() {
    return VERSION;
  },
};
