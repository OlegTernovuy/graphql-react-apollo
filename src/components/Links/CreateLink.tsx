import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { CreateListForm } from '../../styled/StyledCreateList';
import { AUTH_TOKEN } from '../../constants';
import { Button } from '../../stories/Button/Button';
import { Input } from '../../stories/Input/Input';

type FormValues = {
    graphDesc: string;
    graphLink: string;
};

const CREATE_LINK_MUTATION = gql`
    mutation PostMutation($description: String!, $url: String!) {
        post(description: $description, url: $url) {
            id
            createdAt
            url
            description
        }
    }
`;

const validationSchema = yup.object({
    graphDesc: yup
        .string()
        .min(5, 'Description must contain at least 5 char')
        .max(50, 'Description should not contain more than 25 char')
        .required('Description is required'),
    graphLink: yup
        .string()
        .min(5, 'Link must contain at least 5 char')
        .max(100, 'Link should not contain more than 25 char')
        .required('Link is required'),
});

const CreateLink = () => {
    const navigate = useNavigate();

    const authToken = localStorage.getItem(AUTH_TOKEN);

    const formik = useFormik({
        initialValues: {
            graphDesc: '',
            graphLink: '',
        } as FormValues,
        validationSchema: validationSchema,
        onSubmit: (values: FormValues, { resetForm }) => {
            if (!!authToken) {
                resetForm();
                createLink({
                    variables: {
                        description: values.graphDesc,
                        url: values.graphLink,
                    },
                });
                navigate('/');
            } else {
                alert('Please login or register');
            }
        },
    });

    const [createLink] = useMutation(CREATE_LINK_MUTATION);

    return (
        <CreateListForm onSubmit={formik.handleSubmit}>
            <Input
                name="graphDesc"
                value={formik.values.graphDesc}
                onChange={formik.handleChange}
            />
            <Input
                name="graphLink"
                value={formik.values.graphLink}
                onChange={formik.handleChange}
            />
            <span>
                {formik.touched.graphDesc || formik.touched.graphLink
                    ? formik.errors.graphDesc || formik.errors.graphLink
                    : null}
            </span>
            <Button bType="submit" label="Submit" size="small" />
        </CreateListForm>
    );
};

export default CreateLink;
