import {list} from "@keystone-6/core";
import {allowAll} from "@keystone-6/core/access";
import {password, text, checkbox, select, timestamp} from "@keystone-6/core/fields";
import { graphql } from '@keystone-6/core';

const commonPasswords = [
    "password", "123456", "123456789", "qwerty", "abc123", "password1", "123123"
];

export const User = list({
    access: allowAll,
    fields: {
        name: text({
            isFilterable: true,
            isOrderable: false
        }),
        email: text({
            isFilterable: true,
            isOrderable: false,
            isIndexed: 'unique',
            validation: {
                isRequired: true,
            },
        }),
        provider: select({
            options: [
                { label: 'Credentials', value: 'credentials' },
                { label: 'Google', value: 'google' },
                { label: 'Apple', value: 'apple' },
            ],
            defaultValue: 'credentials',
        }),
        // the user's password, used as the secret field for authentication
        //   should not be publicly visible
        password: password({
            hooks: {
                validateInput: async ({ resolvedData, item, addValidationError }) => {
                    const provider = resolvedData.provider ?? item?.provider ?? null;
                    const pwd = resolvedData.password ?? item?.password;

                    if (provider === 'credentials') {
                        if (!pwd) {
                            addValidationError('Password is required for credential-based users.');
                        } else if (pwd.length < 8) {
                            addValidationError('Password must be at least 8 characters long.');
                        }
                    }
                },
            },
        }),
        isAdmin: checkbox({
            defaultValue: false,
        }),
        createdAt: timestamp({
            defaultValue: { kind: 'now' },
        }),
    },
    hooks: {
        validateInput: async ({ resolvedData, addValidationError }) => {
            if (resolvedData.password && commonPasswords.includes(resolvedData.password.toLowerCase())) {
                addValidationError("This password is too common. Please choose a stronger one.");
            }
        },
    },
})

export const extendGraphqlSchema = graphql.extend(base => {
    return {
        mutation: {
            upsertUser: graphql.field({
                type: base.object('User'),
                args: {
                    email: graphql.arg({ type: graphql.nonNull(graphql.String) }),
                    name: graphql.arg({ type: graphql.String }),
                    provider: graphql.arg({ type: graphql.String }),
                },
                async resolve(root, { email, name, provider }, context) {
                    const existing = await context.db.User.findOne({ where: { email } });

                    if (existing) {
                        return await context.db.User.updateOne({
                            where: { id: existing.id },
                            data: {
                                name,
                                provider,
                            },
                        });
                    }

                    return await context.db.User.createOne({
                        data: {
                            email,
                            name,
                            provider,
                        },
                    });
                },
            }),
        },
    };
});
