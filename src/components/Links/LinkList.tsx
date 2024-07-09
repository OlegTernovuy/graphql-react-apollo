import { useQuery, gql } from '@apollo/client';

import { SingleLink } from '../../stories/SingleLink/SingleLink';
import { ListOfLinks } from '../../styled/StyledLinkList';

import { TLink } from '../../types';

const FEED_QUERY = gql`
    {
        feed {
            id
            links {
                id
                createdAt
                url
                description
            }
        }
    }
`;

const LinkList = () => {
    const { data, loading, error } = useQuery(FEED_QUERY);

    return (
        <ListOfLinks>
            {loading ? (
                <>Loading...</>
            ) : error ? (
                <>{error}</>
            ) : (
                data &&
                data.feed &&
                data.feed.links.map((link: TLink) => (
                    <SingleLink key={link.id} link={link} />
                ))
            )}
        </ListOfLinks>
    );
};

export default LinkList;
