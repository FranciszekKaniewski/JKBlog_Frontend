import {User} from "../user/user";

export type CommentType = {
    user:User;
    id: string;
    content: string;
    ownerId: string;
    postId: string;
    createTime: Date;
}