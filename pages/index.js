/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

export async function getServerSideProps() {
  const res = await fetch("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json")
  return {
    props: {
      pokemon: await res.json()
    }
  }
}

export default function Home({ pokemon }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon</title>
      </Head>
      <h2>Pokemon List</h2>
      <div className={styles.grid}>
        {pokemon.map((poke) => (
          <div className={styles.card} key={poke.id}>
            <Link href={`/pokemon/${poke.id}`}>
              <img
                src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${poke.image}`}
                alt={poke.name}
              />
              <h3>{poke.name}</h3>
            </Link>
          </div>)
        )}
      </div>
    </div >
  )
}
