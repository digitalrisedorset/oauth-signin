/* eslint-disable */

export type UserWhereUniqueInput = {
  readonly id?: string | null
  readonly email?: string | null
}

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput> | UserWhereInput | null
  readonly OR?: ReadonlyArray<UserWhereInput> | UserWhereInput | null
  readonly NOT?: ReadonlyArray<UserWhereInput> | UserWhereInput | null
  readonly id?: IDFilter | null
  readonly name?: StringFilter | null
  readonly email?: StringFilter | null
  readonly provider?: StringNullableFilter | null
  readonly password?: PasswordFilter | null
  readonly isAdmin?: BooleanFilter | null
  readonly createdAt?: DateTimeNullableFilter | null
}

export type IDFilter = {
  readonly equals?: string | null
  readonly in?: ReadonlyArray<string> | string | null
  readonly notIn?: ReadonlyArray<string> | string | null
  readonly lt?: string | null
  readonly lte?: string | null
  readonly gt?: string | null
  readonly gte?: string | null
  readonly not?: IDFilter | null
}

export type StringFilter = {
  readonly equals?: string | null
  readonly in?: ReadonlyArray<string> | string | null
  readonly notIn?: ReadonlyArray<string> | string | null
  readonly lt?: string | null
  readonly lte?: string | null
  readonly gt?: string | null
  readonly gte?: string | null
  readonly contains?: string | null
  readonly startsWith?: string | null
  readonly endsWith?: string | null
  readonly not?: NestedStringFilter | null
}

export type NestedStringFilter = {
  readonly equals?: string | null
  readonly in?: ReadonlyArray<string> | string | null
  readonly notIn?: ReadonlyArray<string> | string | null
  readonly lt?: string | null
  readonly lte?: string | null
  readonly gt?: string | null
  readonly gte?: string | null
  readonly contains?: string | null
  readonly startsWith?: string | null
  readonly endsWith?: string | null
  readonly not?: NestedStringFilter | null
}

export type StringNullableFilter = {
  readonly equals?: string | null
  readonly in?: ReadonlyArray<string> | string | null
  readonly notIn?: ReadonlyArray<string> | string | null
  readonly lt?: string | null
  readonly lte?: string | null
  readonly gt?: string | null
  readonly gte?: string | null
  readonly contains?: string | null
  readonly startsWith?: string | null
  readonly endsWith?: string | null
  readonly not?: StringNullableFilter | null
}

export type PasswordFilter = {
  readonly isSet: boolean
}

export type BooleanFilter = {
  readonly equals?: boolean | null
  readonly not?: BooleanFilter | null
}

export type DateTimeNullableFilter = {
  readonly equals?: any | null
  readonly in?: ReadonlyArray<any> | any | null
  readonly notIn?: ReadonlyArray<any> | any | null
  readonly lt?: any | null
  readonly lte?: any | null
  readonly gt?: any | null
  readonly gte?: any | null
  readonly not?: DateTimeNullableFilter | null
}

export type UserOrderByInput = {
  readonly id?: OrderDirection | null
  readonly name?: OrderDirection | null
  readonly email?: OrderDirection | null
  readonly provider?: OrderDirection | null
  readonly isAdmin?: OrderDirection | null
  readonly createdAt?: OrderDirection | null
}

export type OrderDirection =
  | 'asc'
  | 'desc'

export type UserUpdateInput = {
  readonly name?: string | null
  readonly email?: string | null
  readonly provider?: string | null
  readonly password?: string | null
  readonly isAdmin?: boolean | null
  readonly createdAt?: any | null
}

export type UserUpdateArgs = {
  readonly where: UserWhereUniqueInput
  readonly data: UserUpdateInput
}

export type UserCreateInput = {
  readonly name?: string | null
  readonly email?: string | null
  readonly provider?: string | null
  readonly password?: string | null
  readonly isAdmin?: boolean | null
  readonly createdAt?: any | null
}

export type KeystoneAdminUIFieldMetaIsNonNull =
  | 'read'
  | 'create'
  | 'update'

export type KeystoneAdminUIFieldMetaItemViewFieldPosition =
  | 'form'
  | 'sidebar'

export type KeystoneAdminUIFieldMetaListViewFieldMode =
  | 'read'
  | 'hidden'

export type QueryMode =
  | 'default'
  | 'insensitive'

export type KeystoneAdminUIActionMetaItemViewNavigation =
  | 'follow'
  | 'refetch'
  | 'return'

export type KeystoneAdminUISortDirection =
  | 'ASC'
  | 'DESC'

type ResolvedUserCreateInput = {
  id?: import('../prisma/client.js').Prisma.UserCreateInput['id']
  name?: import('../prisma/client.js').Prisma.UserCreateInput['name']
  email?: import('../prisma/client.js').Prisma.UserCreateInput['email']
  provider?: import('../prisma/client.js').Prisma.UserCreateInput['provider']
  password?: import('../prisma/client.js').Prisma.UserCreateInput['password']
  isAdmin?: import('../prisma/client.js').Prisma.UserCreateInput['isAdmin']
  createdAt?: import('../prisma/client.js').Prisma.UserCreateInput['createdAt']
}
type ResolvedUserUpdateInput = {
  id?: undefined
  name?: import('../prisma/client.js').Prisma.UserUpdateInput['name']
  email?: import('../prisma/client.js').Prisma.UserUpdateInput['email']
  provider?: import('../prisma/client.js').Prisma.UserUpdateInput['provider']
  password?: import('../prisma/client.js').Prisma.UserUpdateInput['password']
  isAdmin?: import('../prisma/client.js').Prisma.UserUpdateInput['isAdmin']
  createdAt?: import('../prisma/client.js').Prisma.UserUpdateInput['createdAt']
}

export interface Session {}
type __Session = keyof Session extends never ? any : Session

export declare namespace Lists {
  export type User<Session = __Session> = import('@keystone-6/core/types').ListConfig<Lists.User.TypeInfo<Session>>
  namespace User {
    export type Item = import('../prisma/client.js').User
    export type TypeInfo<Session = __Session> = {
      key: 'User'
      isSingleton: false
      fields: 'id' | 'name' | 'email' | 'provider' | 'password' | 'isAdmin' | 'createdAt'
      actions: never
      item: Item
      inputs: {
        where: UserWhereInput
        uniqueWhere: UserWhereUniqueInput
        create: UserCreateInput
        update: UserUpdateInput
        orderBy: UserOrderByInput
      }
      prisma: {
        create: ResolvedUserCreateInput
        update: ResolvedUserUpdateInput
      }
      all: __TypeInfo<Session>
    }
  }
}
export type Context<Session = __Session> = import('@keystone-6/core/types').KeystoneContext<TypeInfo<Session>>
export type Config<Session = __Session> = import('@keystone-6/core/types').KeystoneConfig<TypeInfo<Session>>

export type TypeInfo<Session = __Session> = {
  lists: {
    readonly User: Lists.User.TypeInfo<Session>
  }
  prisma: import('../prisma/client.js').PrismaClient
  prismaClientOptions: import('../prisma/client.js').Prisma.PrismaClientOptions
  session: Session
  dbProvider: 'sqlite'
}

type __TypeInfo<Session = __Session> = TypeInfo<Session>

export type Lists<Session = __Session> = {
  [Key in keyof TypeInfo['lists']]?: import('@keystone-6/core/types').ListConfig<TypeInfo<Session>['lists'][Key]>
} & Record<string, import('@keystone-6/core/types').ListConfig<any>>

export {}
