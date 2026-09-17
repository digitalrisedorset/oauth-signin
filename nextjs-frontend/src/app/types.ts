type Gender = '' | 'female' | 'male' | 'other';

export type RegisterFormValues = {
    name: string; gender: Gender; email: string;
} & {
    password: string; confirmPassword: string;
}