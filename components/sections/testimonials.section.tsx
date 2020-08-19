/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

const StyeldTestimonialsSection = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    padding: 140px;
    @media (max-width: 375px) {
        grid-template-columns: 1fr;
        gap: 24px;
        padding: 150px 22px;
    }
`;

const Testimonial = styled.div`
    background: var(--testimonials-bg);
    padding: 45px 40px;
    border-radius: 5px;
    position: relative;

    &:first-child::before {
        content: url('images/bg-quotes.png');
        position: absolute;
        top: -35px;
        left: -15px;
        z-index: -1;
        @media (max-width: 375px) {
            left: 4px;
        }
    }
`;

const Paragraph = styled.p`
    margin-bottom: 25px;
`;
const Profile = styled.div`
    display: flex;
`;

const ProfileDescription = styled.div``;

const ProfileImg = styled.img`
    width: 27px;
    height: 27px;
    border-radius: 50%;
    margin-right: 5px;
`;

const ProfileHeading = styled.h3`
    font-size: 14px;
`;
const ProfileParagraph = styled.p`
    font-size: 8px;
`;

const TestimonialsSection = () => {
    //{require('images/illustration-intro.png')}
    return (
        <StyeldTestimonialsSection>
            <Testimonial>
                <Paragraph>
                    Fylo has improved our team productivity by an order of magnitude. Since making
                    the switch our team has become a well-oiled collaboration machine.
                </Paragraph>
                <Profile>
                    <ProfileImg src="images/profile-1.jpg" alt="profile img" />
                    <ProfileDescription>
                        <ProfileHeading>Satish Patel</ProfileHeading>
                        <ProfileParagraph>Founder & CEO, Huddle</ProfileParagraph>
                    </ProfileDescription>
                </Profile>
            </Testimonial>
            <Testimonial>
                <Paragraph>
                    Fylo has improved our team productivity by an order of magnitude. Since making
                    the switch our team has become a well-oiled collaboration machine.
                </Paragraph>
                <Profile>
                    <ProfileImg src="images/profile-2.jpg" alt="profile img" />
                    <ProfileDescription>
                        <ProfileHeading>Bruce McKenzie</ProfileHeading>
                        <ProfileParagraph>Founder & CEO, Huddle</ProfileParagraph>
                    </ProfileDescription>
                </Profile>
            </Testimonial>
            <Testimonial>
                <Paragraph>
                    Fylo has improved our team productivity by an order of magnitude. Since making
                    the switch our team has become a well-oiled collaboration machine.
                </Paragraph>
                <Profile>
                    <ProfileImg src="images/profile-3.jpg" alt="profile img" />
                    <ProfileDescription>
                        <ProfileHeading>Iva Boyd</ProfileHeading>
                        <ProfileParagraph>Founder & CEO, Huddle</ProfileParagraph>
                    </ProfileDescription>
                </Profile>
            </Testimonial>
        </StyeldTestimonialsSection>
    );
};
export default TestimonialsSection;
