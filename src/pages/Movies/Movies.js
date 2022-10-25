import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { GetSearchMovies } from 'components/FetchAPI';
import { Section, Form, Li } from 'pages/Movies/Movies.styled';

const Movies = () => {
  const location = useLocation();
  const [moviesList, setMoviesList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [valueQuery, setValueQuery] = useState(query);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!e.target.elements.query.value) {
      alert('please enter the name of the movie');
    } else {
      updateQueryString(e.target.elements.query.value);
    }
  }
  useEffect(() => {
    async function fetchSearchMovies() {
      try {
        if (!query) {
          return;
        }
        const response = await GetSearchMovies(query);
        setMoviesList(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchSearchMovies();
  }, [query]);

  return (
    <main>
      <Section>
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            name="query"
            value={valueQuery}
            onChange={e => setValueQuery(e.target.value)}
            placeholder="Search a movie"
          ></input>
          <button type="submit">Search</button>
        </Form>
        <ul>
          {moviesList.map(movie => (
            <Li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </Li>
          ))}
        </ul>
      </Section>
    </main>
  );
};

export default Movies;
