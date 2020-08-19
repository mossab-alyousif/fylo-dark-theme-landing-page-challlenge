/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

const StyeldSignupSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--intro-email-bg);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    padding: 50px 74px 40px 74px;
    border-radius: 5px;
    bottom: -155px;
`;

const Heading = styled.h2`
    margin-bottom: 30px;
`;

const Paragraph = styled.p`
    margin-bottom: 36px;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    align-content: center;
`;

const EmailInput = styled.input.attrs({ type: 'email' })`
    width: 482px;
    height: 50px;
    padding: 20px 47px;
    outline: none;
    border: none;
    border-radius: 50px;
    margin-right: 20px;
    &::placeholder {
        opacity: 0.4;
    }
`;

const GetStartedSubmit = styled.input.attrs({ type: 'submit' })`
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    width: 280px;
    padding: 20px 0;
    border-radius: 50px;
    background: linear-gradient(to right, var(--cyan), var(--blue));
    border: none;
    margin: 0;
`;

const SignupSection = () => {
    //{require('images/illustration-intro.png')}
    return (
        <StyeldSignupSection>
            <Heading>Get early access today</Heading>
            <Paragraph>
                It only takes a minute to sign up and our free starter tier is extremely generous.
                If you have any questions, our support team would be happy to help you.
            </Paragraph>
            <Form>
                <EmailInput placeholder="email@example.com" />
                <GetStartedSubmit value="Get Started For Free" />
            </Form>
        </StyeldSignupSection>
    );
};
export default SignupSection;
