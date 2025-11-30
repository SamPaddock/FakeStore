import React, { useMemo, useState } from 'react';
import { RootView } from '../assets/style/global';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../helper/redux/store';
import SearchTextField from '../components/searchTextField';
import ShopProductsGrid from '../components/shopProducts';
import { Space } from '../components/space';

function SearchScreen(): React.JSX.Element {
  const navigation = useNavigation<any>();
  const route = useRoute();

  const { query, type } = route.params as { query: string; type: string };
  const [searchText, setSearchText] = useState(query);

  const storedProducts = useSelector((state: RootState) => state.products.products);

  const filteredProducts = useMemo(() => {
    const isSearchTextEmpty = searchText?.length < 1;
    const q = searchText.toLowerCase();

    if (type === 'category') {
      if(isSearchTextEmpty) {
        return storedProducts.filter(p =>
          p.category.toLowerCase().includes(query)
        );
      } else {
        return storedProducts.filter(p =>
          p.category.toLowerCase().includes(query) &&
          p.title.toLowerCase().includes(q)
        );
      }
    } else if(type === 'query') {
      if(isSearchTextEmpty) {
        return storedProducts
      } else {
        return storedProducts.filter(p =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
        );
      }
    }

  }, [query, searchText, storedProducts, type]);

  return (
    <RootView>
      <SearchTextField
            onSubmitSearchTerm={(p) => setSearchText(p)}
      />
      <Space size={16} />
      <ShopProductsGrid
        products={filteredProducts}
        onPressProduct={(id) => navigation.navigate('Product', { id })}
      />
    </RootView>
  );
}

export default SearchScreen;
