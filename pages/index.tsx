/* eslint-disable react/react-in-jsx-scope */

import HeroSection from '../public/sections/hero.section';
import MainNav from '../public/components/mainNav';
import GlobalStyles from '../styles/globalStyles';
import FeaturesSection from '../public/sections/features.section';
import ExtraDescriptionSection from '../public/sections/extraDescription.section';

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
            <FeaturesSection />
            <ExtraDescriptionSection />
        </main>
    </>
);
export default Home;
