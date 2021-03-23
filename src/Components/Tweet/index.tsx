import React from 'react';

import { 
  Container,
  Retweeted, 
  RoketseadIcon, 
  Body, 
  Avatar, 
  Content, 
  Header, 
  Dot, 
  Description, 
  ImageContent, 
  Icons, 
  Status, 
  CommentIcons, 
  RetweetIcon, 
  LikeIcon, 
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RoketseadIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Maria</strong>
            <span>@Mariaa</span>
            <Dot />
            <time>27 de jun</time>
          </Header>

          <Description>Bom Diaa</Description>

          <ImageContent>
            <Icons>
              <Status>
                <CommentIcons />
                18
              </Status>
              <Status>
                <RetweetIcon />
                18
              </Status>
              <Status>
                <LikeIcon />
                18
              </Status>
              
            </Icons>
          </ImageContent>

        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
