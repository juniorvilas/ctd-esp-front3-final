import type { NextPage } from "next";
import Head from "next/head";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { Comic, Craracter } from "shared/types/apiSchema";
import { getCharacters, getComics } from "dh-marvel/services/marvel/marvel.service";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, CardMedia, Link, Typography } from "@mui/material";
import { useState } from "react";


export async function getStaticProps() {
  /* const data = await getCharacters() */
  const data = await getComics(12, 12)

  return {
    props: {
      data
    }
  }
}

type PropsHome = {
  data: {
    data: {
      results: Comic[]
    }
  }
}

export default function Home(props: PropsHome) {


  const { data } = props;

  console.log(data.data.results)




  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  return (
    <>
      <Head>
        <title>Marvel</title>
      </Head>




      <Box sx={{ flexGrow: 1, margin: '20px' }}>
        <Grid container spacing={2}>
          {data.data.results.map((comic: Comic) => (
            <Grid key={comic.id} item xs={6} md={4} >
              <Typography
                gutterBottom
                noWrap
                variant="h5"
                component="div"
              >
                {comic.title}
              </Typography>
              <CardMedia
                component="img"
                height="194"
                image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.title}
              />
              <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 10 }}>
                <Link href={`/checkout/${comic.id}`}>
                  <Button variant="contained">Comprar</Button>
                </Link>
                <Link href={`/comic/${comic.id}`}>
                  <Button variant="outlined">
                    Detalhes
                  </Button>
                </Link>

              </div>

            </Grid>
          ))}


        </Grid>
      </Box>
    </>
  );
};


