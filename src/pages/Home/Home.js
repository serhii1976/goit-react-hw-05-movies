import { GetTrendingMovies } from 'components/FetchAPI';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Title, Section, Li } from 'pages/Home/Home.styled';

export const Home = () => {
  const [trendingList, setTrendingList] = useState([]);

  useEffect(() => {
    async function fethcTrendingFilms() {
      try {
        const response = await GetTrendingMovies();
        setTrendingList(response);
      } catch (error) {
        console.log(error);
      }
    }
    fethcTrendingFilms();
  }, []);

  return (
    <main>
      <Section>
        <Title>Trending today</Title>
        <ul>
          {trendingList.map(film => (
            <Li key={film.id}>
              <Link to={`movies/${film.id}`}>{film.title}</Link>
            </Li>
          ))}
        </ul>
      </Section>
    </main>
  );
};
