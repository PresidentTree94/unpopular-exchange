export enum Type {
  OPINIONS = "opinions",
  PEEVES = "peeves"
}

export interface CategoryType {
  id: number;
  title: string;
  icon: string;
  type: Type;
}

export interface ThreadType {
  id: number;
  userId: number;
  categoryIds: number[];
  thought: string;
  context: string;
}

export interface VoteType {
  userId: number;
  threadId: number;
  vote: string;
}

export interface NicknameType {
  userId: number;
  threadId: number;
  useHandle: boolean;
  nickname: string;
}

export interface CommentType {
  id: number;
  threadId: number;
  parentId: number;
  userId: number;
  replyId: number;
  message: string;
}