import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetReviews } from '../FetchAPI';
import { Title } from 'components/Reviews/Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await GetReviews(movieId);
        setReviews(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie</p>;
  }

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <Title>
            <span>Author:</span>
            <span> {review.author}</span>
          </Title>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}
