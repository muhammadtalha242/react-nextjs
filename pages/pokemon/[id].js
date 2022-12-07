/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../../styles/Details.module.css'


const Details = () => {
    const { query: { id } } = useRouter()
    const [pokemon, setPokemon] = useState()
    useEffect(() => {
        const fetchPokemon = async () => {
            console.log("id: ", id);
            const res = await fetch(`https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`)
            setPokemon(await res.json());
        }
        if (id) fetchPokemon();
    }, [id])

    if (!pokemon) { return null }
    return <div>{JSON.stringify(pokemon)}</div>
}

export default Details;