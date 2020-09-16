import React from 'react';
import { TextInput } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

import dog from '../../assets/pinscher.png';
import Map from '../../assets/mapRezie.png';


import { 
          Wrapper,
          BackgroundImage,
          SearchBox,
          Footer,
          Cards,
          Card,
          CardHeader,
          CardImage,
          Actions,
          Title,
          Label,
          MoreInfo,
          Note, 
          Views,
          CloseButton,
} from './styles';

function Location() {
  return (
    <Wrapper>
      <BackgroundImage source={Map} />
      <SearchBox>
        <AntIcon name="search1" color="#bbb" size={24} />
        <TextInput placeholder="Eleonora, looking for a?" placeholderTextColor="#ccc" style={{height: 40, flex: 1, marginLeft: 10, fontSize: 16 }} />
        <AntIcon name="filter" color="#bbb" size={24} />
      </SearchBox>

      <Footer>
        <Cards>
          <Card>
            <CardHeader>
              <CardImage source={dog} />
              <Actions>
                <AntIcon name="heart" color="#f00" size={16} />
                <AntIcon name="sharealt" color="#bbb" size={16} />
                <AntIcon name="phone" color="#bbb" size={16} />
              </Actions>
            </CardHeader>
            <Title>Mazzini Pet shop</Title>
            <Label>Monday to Friday 10:00 - 18:00</Label>
            <MoreInfo>
              <AntIcon name="star" color="#333" size={15} />
              <Note>4.5</Note>
              <Views>(1378)</Views>
            </MoreInfo>
          </Card>

          <Card>
            <CardHeader>
              <CardImage source={dog} />
              <Actions>
                <AntIcon name="heart" color="#f00" size={16} />
                <AntIcon name="sharealt" color="#bbb" size={16} />
                <AntIcon name="phone" color="#bbb" size={16} />
              </Actions>
            </CardHeader>
            <Title>Mazzini Pet shop</Title>
            <Label>Monday to Friday 10:00 - 18:00</Label>
            <MoreInfo>
              <AntIcon name="star" color="#333" size={15} />
              <Note>4.5</Note>
              <Views>(1378)</Views>
            </MoreInfo>
          </Card>
        </Cards>

        <CloseButton>
          <AntIcon name="close" color="#fff" size={18} />
        </CloseButton>
      </Footer>
    </Wrapper>
  );
}

export default Location;