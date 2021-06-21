import AvatarComponent from '../components/Avatar.component';
import IntroComponent from '../components/Intro.component';
import styled from 'styled-components';
import SummaryComponent from '../components/Summary.component';
import EducationComponent from '../components/Education.component';

const Description = styled.div`
    text-align: center;
    padding: 120px 0px 10px 0px;
`;

function ProfileSection() {
    return (
        <>
            <AvatarComponent />

            <Description>
                <IntroComponent/>

                <SummaryComponent/>

                <EducationComponent/>
            </Description>
        </>
    );
}

export default ProfileSection;
