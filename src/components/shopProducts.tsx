import React from 'react';
import styled from 'styled-components/native';
import { Product } from '../constant/types';
import { Space } from './space';
import { PriceLabel } from './priceLabel';

type ShopProductsGridProps = {
  products: Product[] | undefined;
  onPressProduct: (id: number) => void;
};

const ShopProductsGrid: React.FC<ShopProductsGridProps> = ({
  products,
  onPressProduct,
}) => {
        return (
                <GridContainer>
                        {products && products.map(product => (
                                <GridItem
                                        key={`idx_${product.id}`}
                                        onPress={() => onPressProduct?.(product.id)}
                                >
                                        <GridImage source={{ uri: product.image }} resizeMode="contain" />
                                        <Space size={8} />
                                        <GridLabel>{product.title}</GridLabel>
                                        <Space size={8} />
                                        <GridSubLabel>{product.category}</GridSubLabel>
                                        <Space size={8} />
                                        <PriceLabel
                                                amount={product.price}
                                                size={14}
                                                bold
                                        />
                                </GridItem>
                        ))}
                </GridContainer>
        );
};

export default ShopProductsGrid;

const GridContainer = styled.View`
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
`;

const GridItem = styled.TouchableOpacity`
        width: 48%;
        border-radius: 12px;
        margin-bottom: 24px;
        padding-bottom: 12px;
        justify-content: center;
        align-items: flex-start;
        overflow: hidden;
`;

const GridImage = styled.Image`
        width: 100%;
        aspect-ratio: 150 / 214;
        margin-bottom: 12px;
`;

const GridLabel = styled.Text`
        font-size: 14px;
        font-weight: 700;
        color: #1c1c1e;
`;

const GridSubLabel = styled.Text`
        font-size: 11px;
        font-weight: 400;
        color: #717174ff;
`;
