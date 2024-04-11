export interface PostInfo {
    id: string;
    title: string;
    category: string;
    description: string | null;
    author: string | null;
    createTime: Date;
}
export interface Post {
    id: string;
    title: string;
    category: string;
    description: string | null;
    author: string | null;
    content: string;
    createTime: Date;
}
export interface CreatePost {
    title: string;
    category: string;
    description: string | null;
    author: string | null;
    content: string;
}