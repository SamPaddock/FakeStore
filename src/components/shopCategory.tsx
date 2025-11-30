import React from 'react';
import styled from 'styled-components/native';
import { categoryColors } from '../assets/style/colors';

type ShopCategoriesGridProps = {
  categories: string[];
  onPressCategory?: (cat: string) => void;
};

const ShopCategoriesGrid: React.FC<ShopCategoriesGridProps> = ({
  categories,
  onPressCategory,
}) => {
  return (
    <GridContainer>
      {categories.map((category, index) => (
        <CategoryItem
          key={`idx_${category}`}
          onPress={() => onPressCategory?.(category)}
          style={{backgroundColor: categoryColors[index]}}
        >
          <CategoryLabel numberOfLines={2}>{category}</CategoryLabel>
        </CategoryItem>
      ))}
    </GridContainer>
  );
};

export default ShopCategoriesGrid;

const GridContainer = styled.View`
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 12px;
`;

const CategoryItem = styled.TouchableOpacity`
        width: 22%; 
        border-radius: 8px;
        align-items: center;
        justify-content: center;
        padding-vertical: 12px;
        padding-horizontal: 4px;
`;

const CategoryLabel = styled.Text`
        font-size: 12px;
        font-weight: 500;
        text-align: center;
        color: #1c1c1e;
`;
