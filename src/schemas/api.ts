export type ApiError = {
  message: string;
} | null;

export type ApiResponse<T> =
  | {
      data: null;
      error: ApiError;
    }
  | {
      data: T;
      error: null;
    };
