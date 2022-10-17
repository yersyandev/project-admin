export interface IUser {
    id: string,
    username: string,
    email: string
}

export interface AuthResponse {
    accessToken: string,
    refreshToken: string,
    user: IUser
}