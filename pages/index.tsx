/* eslint-disable react/react-in-jsx-scope */

import HeroSection from '../components/sections/hero.section';
import MainNav from '../components/mainNav';
import GlobalStyles from '../styles/globalStyles';
import FeaturesSection from '../components/sections/features.section';
import ExtraDescriptionSection from '../components/sections/extraDescription.section';
import TestimonialsSection from '../components/sections/testimonials.section';
import SignupSection from '../components/sections/signup.section';
import Footer from '../components/footer';

const Home: React.FunctionComponent = () => (
    <>
        <GlobalStyles />
        <header>
            <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway&display=swap"
                rel="stylesheet"
            />
            <script
                src="https://kit.fontawesome.com/0903ce644e.js"
                crossOrigin="anonymous"
            ></script>
            <MainNav />
        </header>
        <main>
            <HeroSection />
            <FeaturesSection />
            <ExtraDescriptionSection />
            <TestimonialsSection />
            <SignupSection />
        </main>
        <Footer />
    </>
);
export default Home;
