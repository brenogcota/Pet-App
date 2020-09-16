import styled from 'styled-components';

import { theme } from '../../styles/colors';

export const Wrapper = styled.ScrollView.attrs({
    vertical: true,
    showsVerticalScrollIndicator: false
})`
    flex: 1;
    background: ${theme.background};
`;


export const Container = styled.View`
  flex: 1;
  margin: 30px 20px;
`;

export const DismissButton = styled.TouchableOpacity`
    position: absolute;
    right: 20px;
    top: 20px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.2);
    align-items: center;
    justify-content: center;
`;

export const ContentHeader = styled.View`
    background: ${theme.purple};
    padding: 30px 20px 0;
    height: 300px;
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
`;

export const Title = styled.Text`
    font-size: 24px;
    color: #fff;
    max-width: 80%;
    margin-bottom: 20px;
    margin-top: 30px;
    font-weight: 700;
`;

export const List = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    margin: 0 10px;
`;

export const TextLi = styled.Text`
    margin: 10px 0;
    font-size: 16px;
    color: #555;
    font-weight: 500;
    max-width: 70%;
    margin-left: 30px;
`;

export const Button = styled.TouchableOpacity`
    background: ${props => props.background};
    border: ${props => props.outline ? '#ccc' : theme.purple};
    border-width: ${props => props.outline ? '2px' : 0};
    margin-top: ${props => props.outline ? '0px' : '40px'};

    width: 250px;
    padding: 20px;
    height: 60px;
    border-radius: 28px;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
    align-self: center;
`;

export const TextButton = styled.Text`
    color: ${props => props.outline ? '#aaa' : '#fff'};
    font-weight: ${props => props.bold ? '700' : '500'};
`;
