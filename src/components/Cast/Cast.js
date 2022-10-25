import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetCast } from 'components/FetchAPI';
import { List } from 'components/Cast/Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCast() {
      try {
        const response = await GetCast(movieId);
        setCast(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast();
  }, [movieId]);

  return (
    <List>
      {cast.map(actor => (
        <li key={actor.id}>
          {actor.profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
          )}
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </List>
  );
};

export default Cast;
