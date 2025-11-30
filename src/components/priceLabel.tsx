import React from 'react';
import styled from 'styled-components/native';
import SarSymbolIcon from '../assets/svg/saudi_riyal_symbol.svg';
import { Text } from 'react-native';

type PriceLabelProps = {
  amount: number;
  size?: number;
  color?: string;
  bold?: boolean;
};

export const PriceLabel: React.FC<PriceLabelProps> = ({
  amount,
  size = 16,
  color = '#1c1c1e',
  bold = true,
}) => {
        return (
                <PriceRow>
                        <IconWrapper>
                                <SarSymbolIcon width={size} height={size} fill={color}/>
                        </IconWrapper>

                        <Text
                                style={{
                                        fontSize: size,
                                        color,
                                        fontWeight: bold ? '700' : '400',
                                }}
                        > {amount.toString()} </Text>
                </PriceRow>
        );
};

const PriceRow = styled.View`
        flex-direction: row;
        align-items: center;
`;

const IconWrapper = styled.View`
        margin-right: 4px;
`;
