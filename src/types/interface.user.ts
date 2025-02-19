export interface User {
    id: number
    name: string
    email: string
    role: string
}

export interface AuthState {
    user: User | null
    token: string | null
    isAuthenticated: boolean
    isLoading: boolean
    error: string | null
}

export interface LoginCredentials {
    email: string
    password: string
}

export interface LoginResponse {
    token: string
    user: User
}