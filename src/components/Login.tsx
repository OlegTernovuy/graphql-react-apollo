import { gql, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { AUTH_TOKEN } from '../constants';
import { LoginButtons, LoginInputs } from '../styled/StyledLogin';

const SIGNUP_MUTATION = gql`
    mutation SignupMutation(
        $email: String!
        $password: String!
        $name: String!
    ) {
        signup(email: $email, password: $password, name: $name) {
            token
        }
    }
`;

const LOGIN_MUTATION = gql`
    mutation LoginMutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
        }
    }
`;

const Login = () => {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        login: true,
        email: '',
        password: '',
        name: '',
    });

    const [login] = useMutation(LOGIN_MUTATION, {
        variables: {
            email: formState.email,
            password: formState.password,
        },
        onCompleted: ({ login }) => {
            localStorage.setItem(AUTH_TOKEN, login.token);
            navigate('/');
        },
    });

    const [signup] = useMutation(SIGNUP_MUTATION, {
        variables: {
            name: formState.name,
            email: formState.email,
            password: formState.password,
        },
        onCompleted: ({ signup }) => {
            localStorage.setItem(AUTH_TOKEN, signup.token);
            navigate('/');
        },
    });

    return (
        <div>
            <h4>{formState.login ? 'Login' : 'Sign Up'}</h4>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    formState.login ? login() : signup();
                }}
            >
                <LoginInputs>
                    {!formState.login && (
                        <input
                            value={formState.name}
                            onChange={(e) =>
                                setFormState({
                                    ...formState,
                                    name: e.target.value,
                                })
                            }
                            type="text"
                            placeholder="Your name"
                            required
                        />
                    )}
                    <input
                        value={formState.email}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                email: e.target.value,
                            })
                        }
                        type="text"
                        placeholder="Your email address"
                        required
                    />
                    <input
                        value={formState.password}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                password: e.target.value,
                            })
                        }
                        type="password"
                        placeholder="Choose a safe password"
                        required
                    />
                </LoginInputs>
                <LoginButtons>
                    <button type="submit">
                        {formState.login ? 'login' : 'create account'}
                    </button>
                    <button
                        onClick={(e) =>
                            setFormState({
                                ...formState,
                                login: !formState.login,
                            })
                        }
                    >
                        {formState.login
                            ? 'need to create an account?'
                            : 'already have an account?'}
                    </button>
                </LoginButtons>
            </form>
        </div>
    );
};

export default Login;
