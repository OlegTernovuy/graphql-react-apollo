import { LinkWrapper } from './SingleLink.style';

import { TLink } from '../../types';

interface linkProps {
    link: TLink;
    bgColor?: string;
}

export const SingleLink = ({ link, bgColor }: linkProps) => (
    <LinkWrapper bgColor={bgColor}>
        {link.description} ({link.url})
    </LinkWrapper>
);
