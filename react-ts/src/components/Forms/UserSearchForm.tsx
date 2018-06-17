import { InjectedFormikProps, withFormik } from 'formik';
import * as React from 'react';
import * as Yup from 'yup';

interface FormValues {
    login: string;
    firstName: string;
}

interface FormProps {
    login?: string;
    firstName?: string;
}

const InnerForm: React.SFC<InjectedFormikProps<FormProps, FormValues>> = props => (
    <form onSubmit={props.handleSubmit}>
        {/* login */}
        <input
            id="login"
            placeholder="User name..."
            type="text"
            onChange={props.handleChange}
            value={props.values.login}
        />
        {props.touched.login && props.errors.login && <div>{props.errors.login}</div>}

        {/* firstName */}
        <input
            id="firstName"
            placeholder="First name..."
            type="text"
            onChange={props.handleChange}
            value={props.values.firstName}
        />
        {props.touched.firstName && props.errors.firstName && <div>{props.errors.firstName}</div>}

        {/* submit */}
        <div>
            <button type="submit" disabled={props.isSubmitting}>
                Submit
            </button>
        </div>
    </form>
);

const UserSearchForm = withFormik<FormProps, FormValues>({
    mapPropsToValues: () => ({ login: 'smithpb', firstName: '' }),
    validationSchema: Yup.object().shape({
        login: Yup.string()
            .max(8, 'Please input 16 characters or less')
            .required('Please input login name'),

        firstName: Yup.string()
            .max(16, 'Please input 16 characters or less')
            .required('Please input first name')
    }),
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            // tslint:disable-next-line:align
        }, 500);
    }
})(InnerForm);

export default UserSearchForm;
