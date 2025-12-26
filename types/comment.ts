export type Comment = {
  id: number;
  timestamp: string;
  take_id: number;
  parent_id: number;
  reply_id: number;
  content: string;
}