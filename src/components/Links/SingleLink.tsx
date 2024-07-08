import { propsLink } from '../../types';

const SingleLink = ({ link }: propsLink) => (
    <div>
        {link.description} ({link.url})
    </div>
);

export default SingleLink;
