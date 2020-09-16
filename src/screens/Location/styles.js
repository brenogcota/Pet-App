import { Dimensions } from 'react-native';
import styled from 'styled-components';

import { theme } from '../../styles/colors';


const windowWidth = (Dimensions.get('screen').width - 80)+'px';

export const Wrapper = styled.View`
    flex: 1;
    background: ${theme.background};
    padding: 0 5px;
    align-items: center;
`;

export const BackgroundImage = styled.Image`
    flex: 1;
    resize-mode: cover;
    background: ${theme.background};
`;

export const SearchBox = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px;
    margin-top: 40px;
    elevation: 0.5;
    shadow-opacity: 0.1;
    padding: 6px 20px;
    border-radius: 20px;
    background: #fff;
    position: absolute;
    top: 10px;
`;

export const Footer = styled.View`
    width: 100%;
    align-items: center;
    position: absolute;
    bottom: 0;
`;

export const Cards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false
})``;

export const Card = styled.View`
    flex: 1;
    width: ${windowWidth};
    background: #fff;
    border-radius: 20px;
    margin-left: 20px;
    padding: 20px;
`;

export const  CardHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const  CardImage = styled.Image`
    width: 60px;
    height: 60px;
    background: ${theme.orange};
    border-radius: 10px;
    position: relative;
    bottom: 10px;
`;

export const  Actions = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 70px;
`;

export const  Title = styled.Text`
    color: ${theme.primary};
    font-size: 16px;
    margin-bottom: 6px;
`;

export const  Label = styled.Text`
    color: ${theme.lightDark};
    font-size: 12px;
`;

export const  MoreInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 80px;
    margin-top: 6px;
`;

export const  Note  = styled.Text`
    font-size: 12px;
`;

export const  Views = styled.Text`
    font-size: 12px;
    color: ${theme.lightDark};
`;

export const CloseButton = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: ${theme.purple};
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    margin-top: 30px;
    position: relative;
    bottom: 10px;
`;

