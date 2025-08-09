import { CategoryType, CommentType, NicknameType, ThreadType, VoteType } from "./enum";

export async function getEverything<T>(topic: string): Promise<T[]> {
  const res = await fetch(`/data/${topic}.json`);
  const data: T[] = await res.json();
  return data;
}

export async function getNickname(userId: number, threadId: number) {
  const data = await getEverything<NicknameType>("nicknames");
  return data.find((nickname) => nickname.userId === userId && nickname.threadId === threadId);
}

export async function getThreadByThought(thought: string) {
  const data = await getEverything<ThreadType>("threads");
  return data.find((thread) => thread.thought === thought);
}

export async function getThreadsByCategoryId(id: number) {
  const data = await getEverything<ThreadType>("threads");
  return data.filter((thread) => thread.categoryIds.includes(id));
}

export async function getCommentsByThreadId(id: number) {
  const data = await getEverything<CommentType>("comments");
  return data.filter((comment) => comment.threadId === id);
}

export async function getCategoriesByType(type: string) {
  const data = await getEverything<CategoryType>("categories");
  return data.filter((category) => category.type === type);
}

export async function getCategoryByTypeAndTitle(type: string, title: string) {
  const data = await getEverything<CategoryType>("categories");
  return data.find((category) => category.type === type && category.title === title);
}

export async function getCategoriesByThread(categoryIds: number[]) {
  const data = await getEverything<CategoryType>("categories");
  return data.filter((category) => categoryIds.includes(category.id));
}

export async function getVotesByThread(id: number) {
  const data = await getEverything<VoteType>("votes");
  return data.filter((vote) => vote.threadId === id);
}