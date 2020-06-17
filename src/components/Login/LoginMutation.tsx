
import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

const mutation = gql`
  mutation login($data: inputLogin!){
  login(data: $data){
      token
  }
}`;

const LoginMutation: React.FC = ({ children }: any): JSX.Element => (
  <Mutation mutation={mutation}>
    {children}
  </Mutation>
);


export default LoginMutation;
