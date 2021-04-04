import Head from 'next/head';
import React from 'react';
import styles from '../styles/Home.module.css';
import { Navbar } from 'react-bootstrap'

const PublicLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>LU~LU~</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <main>{children}</main>
    </div>
  );
};

export default PublicLayout;
