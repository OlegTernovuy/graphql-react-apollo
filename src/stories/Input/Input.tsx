import { InputStyled } from './Input.style';

interface InputProps {
    name?: string;
    value: string;
    type?: string;
    placeholder?: string;
    border?: boolean;
    onChange: (e?: any) => void;
}

export const Input = ({
    name,
    value,
    type,
    placeholder,
    border = false,
    ...props
}: InputProps) => {
    return (
        <InputStyled
            name={name}
            value={value}
            type={type}
            placeholder={placeholder}
            border={border}
            {...props}
            required
        />
    );
};
