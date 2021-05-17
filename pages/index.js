import { getSession } from 'next-auth/client';
import Head from 'next/head';
import Header from '../components/Header.js';
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';



export default function Home({session}) {
  if (!session) return <Login />;
  return (
    <div className = "h-screen bg-gray-100 overflow-hidden" >
      <Head>
        <title>Facebook</title>
      </Head>

      {/* Header */}
      <Header />
        <main className = "flex"> 
      {/* Sidebar */}
      <Sidebar/>
      {/* <Widget /> */}
      <Feed />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  // Get the user 
  const session = await getSession(context);

  return {
    props : {
      session
    }
  }
}
