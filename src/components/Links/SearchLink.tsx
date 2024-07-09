import { useLazyQuery, gql } from '@apollo/client';
import { useState } from 'react';

import { SingleLink } from '../../stories/SingleLink/SingleLink';
import { ListOfLinks } from '../../styled/StyledLinkList';
import { Button } from '../../stories/Button/Button';

import { TLink } from '../../types';
import { Input } from '../../stories/Input/Input';

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
                <Input
                    type={'text'}
                    value={searchLink}
                    border
                    onChange={(e) => setSearchLink(e.target.value)}
                />
                <Button bType="submit" label="Search" size="small" />
            </form>
            {data &&
                data.feed.links.map((link: TLink) => (
                    <SingleLink key={link.id} link={link} bgColor='#1ea7fd' />
                ))}
        </ListOfLinks>
    );
};

export default SearchLink;
