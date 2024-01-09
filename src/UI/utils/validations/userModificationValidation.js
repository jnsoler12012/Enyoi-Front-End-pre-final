import * as yup from 'yup';

export default () => (
    yup
        .object()
        .shape({
            roleId: yup.number().test({
                message: () => 'must be in names array!',
                test(value) {
                    return [1, 2].includes(value);
                },
            }).required('RoleId if Required'),
            name: yup.string().required('Name required').max(20),
            password: yup.number().required('Document required').max(10),
            email: yup.string().required('Email required').email('Must be a email string'),
            password: yup.string().required('Password required'),
            state: yup.boolean().required('State required'),
        })
        .required()
)