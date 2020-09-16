import React from 'react';
import { Image, StatusBar } from 'react-native';

import MIcon from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Golden from '../../assets/golden.png'
 
import { theme } from '../../styles/colors';

import {  
          Wrapper, 
          Container,
          ContentHeader,
          DismissButton,
          Title,
          List,
          TextLi,
          Button,
          TextButton,
} from './styles';

function PettyPro() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={theme.purple} />
      <Wrapper>
        <ContentHeader>
          <DismissButton>
            <MIcon name="close" size={18} color="#fff" />
          </DismissButton>

          <Title>
            Knowing your pet has never been so easy, only with Petty Pro.
          </Title>
          <Image source={Golden} style={{width: 120, height: 140, position: 'absolute', right: 40, bottom: 0}} />
        </ContentHeader>

        <Container>
          <List>
            <AntIcon name="heart" color="#666" size={24} />
            <TextLi>Monthly tips on the best diet for your pet.</TextLi>
          </List>

          <List>
            <AntIcon name="gift" color="#666" size={24} />
            <TextLi>Acess to premium features, tips and handpicked guides.</TextLi>
          </List>

          <List>
            <AntIcon name="rocket1" color="#666" size={24} />
            <TextLi>Weekly stats, archievements and saved contents.</TextLi>
          </List>


          <Button background={theme.purple}>
            <TextButton  bold={true}>Go pro</TextButton>
            <TextButton> for $4.99 / month </TextButton>
          </Button>

          <Button background={theme.background} outline={true}>
            <TextButton outline={true} bold={true}>Start your 7 days free trial</TextButton>
          </Button>
        </Container>
      </Wrapper>
    </>
  );
}

export default PettyPro;