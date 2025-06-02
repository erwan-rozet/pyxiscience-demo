import { gql } from '@apollo/client';

export const GET_MODULES = gql`
  query {
    modules {
      id
      title
      category
      color
    }
  }
`;
