/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

const StyeldFooter = styled.section`
    background: var(--footer-bg);
    padding: 200px 80px 80px 100px;
    display: grid;
    grid-template-columns: 4fr 3fr 1fr 1fr 2fr;
    grid-template-rows: auto;
    column-gap: 70px;
    grid-template-areas:
        'logo . . . .'
        'location  contact links more-links social-icons';
    @media (max-width: 375px) {
        grid-template-columns: 1fr;
        padding: 280px 27px 42px 27px;
        column-gap: 0;
        row-gap: 20px;
        grid-template-areas:
            'logo'
            'location'
            'contact'
            'links'
            'more-links'
            'social-icons';
    }
`;

const Paragraph = styled.p``;
const Link = styled.a``;

const LogoContainer = styled.div`
    grid-area: logo;
    margin-bottom: 35px;
`;

const LocationContainer = styled.div`
    grid-area: location;
    display: grid;
    grid-template-columns: 5% 95%;

    > span {
        padding-left: 35px;
    }
`;

const ContactContainer = styled.div`
    grid-area: contact;
    & ${Paragraph} {
        margin-bottom: 26px;
    }
    & img {
        margin-right: 24px;
    }
`;

const LinksContainer = styled.div`
    grid-area: links;
    display: grid;
    grid-template-columns: 1fr;
    > ${Link} {
        margin-bottom: 24px;
    }
`;

const MoreLinksContainer = styled.div`
    grid-area: more-links;
    display: grid;
    grid-template-columns: 1fr;
    > ${Link} {
        margin-bottom: 24px;
    }
`;

const SocialIconsContainer = styled.div`
    grid-area: social-icons;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    > i {
        font-size: 30px;
        @media (max-width: 375px) {
            font-size: 28px;
        }
    }
    @media (max-width: 375px) {
        > .fa-facebook {
            justify-self: end;
        }
        > .fa-facebook {
            justify-self: center;
        }
        > .fa-facebook {
            justify-self: start;
        }
    }
`;

const Footer = () => {
    //{require('images/illustration-intro.png')}
    return (
        <StyeldFooter>
            <LogoContainer>
                <img src="images/svg/logo.svg" alt="logo.svg" />
            </LogoContainer>
            <LocationContainer>
                <img src="images/svg/icon-location.svg" alt="icon-location.svg" />
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua
                </span>
            </LocationContainer>
            <ContactContainer>
                <Paragraph>
                    <img src="images/svg/icon-phone.svg" alt="icon-phone.svg" />
                    <span>+1-543-123-4567</span>
                </Paragraph>
                <Paragraph>
                    <img src="images/svg/icon-email.svg" alt="icon-email.svg" />
                    <span>example@fylo.com</span>
                </Paragraph>
            </ContactContainer>
            <LinksContainer>
                <Link href="#">About Us</Link>
                <Link href="#">Jops</Link>
                <Link href="#">Press</Link>
                <Link href="#">Blog</Link>
            </LinksContainer>
            <MoreLinksContainer>
                <Link href="#">Contact Us</Link>
                <Link href="#">Terms</Link>
                <Link href="#">Privacy</Link>
            </MoreLinksContainer>
            <SocialIconsContainer>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
            </SocialIconsContainer>
        </StyeldFooter>
    );
};
export default Footer;
