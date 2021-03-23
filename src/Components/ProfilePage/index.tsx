import React from 'react';
import Feed from "../Feed"
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Bruno Almeida</h1>
        <h2>@BrunoVollin</h2>

        <p>
          estudanto no <a href="https://inatel.com.br">@Inatel</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Jacutinga, MG
          </li>
          <li>
            <CakeIcon />
            Nascido em 31 de Janeiro de 2000
          </li>
        </ul>
        <Followage>
          <span>
            segindo <strong>0</strong>
          </span>
          <span>
            <strong>1 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed/>
    </Container>
  );
};

export default ProfilePage;
