import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

const mutation = gql`
mutation createUser($data: createUserInput!){
    createUser(data: $data){
      name,
      identificationCard,
      code,
  }
}
`;

const CheckInMutation: React.FC = ({ children }: any): JSX.Element => (
  <Mutation mutation={mutation}>
    {children}
  </Mutation>
);


export default CheckInMutation;
