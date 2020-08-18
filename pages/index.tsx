/* eslint-disable react/react-in-jsx-scope */

import HeroSection from '../sections/hero.section';
import MainNav from '../components/mainNav';
import GlobalStyles from '../styles/globalStyles';
import FeaturesSection from '../sections/features.section';
import ExtraDescriptionSection from '../sections/extraDescription.section';
import TestimonialsSection from '../sections/testimonials.section';

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
            <TestimonialsSection />
        </main>
    </>
);
export default Home;
