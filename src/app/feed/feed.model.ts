import {Document} from 'graphql';

import gql from 'graphql-tag';

import {fragments} from './feed-entry.model';

export const feedQuery: Document = gql`
  query Feed($type: FeedType!, $offset: Int, $limit: Int) {
    currentUser {
      login
    }
    feed(type: $type, offset: $offset, limit: $limit) {
      ...FeedEntry
    }
  }

  ${fragments['entry']}
`;

export const voteMutation: Document = gql`
  mutation vote($repoFullName: String!, $type: VoteType!) {
    vote(repoFullName: $repoFullName, type: $type) {
      score
      id
      vote {
        vote_value
      }
    }
  }
`;
