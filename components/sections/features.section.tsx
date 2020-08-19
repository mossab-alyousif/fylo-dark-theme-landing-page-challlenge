/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

const StyeldFeaturesSection = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 94px 150px;
    margin: 130px 0;
    padding: 0 280px;
    @media (max-width: 375px) {
        grid-template-columns: 1fr;
        gap: 87px 0px;
        padding: 0 38px;
        margin: 100px 0;
    }
`;

const FeatureImg = styled.img``;

const FeatureTitleHeading = styled.h3`
    margin: 25px 0 12px 0;
`;

const FeatureParagraph = styled.p``;

const FeatureContainer = styled.div`
    text-align: center;
`;

const FeaturesSection = () => {
    //{require('images/illustration-intro.png')}
    return (
        <StyeldFeaturesSection>
            <FeatureContainer>
                <FeatureImg src="images/svg/icon-access-anywhere.svg" alt="icon-access-anywhere" />
                <FeatureTitleHeading>Access your files, anywhere</FeatureTitleHeading>
                <FeatureParagraph>
                    The ability to use a smartphone, tablet, or computer to access your account
                    means your files follow you everywhere.
                </FeatureParagraph>
            </FeatureContainer>
            <FeatureContainer>
                <FeatureImg src="images/svg/icon-security.svg" alt="icon-security.svg" />
                <FeatureTitleHeading>Security you can trust</FeatureTitleHeading>
                <FeatureParagraph>
                    2-factor authentication and user-controlled encryption are just a couple of the
                    security features we allow to help secure your files.
                </FeatureParagraph>
            </FeatureContainer>
            <FeatureContainer>
                <FeatureImg src="images/svg/icon-collaboration.svg" alt="icon-collaboration.svg" />
                <FeatureTitleHeading>Real-time collaboration</FeatureTitleHeading>
                <FeatureParagraph>
                    Securely share files and folders with friends, family and colleagues for live
                    collaboration. No email attachments required.
                </FeatureParagraph>
            </FeatureContainer>
            <FeatureContainer>
                <FeatureImg src="images/svg/icon-any-file.svg" alt="icon-any-file.svg" />
                <FeatureTitleHeading>Store any type of file</FeatureTitleHeading>
                <FeatureParagraph>
                    Whether you&aposre sharing holidays photos or work documents, Fylo has you
                    covered allowing for all file types to be securely stored and shared.
                </FeatureParagraph>
            </FeatureContainer>
        </StyeldFeaturesSection>
    );
};
export default FeaturesSection;
