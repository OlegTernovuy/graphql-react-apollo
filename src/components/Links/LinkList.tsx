import { useQuery, gql } from '@apollo/client';

import { SingleLink } from '../index';

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
        <div>
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
        </div>
    );
};

export default LinkList;
