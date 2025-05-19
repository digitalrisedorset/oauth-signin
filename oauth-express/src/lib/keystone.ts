import {Profile} from "passport-google-oauth20";

export interface KeystoneUser {
    id: string;
    email: string;
    name: string;
    provider?: 'credentials' | 'google' | 'apple';
}

type KeystoneUpdateUserResponse = {
    data: {
        upsertUser: KeystoneUser
    },
    errors: string[]
}

export const createOrUpdateUser = async (profile: Profile) => {
    const url = process.env.KEYSTONE_GRAPHQL_URL;
    if (!url) {
        throw new Error('❌ KEYSTONE_GRAPHQL_URL is not defined in the environment.');
    }

    const keystoneRes = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.KEYSTONE_SERVICE_TOKEN}`
        },
        body: JSON.stringify({
            query: `
              mutation UpsertUser($email: String!, $name: String, $provider: String!) {
                upsertUser(email: $email, name: $name, provider: $provider) {
                    id
                    email
                    name
                    provider  
                }
              }
            `,
            variables: {
                email: profile.emails?.[0]?.value,
                name: profile.displayName,
                provider: 'google',
            }
        })
    });

    const { data, errors } = await keystoneRes.json() as KeystoneUpdateUserResponse;
    if (errors) throw new Error("Keystone sync failed");

    return data.upsertUser;
}

type KeystoneUserResponse = {
    data: {
        user: KeystoneUser
    }
}

export const getKeystoneUserById = async (id: string) => {
    const keystoneRes = await fetch(`${process.env.KEYSTONE_GRAPHQL_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.KEYSTONE_SERVICE_TOKEN}`
        },
        body: JSON.stringify({
            query: `
              query User($where: UserWhereUniqueInput!) {
                  user(where: $where) {
                    id
                    email
                    name
                    provider 
                  }
                }
            `,
            variables: {
                where: {
                    id
                }
            }
        })
    });

    const json = await keystoneRes.json() as KeystoneUserResponse;
    return json.data?.user || null;
}

type AuthentifiedKeystoneUserResponse = {
    data: {
        authenticateUserWithPassword: {
            item: KeystoneUser
        }
    }
}

export async function fetchKeystoneUserByEmailAndPassword(email: string, password: string) {
    const res = await fetch(`${process.env.KEYSTONE_GRAPHQL_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.KEYSTONE_SERVICE_TOKEN}`,
        },
        body: JSON.stringify({
            query: `
        mutation AuthenticateUserWithPassword($email: String!, $password: String!) {
          authenticateUserWithPassword(email: $email, password: $password) {
            ... on UserAuthenticationWithPasswordSuccess {
              item {
                id
                email
                name
                provider     
              }
            }
            ... on UserAuthenticationWithPasswordFailure {
              message
            }
          }
        }
      `,
            variables: { email, password },
        }),
    });

    const json = await res.json() as AuthentifiedKeystoneUserResponse;
    return json?.data?.authenticateUserWithPassword?.item || null;
}
