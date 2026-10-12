export type UserAccess = 'seller' | 'cmseditor';

export interface UserInformation {
    id: string
    email: string
    name: string
    access: UserAccess[]
}