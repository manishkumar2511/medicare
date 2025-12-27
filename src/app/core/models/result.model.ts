export interface Result<T> {
  data: T | null;
  messages: string[];
  succeeded: boolean;
}