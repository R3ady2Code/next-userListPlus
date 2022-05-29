import Head from 'next/head';
import A from '../components/A';

const MainContainer = ({ children }) => {
  return (
    <>
      <Head>
        <title>Raect+Next App</title>
      </Head>
      <header className="header">
        <A href={'/users'} text="Users" />
        <A href={'/posts'} text="Posts" />
        <A href={'/faq'} text="FAQ" />
      </header>
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
