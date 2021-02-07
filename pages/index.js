import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>87Lux</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='row'>
        <div className='col-md-2'>
          <h1>hello</h1>
        </div>
      </div>
    </Fragment>
  );
}
