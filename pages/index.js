/* eslint-disable @next/next/no-page-custom-font */
import { getSession } from 'next-auth/react';
import { useAuth } from '../components/auth/useAuth';
import { Layout } from '../components/Layout';
import { Products } from '../components/Products';

export default function Home() {
  const { session } = useAuth();
  console.log(session);

  return (
    <Layout>
      <Products />
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: process.env.NEXTAUTH_CALLBACK_URL,
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};
