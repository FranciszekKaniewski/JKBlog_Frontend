export type User = {
    username: string;
    name: string | null;
    surname: string | null;
    email: string;
    role: string;
    createTime: Date;
}

export type UserEditType = {
    username?: string;
    name?: string;
    surname?: string;
    email?: string;
}

export type UserInfoType = {
    username: string|null;
    role: string|null;
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