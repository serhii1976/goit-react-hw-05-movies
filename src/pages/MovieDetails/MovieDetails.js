import { useState, useEffect } from 'react';
import {
  NavLink,
  Link,
  Outlet,
  useParams,
  useLocation,
} from 'react-router-dom';
import { getMovieDitails } from 'components/FetchAPI';
import { Suspense } from 'react';
import {
  Button,
  Main,
  Section,
  Image,
  Title,
  Text,
  List,
  Div,
  Item,
} from 'pages/MovieDetails/MovieDetails.styled';
import { TiArrowLeftOutline } from 'react-icons/ti';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await getMovieDitails(movieId);
        setGenres(response.data.genres);
        setMovie(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return <p>Movie not found.</p>;

  const backLinkHref = location.state?.from ?? '/';
  return (
    <Main>
      <Link to={backLinkHref}>
        <Button type="button">
          <TiArrowLeftOutline /> Go back
        </Button>
      </Link>
      <Section>
        <Image
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt="movie.title"
        />
        <div>
          <Title>
            {movie.title} ({new Date(movie.release_date).getFullYear()})
          </Title>
          <Text>User Score: {Math.round(movie.vote_average * 10)}%</Text>
          <h3>Overview</h3>
          <Text>{movie.overview}</Text>
          <h3>Genres</h3>
          <List>
            {genres.map(genre => {
              if (!genre) {
                return <li>there is no information about genres</li>;
              } else {
                return <li key={genre.id}>{genre.name}</li>;
              }
            })}
          </List>
        </div>
      </Section>
      <Div>
        <h3>Additional information</h3>
        <ul>
          <Item>
            <NavLink to="cast" state={{ from: backLinkHref }}>
              Cast
            </NavLink>
          </Item>
          <Item>
            <NavLink to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </NavLink>
          </Item>
        </ul>
      </Div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Main>
  );
};

export default MovieDetails;
