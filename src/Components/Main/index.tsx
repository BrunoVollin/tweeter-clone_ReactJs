import React from 'react';
import ProfilePage from "../ProfilePage"
import {
  Container,
  Header,
  ProfileInfo,
  BackIcon,
  BottomMenu,
  HomeIcon,
  BellIcon,
  SearchIcon,
  EmailIcon,
} from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Bruno Almeida</strong>
          <span>3 tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage></ProfilePage>

      <BottomMenu>
            <HomeIcon className="active"/>
            <SearchIcon />
            <BellIcon />
            <EmailIcon />
        </BottomMenu>
    </Container>
  );
};

export default Main;
