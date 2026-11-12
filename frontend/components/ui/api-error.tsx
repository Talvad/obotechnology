import { ApiResult } from '@/lib/api';

type Props = {
  result: Extract<ApiResult<unknown>, { ok: false }>;
};

export default function ApiError({ result }: Props) {
  return <div>{result.message}</div>;
}
