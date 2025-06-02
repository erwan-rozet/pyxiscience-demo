'use client';

import { ApolloProvider } from '@apollo/client';
import { client } from '../lib/apollo';
import { Layout } from '@repo/ui';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <Layout>{children}</Layout>
    </ApolloProvider>
  );
}
