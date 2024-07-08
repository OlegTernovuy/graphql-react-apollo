import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router';
import { useFormik } from 'formik';
import * as yup from 'yup';

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
        .max(25, 'Description should not contain more than 25 char')
        .required('Description is required'),
    graphLink: yup
        .string()
        .min(5, 'Link must contain at least 5 char')
        .max(25, 'Link should not contain more than 25 char')
        .required('Link is required'),
});

const CreateLink = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            graphDesc: '',
            graphLink: '',
        } as FormValues,
        validationSchema: validationSchema,
        onSubmit: (values: FormValues, { resetForm }) => {
            resetForm();
            createLink({
                variables: {
                    description: values.graphDesc,
                    url: values.graphLink,
                },
            });
            navigate('/');
        },
    });

    const [createLink] = useMutation(CREATE_LINK_MUTATION);

    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                name="graphDesc"
                value={formik.values.graphDesc}
                onChange={formik.handleChange}
            />
            <input
                name="graphLink"
                value={formik.values.graphLink}
                onChange={formik.handleChange}
            />
            <span>
                {formik.touched.graphDesc || formik.touched.graphLink
                    ? formik.errors.graphDesc || formik.errors.graphLink
                    : null}
            </span>
            <button type="submit">Submit</button>
        </form>
    );
};

export default CreateLink;
