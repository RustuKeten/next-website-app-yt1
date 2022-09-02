import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  height: 80px;
  background-color: #000;
  color: #fff;
  display: f;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
  cursor: pointer; //* passHref use for same role
`;
const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link href="/">
          <StyledLink>NXT</StyledLink>
        </Link>
      </div>
      <div>
        <Link href="/">
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href="/about">
          <StyledLink>About</StyledLink>
        </Link>
        <Link href="/contact">
          <StyledLink>Contact</StyledLink>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
