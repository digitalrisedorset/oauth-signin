import {list} from "@keystone-6/core";
import {allowAll} from "@keystone-6/core/access";
import {password, text, checkbox, virtual} from "@keystone-6/core/fields";
import type {Session} from "../schema";

export const isAdminOrSameUser = ({ session }: { session?: Session }) => {
    // you need to have a session to do this
    if (!session || !session.data) return false

    // admins can do anything
    if (session.data.isAdmin) return true

    return false
}

export const isAdmin = ({ session }: { session?: Session }) => {
    // you need to have a session to do this
    if (!session || !session.data) return false

    // admins can do anything
    if (session.data.isAdmin) return true

    // otherwise, no
    return false
}

const commonPasswords = [
    "password", "123456", "123456789", "qwerty", "abc123", "password1", "123123"
];

export const User = list({
    access: allowAll,
    ui: {
        listView: {
            initialColumns: ['name', 'email'],
        },
    },
    fields: {
        name: text({
            access: allowAll,
            isFilterable: true,
            isOrderable: false
        }),
        email: text({
            access: allowAll,
            isFilterable: true,
            isOrderable: false,
            isIndexed: 'unique',
            validation: {
                isRequired: true,
            },
        }),
        // the user's password, used as the secret field for authentication
        //   should not be publicly visible
        password: password({
            validation: {
                isRequired: true,
                minLength: 8, // ✅ Minimum length applies to all users
            },
            hooks: {
                validateInput: async ({ resolvedData, addValidationError }) => {
                    if (resolvedData.password) {
                        const userIsAdmin = resolvedData.isAdmin;

                        if (userIsAdmin) {
                            const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d@$!%*?&]{8,}$/;

                            if (!strongPasswordRegex.test(resolvedData.password)) {
                                addValidationError(
                                    "Admin password must be at least 8 characters, contain 1 uppercase letter, 1 number, and 1 special character."
                                );
                            }
                        }
                    }
                },
            },
        }),
        isAdmin: checkbox({
            access: {
                // only the respective user, or an admin can read this field
                read: isAdminOrSameUser,

                // only admins can create, or update this field
                create: isAdmin,
                update: isAdmin,
            },
            defaultValue: false,
            ui: {
                // only admins can edit this field
                createView: {
                    fieldMode: args => (isAdmin(args) ? 'edit' : 'hidden'),
                },
                itemView: {
                    fieldMode: args => (isAdmin(args) ? 'edit' : 'read'),
                },
            },
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
