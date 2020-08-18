/* eslint-disable react/react-in-jsx-scope */

import HeroSection from '../sections/hero.section';
import MainNav from '../components/mainNav';
import GlobalStyles from '../styles/globalStyles';

const Home: React.FunctionComponent = () => (
    <>
        <GlobalStyles />
        <header>
            <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway&display=swap"
                rel="stylesheet"
            />
            <MainNav />
        </header>
        <main>
            <HeroSection />
        </main>
    </>
);
export default Home;
