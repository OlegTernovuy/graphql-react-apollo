import { ButtonWrapper } from './Button.style';

interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    bType?: 'button' | 'reset' | 'submit' | undefined;
    onClick?: () => void;
}

export const Button = ({
    primary = false,
    size = 'medium',
    backgroundColor,
    bType,
    label,
    ...props
}: ButtonProps) => {
    return (
        <ButtonWrapper
            type={bType || 'button'}
            primary={primary}
            backgroundColor={backgroundColor}
            size={size}
            {...props}
        >
            {label}
        </ButtonWrapper>
    );
};
