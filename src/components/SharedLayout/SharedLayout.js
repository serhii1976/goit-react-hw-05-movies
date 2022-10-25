import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Nav } from 'components/SharedLayout/SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <Nav>
          <NavLink to="/" end style={{ textDecoration: 'none' }}>
            Home
          </NavLink>
          <NavLink to="/movies" style={{ textDecoration: 'none' }}>
            Movies
          </NavLink>
        </Nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
