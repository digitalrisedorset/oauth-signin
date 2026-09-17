export type LoginCredentials = {
    email: string;
    password: string;
};

export type LoginResult =
    | { success: true }
    | { success: false; error: string };

export async function loginWithCredentials(
    credentials: LoginCredentials
): Promise<LoginResult> {
    const response = await fetch('/api/login-with-credentials', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });

    return response.json();
}