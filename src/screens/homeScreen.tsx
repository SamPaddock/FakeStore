import React, { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { HeaderWrapper, RootView, ScrollBody, ScrollMain } from '../assets/style/global';
import { useOnlineStatus } from '../helper/functions/useOnlineStatus';
import { getProductCategory } from '../helper/functions/helper';
import { setShopProducts } from '../helper/redux/productSlice';
import { RootState } from '../helper/redux/store';

import { HeaderImage } from '../assets/style/image';
import { ConstantString } from '../constant/string';
import { getAllProducts } from '../apis/products';
import { Product } from '../constant/types';
import SearchTextField from '../components/searchTextField';
import ShopCategoriesGrid from '../components/shopCategory';
import ShopProductsGrid from '../components/shopProducts';
import Banner from '../components/banner';

function HomeScreen(): React.JSX.Element {
  const navigation = useNavigation<any>();
  const [products, setProducts] = useState<Product[]>();
  const [categories, setCategories] = useState<string[]>([]);

  const dispatch = useDispatch();
  const isOnline = useOnlineStatus();
  const insets = useSafeAreaInsets();
  const storedProducts = useSelector((state: RootState) => state.products.products);

  useEffect(() => {
    if(isOnline) {
      getAllProducts().then(response => {
        setProductsValues(response.data);
        dispatch(setShopProducts(response.data));
      }).catch(e => console.log(e));
    } else if (storedProducts && storedProducts?.length > 0) {
      setProductsValues(storedProducts);
    }
  },[dispatch, isOnline, storedProducts]);

  const setProductsValues = (list: Product[]) => {
    setProducts(list);
    setCategories(getProductCategory(list));
  };

  const onSubmitSearchTerm = (query: string) => {
    navigation.navigate('Search', { query: query, type: 'query' });
  };

  return (
    <RootView>
      <ScrollMain
        contentContainerStyle={{gap: 16}}
      >
        <ScrollBody>
          <HeaderWrapper style={{marginTop: insets.top}}>
            <HeaderImage source={require('../assets/bootsplash_logo.png')} resizeMode="contain" />
          </HeaderWrapper>
          <Banner
            title={ConstantString.home_banner_title}
            subtitle={ConstantString.home_banner_subtitle}
            image={require('../assets/images/banner_1.png')}
          />
          <SearchTextField
            onSubmitSearchTerm={(p) => onSubmitSearchTerm(p)}
          />
          <ShopCategoriesGrid
            categories={categories}
            onPressCategory={(query) => navigation.navigate('Search', {query: query, type: 'category'})}
          />
          <ShopProductsGrid
            products={products}
            onPressProduct={(id) => navigation.navigate('Product', { id })}
          />
        </ScrollBody>
      </ScrollMain>
    </RootView>
  );
}

export default HomeScreen;
