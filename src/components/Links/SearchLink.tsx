import { useLazyQuery, gql } from '@apollo/client';
import { useState } from 'react';

import { SingleLink } from '../index';

import { TLink } from '../../types';
import { ListOfLinks } from '../../styled/StyledLinkList';

const FEED_SEARCH_QUERY = gql`
    query FeedSearchQuery($filter: String!) {
        feed(filter: $filter) {
            id
            links {
                id
                url
                description
                createdAt
                postedBy {
                    id
                    name
                }
                votes {
                    id
                    user {
                        id
                    }
                }
            }
        }
    }
`;

const SearchLink = () => {
    const [searchLink, setSearchLink] = useState('');
    const [executeSearch, { data }] = useLazyQuery(FEED_SEARCH_QUERY);
    return (
        <ListOfLinks>
            <span>Here you can find some list</span>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    executeSearch({
                        variables: { filter: searchLink },
                    });
                    setSearchLink('');
                }}
            >
                <input
                    type="text"
                    value={searchLink}
                    onChange={(e) => setSearchLink(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {data &&
                data.feed.links.map((link: TLink) => (
                    <SingleLink key={link.id} link={link} />
                ))}
        </ListOfLinks>
    );
};

export default SearchLink;
