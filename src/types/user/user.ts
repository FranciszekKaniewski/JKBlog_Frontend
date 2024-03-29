export type User = {
    id: string;
    username: string;
    name: string | null;
    surname: string | null;
    email: string;
    role: string;
    hashPwd: string;
    createTime: Date;
    currentTokenId: string | null;
}

export type UserRegister = {
    username: string;
    email: string;
    name: string | null;
    surname: string | null;
    pwd: string;
}

export type UserLogin = {
    email: string;
    pwd: string;
}