import { Link } from 'react-router-dom';
import { Text } from 'components/NotFound/NotFound.styled';

export default function NotFound() {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Text>Not found</Text>
    </Link>
  );
}
