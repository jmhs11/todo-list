export interface Todo {
  $key?: string | null;
  userId?: string;
  title: string;
  description: string;
  done: boolean;
}
