import { Button, CardMedia, Container, Typography } from "@mui/material";
import { getCharacter } from "dh-marvel/services/marvel/marvel.service"
import { Comic, Craracter } from "shared/types/apiSchema"


export const getStaticPaths = async () => {
    return {
        paths: [{ params: { id: "1009156" } }],
        fallback: true
    };
}
export async function getStaticProps({ params }: any) {

    const data = await getCharacter(Number(params.id))

    return {
        props: {
            data
        }
    }
}

type PropsDetails = {
    data: Craracter

}



export default function CharacterDetail(props: PropsDetails) {
    const data = props
    const character = data.data;



    console.log(character)
    return (
        <Container>
            <Typography
                gutterBottom
                noWrap
                variant="h3"
                component="div"
            >
                {character.name}
            </Typography>
            <CardMedia
                component="img"
                height="350"
                image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
            />
            <Typography
                gutterBottom
                noWrap
                variant="subtitle1"
                component="div"
            >
                {character.description}
            </Typography>




        </Container>
    )
}