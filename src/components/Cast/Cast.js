import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'components/FetchAPI';
import { List } from 'components/Cast/Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCast() {
      try {
        const response = await getCast(movieId);
        setCast(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast();
  }, [movieId]);

  return (
    <List>
      {cast.map(({ id, profile_path, name, character }) => (
        <li key={id}>
          {profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={name}
            />
          )}
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </List>
  );
};

export default Cast;
