export type User = {
    username: string;
    name: string | null;
    surname: string | null;
    email: string;
    role: string;
    createTime: Date;
}

export type UserInfoType = {
    username: string;
    role: string;
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