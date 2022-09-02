import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import styles from "../styles/Home.module.css";

const Heading = styled.h1`
  color: #000;
  font-size: 10rem;
  font-weight: 900;
`;
const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Heading>About</Heading>
      </Hero>
    </div>
  );
}
