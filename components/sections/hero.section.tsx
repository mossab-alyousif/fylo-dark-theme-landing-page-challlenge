/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

const StyeldHeroSection = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    text-align: center;
    width: 100%;
    min-height: 100vh;
    background: var(--intro-email-bg) url('images/svg/bg-curvy-desktop.svg') bottom no-repeat;
    background-size: 100% 270px;
`;

const HeroImg = styled.img`
    width: 739px;
    height: 533px;
    @media (max-width: 375px) {
        width: 305px;
        height: 225px;
    }
`;

const FirstTitleHeading = styled.h2`
    width: 742px;
    margin: 46px;
    @media (max-width: 375px) {
        width: 302px;
        margin: 23px;
    }
`;

const HeroParagraph = styled.p`
    width: 742px;
    font-size: 22px;
    padding: 0 30px;
    @media (max-width: 375px) {
        width: 292px;
        font-size: 12px;
        padding: 0 23px;
    }
`;

const GetStartedLink = styled.a`
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    width: 280px;
    padding: 20px 0;
    border-radius: 50px;
    margin: 30px 0;
    background: linear-gradient(to right, var(--cyan), var(--blue));
    border: none;
    @media (max-width: 375px) {
        width: 242px;
        padding: 18px 0;
    }
`;

const HeroSection = () => {
    //{require('images/illustration-intro.png')}
    return (
        <StyeldHeroSection>
            <HeroImg src="images/illustration-intro.png" alt="illustration-intro" />

            <FirstTitleHeading>
                All your files in one secure location, accessible anywhere.
            </FirstTitleHeading>
            <HeroParagraph>
                Fylo stores all your most important files in one secure location. Access them
                wherever you need, share and collaborate with friends family, and co-workers.
            </HeroParagraph>
            <GetStartedLink href="#">Get Started</GetStartedLink>
        </StyeldHeroSection>
    );
};
export default HeroSection;
