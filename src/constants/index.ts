export const signUpFormInputs = [
    {
        id: 1,
        type: 'text',
        label: 'Name *',
        required : true,
    },
    {
        id: 3,
        type: 'text',
        label: 'UserName *',
        required : true,
        minLength: 3
    },
    {
        id: 4,
        type: 'email',
        label: 'Email *',
        required : true,
    },
    {
        id: 5,
        type: 'password',
        label: 'Password *',
        required : true,
        minLength: 8
    },
    {
        id: 8,
        type: 'password',
        label: 'confirm password *',
        required : true,
        minLength: 8
    },
]