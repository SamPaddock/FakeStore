import { Share } from "react-native";
import { Product } from "../../constant/types";

export const getProductCategory = (products: Product[]) => {
        const category: string[] = [];

        products.forEach(item => {
                if (!category.includes(item.category)) {
                        category.push(item.category);
                }
        });

        return category;
};

export const shareContent = async (url: string, message: string) => {
      try {
            const result = await Share.share({
                  message: message,
                  url: url,
            });
            if (result.action === Share.sharedAction) {
                  console.log('Shared successfully');
            } else if (result.action === Share.dismissedAction) {
                  console.log('Sharing dismissed');
            }
      } catch (error) {
            console.error('Error sharing image:', error);
      }
};
