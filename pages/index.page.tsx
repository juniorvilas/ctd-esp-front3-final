import type { NextPage } from "next";
import Head from "next/head";
import BodySingle from "dh-marvel/components/layouts/body/single/body-single";
import { Comic, Craracter } from "shared/types/apiSchema";
import { getCharacters, getComics } from "dh-marvel/services/marvel/marvel.service";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, CardMedia, Container, Link, Typography } from "@mui/material";
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
    <Container sx={{ padding: '20px' }}>
      <Head>
        <title>Marvel - Home</title>
      </Head>

      <Typography
        gutterBottom
        align="center"
        noWrap
        variant="h3"
        component="div"
      >
        Seja bem vindo ao DH-Marvel!
      </Typography>


      <Box sx={{ flexGrow: 1, margin: '20px' }}>
        <Grid sx={{ justifyContent: 'center' }} container spacing={2}>
          {data.data.results.map((comic: Comic) => (
            <Grid key={comic.id} width={350} item >
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
    </Container>
  );
};


