import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import Jumbo from '../components/Jumbo';
import Platforms from '../components/Platforms';
import LatestProjects from '../components/LatestProjects';
import Team from '../components/Team';
import Footer from '../components/Footer';
import Solution from '../components/Solution';
import Caro from '../components/Caro';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>87Lux</title>
      </Head>
      <Jumbo />
      <Platforms />

      <LatestProjects />

      <Team />
      <Solution />
      <Footer />
    </Fragment>
  );
}
// latest projects need fix mobile tab
