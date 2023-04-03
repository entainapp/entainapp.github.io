

export interface UserInfo {
    username?: string;
    email: string;
    password: string;
}

export interface UserState {
    isLoading: boolean;
    error: string | null;
    user: UserInfo | null;
}