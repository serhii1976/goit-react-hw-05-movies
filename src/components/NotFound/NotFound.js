import { Link, Navigate } from 'react-router-dom';
import { Text } from 'components/NotFound/NotFound.styled';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (!visible) setVisible(true);
    }, 1000);
  }, [visible]);

  return (
    <>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Text>Not found</Text>
      </Link>
      {visible && <Navigate to="/" />}
    </>
  );
}
