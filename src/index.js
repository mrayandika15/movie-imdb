import { ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  HttpLink,
} from '@apollo/client';

const client = new ApolloClient({
  link: new createHttpLink({
    uri: '/graphql',
  }),
  cache: new InMemoryCache(),
});

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <ApolloProvider client={client}>
    <ColorModeScript />
    <App />
  </ApolloProvider>
);
