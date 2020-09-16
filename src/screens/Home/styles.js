import styled from 'styled-components';

import { theme } from '../../styles/colors';

export const Wrapper = styled.View`
    flex: 1;
    background: ${theme.background};
    padding: 25px;
`;


export const Container = styled.ScrollView.attrs({
    vertical: true,
    showsVerticalScrollIndicator: false
})`
  flex: 1;
`;

export const SubscribeBox = styled.View`
    height: 150px;
    width: 100%;
    background: #e3e3e3;
    margin: 20px 0;
    padding: 20px;
    border-radius: 16px;
`;

export const DismissButton = styled.TouchableOpacity`
    position: absolute;
    right: 10px;
    top: 10px;
`;

export const SubTitle  = styled.Text`
    color: ${theme.purple};
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 5px;
`;

export const SubLabel = styled.Text`
    max-width: 60%;
    color: #555;
`;

export const SubButton = styled.TouchableOpacity`
    padding: 10px 20px;
    background: ${theme.purple};
    border-radius: 16px;
    height: 30px;
    width: 90px;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
`;

export const Main = styled.View`
    margin-top: 20px;
    width: 100%;
`;

export const BoxRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const TextLarge = styled.Text`
    font-size: 20px;
    max-width: 60%;
    color: ${theme.color};
`;

export const Avatar = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: #e3e3e3;
`;

export const Options = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false
})`
    margin-top: 20px;
`;

export const Option = styled.View`
    width: 55px;
    height: 55px;
    border-radius: 16px;
    background: #e3e3e3;
    align-items: center;
    justify-content: center;
    margin: 6px;
`;

export const Cards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false
})`
    margin-top: 30px;
`;

export const Card = styled.View`
    height: 300px;
    width: 200px;
    margin: 6px;
    background: ${props => props.color};
    opacity: 0.7;
    padding: 20px;
    border-radius: 16px;
`;

export const CardLabel = styled.Text`
    font-weight: 700;
    color: #fff;
    font-size: 24px;
    max-width: 130px;
`;



