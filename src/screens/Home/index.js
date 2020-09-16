import React, {useState} from 'react';
import { Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';

import Cat from '../../assets/cat.png';
import AvatarImg from '../../assets/avatar.jpg';
import Pug from '../../assets/pug.png';
import Papagaio from '../../assets/ppg.png';

import {  Wrapper, 
          Container,
          SubscribeBox,
          DismissButton,
          SubTitle, 
          SubLabel,
          SubButton,
          Main,
          BoxRow,
          TextLarge,
          Avatar,
          Options,
          Option,
          Cards,
          Card,
          CardLabel,
} from './styles';

function Home() {

  const [dismiss, setDismiss] = useState(true);


  return (
    <Wrapper>
      <Container>

        { dismiss && (
            <SubscribeBox>
              <DismissButton onPress={() => {setDismiss(false)}}>
                <MIcon name="close" size={18} />
              </DismissButton>

              <SubTitle>Real lovers? Go pro</SubTitle>
              <SubLabel>Subscribe to Petty Pro to unlock premium features</SubLabel>

              <SubButton>
                <Text style={{color: '#fff'}}> Go pro</Text>
              </SubButton>

              <Image source={Cat} style={{width: 100, height: 100, position: "absolute", right: 0, bottom: -10}}/>

            </SubscribeBox>
        )}

        <Main>
          <BoxRow>
            <TextLarge>
              Hey Eleonora, what you looking for?
            </TextLarge>

            <Avatar source={AvatarImg} />

          </BoxRow>

          <Options>
            <Option>
              <AntIcon name="search1" color="#666" size={24} />
            </Option>

            <Option>
              <AntIcon name="heart" color="#666" size={24} />
            </Option>

            <Option>
            <AntIcon name="gift" color="#666" size={24} />
            </Option>

            <Option>
              <AntIcon name="checkcircle" color="#666" size={24} />
            </Option>

            <Option>
              <AntIcon name="plus" color="#666" size={24} />
            </Option>


          </Options>
        </Main>

        <Cards>
          <Card color="#EA6F19">
            <CardLabel>Take care of your dog in just 5 tips</CardLabel>
            <Image
              source={Pug}
              style={{
                width: 120,
                height: 120,
                position: 'absolute',
                bottom: 0,
                left: 0
              }}
            />
          </Card>

          <Card color="#13B074">
            <CardLabel>Take care of your dog in just 5 tips</CardLabel>
            <Image 
              source={Papagaio} 
              style={{
                width: 120,
                height: 160,
                position: 'absolute',
                bottom: 0,
                left: 0
              }}
            />
          </Card>
        </Cards>

      </Container>
    </Wrapper>
  );
}

export default Home;