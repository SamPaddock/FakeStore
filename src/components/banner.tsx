import React from 'react';
import { ImageSourcePropType } from 'react-native';
import styled from 'styled-components/native';
import { Subtitle, Title } from '../assets/style/text';
import { BannerImage, ImageWrapper } from '../assets/style/image';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../assets/style/colors';

type BannerProps = {
        title: string;
        subtitle?: string;
        image: ImageSourcePropType;
        onPressButton?: () => void;
};

const Banner: React.FC<BannerProps> = ({
        title,
        subtitle,
        image,
}) => {
        return (
                <BannerContainer colors={[colors.gradientStart, colors.gradientEnd]}>
                        <TextColumn>
                                <Title numberOfLines={2}>{title}</Title>
                                {subtitle ? <Subtitle numberOfLines={3}>{subtitle}</Subtitle> : null}
                        </TextColumn>

                        <ImageWrapper>
                                <BannerImage source={image} resizeMode="contain" />
                        </ImageWrapper>
                </BannerContainer>
        );
};

export default Banner;

const BannerContainer = styled(LinearGradient)`
  flex-direction: row;
  align-items: flex-start;
  border-radius: 8px;
  overflow: hidden;
  max-height: 200px;
`;

const TextColumn = styled.View`
  flex: 1;
  padding: 16px;
`;
