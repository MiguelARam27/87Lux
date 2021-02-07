import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import Jumbo from '../components/Jumbo';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>87Lux</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='Home'>
        <Jumbo></Jumbo>
      </div>
    </Fragment>
  );
}
