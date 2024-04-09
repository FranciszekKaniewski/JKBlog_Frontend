export interface PostInfo {
    id: string;
    title: string;
    category: string;
    description: string | null;
    author: string | null;
    createTime: Date;
}