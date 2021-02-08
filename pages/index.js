import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import Jumbo from '../components/Jumbo';
import Platforms from '../components/Platforms';
import LatestProjects from '../components/LatestProjects';
import Team from '../components/Team';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>87Lux</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Jumbo />
      <Platforms />

      {/* <LatestProjects />
      <Team /> */}
      <Footer />
    </Fragment>
  );
}
