/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';
//import Logo from 'images/svg/logo.svg';

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
    @media (max-width: 375px) {
        padding: 24px 20px;
    }
`;

const LogoLink = styled.a`
    > img {
        @media (max-width: 375px) {
            width: 82px;
            height: 24px;
        }
    }
`;

const NavLink = styled.li``;

const NavItems = styled.ul`
    display: flex;
    align-items: center;

    & ${NavLink}:not(:last-child) {
        padding-right: 56px;
        @media (max-width: 375px) {
            padding-right: 23px;
        }
    }
`;

const MainNav = () => {
    //{require('images/svg/logo.svg')}
    return (
        <StyledNav>
            <LogoLink href="/">
                <img src="images/svg/logo.svg" alt="svg" />
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
