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

export const CREATE_MODULE = gql`
  mutation CreateModule($input: CreateModuleInput!) {
    createModule(input: $input) {
      id
      title
      category
      color
    }
  }
`;
