import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { RootState } from '../helper/redux/store';
import styled from 'styled-components/native';
import { useSelector } from 'react-redux';

import { useOnlineStatus } from '../helper/functions/useOnlineStatus';
import { RootView, ScrollMain } from '../assets/style/global';
import { Product } from '../constant/types';
import { getProduct } from '../apis/products';
import { PriceLabel } from '../components/priceLabel';
import { Space } from '../components/space';

function ProductScreen(): React.JSX.Element {
  const route = useRoute();
 
  const { id } = route.params as { id: number };
  const [product, setProduct] = useState<Product>();

  const isOnline = useOnlineStatus();
  const storedProducts = useSelector((state: RootState) => state.products.products);

  useEffect(() => {
    if(isOnline) {
      getProduct(id).then(response => {
        setProduct(response?.data);
      }).catch(e => console.log(e));
    } else if (storedProducts && storedProducts?.length > 0) {
      setProduct(storedProducts.filter(p => p.id === id)[0]);
    }
  },[id, isOnline, storedProducts]);

  return (
    <RootView>
      <ScrollMain>
        <ProductImage
          source={{ uri: product?.image }}
          resizeMode="contain"
        />
        <Space size={16} />
        <Title numberOfLines={2}>{product?.title}</Title>
        <Space size={8} />
        <Category>{product?.category}</Category>
        <Space size={16} />
        <Description>{product?.description}</Description>
      </ScrollMain>
      <AddToCartButton disabled>
        <ButtonText>Add to cart</ButtonText>
        <PriceLabel
          amount={product?.price ?? 0}
          size={16}
          bold
        />
      </AddToCartButton>
    </RootView>
  );
}

export default ProductScreen;

const ProductImage = styled.Image`
  width: 100%;
  aspect-ratio: 150 / 214;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #1c1c1e;
`;

const Category = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #6b6b6e;
`;

const Description = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: #3a3a3c;
`;

const AddToCartButton = styled.TouchableOpacity<{ disabled?: boolean }>`
  height: 48px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  margin: 20px;
  margin-bottom: 40px;
  background-color: ${({ disabled }) => (disabled ? '#D1D1D6' : '#310D7D')};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
`;

const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
`;
