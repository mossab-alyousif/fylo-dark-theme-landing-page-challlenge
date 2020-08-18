/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

const StyeldExtraDescriptionSection = styled.section`
    display: flex;
    align-items: center;
    padding: 0 100px;
`;

const ExtraDesciptionImg = styled.img`
    height: 460px;
    width: auto;
    margin-right: 45px;
`;

const TitleHeading = styled.h3`
    margin: 25px 0 12px 0;
`;

const Paragraph = styled.p``;

const ImgBox = styled.div``;
const TextBox = styled.div`
    > *:not(:last-child) {
        margin-bottom: 25px;
    }
`;

const Link = styled.a`
    justify-content: space-around;
    color: var(--cyan);
    border-bottom: 1px solid var(--cyan);

    > img {
        vertical-align: middle;
        margin-left: 3px;
    }
`;

const ExtraDescriptionSection = () => {
    //{require('images/illustration-intro.png')}
    return (
        <StyeldExtraDescriptionSection>
            <ImgBox>
                <ExtraDesciptionImg
                    src="images/illustration-stay-productive.png"
                    alt="illustration-stay-productive"
                />
            </ImgBox>
            <TextBox>
                <TitleHeading>Stay productive, wherever you are</TitleHeading>
                <Paragraph>
                    Never let location be an issue when accessing your files. Fylo has you covered
                    for all of your file storage needs.
                </Paragraph>
                <Paragraph>
                    Securely share files and folders with friends, family and colleagues for live
                    collaboration. No email attachments required.
                </Paragraph>
                <Link>
                    <span>See how Fylo works</span>
                    <img src="images/svg/icon-arrow.svg" alt="" />
                </Link>
            </TextBox>
        </StyeldExtraDescriptionSection>
    );
};
export default ExtraDescriptionSection;
