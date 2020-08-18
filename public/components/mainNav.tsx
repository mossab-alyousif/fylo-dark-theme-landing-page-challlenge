/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
//import Logo from 'images/svg/Logo.svg';

type Props = {
    children: string;
    primary: boolean;
};
type ButtonProps = {
    primary: boolean;
};
const StyledNav = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 73px 80px;
    background: var(--intro-email-bg);
`;

const LogoLink = styled.a``;

const NavLink = styled.li``;

const NavItems = styled.ul`
    display: flex;
    align-items: center;

    & ${NavLink}:not(:last-child) {
        padding-right: 56px;
    }
`;

const MainNav = () => {
    //{require('images/svg/Logo.svg')}
    return (
        <StyledNav>
            <LogoLink href="/">
                <img src="images/svg/Logo.svg" alt="svg" />
            </LogoLink>
            <NavItems>
                <NavLink>
                    <a href="/">Features</a>
                </NavLink>
                <NavLink>
                    <a href="/">Team</a>
                </NavLink>
                <NavLink>
                    <a href="/">SignIn</a>
                </NavLink>
            </NavItems>
        </StyledNav>
    );
};
export default MainNav;
