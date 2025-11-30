import { products } from '../constant/apiEndpoints';
import { Product } from '../constant/types';
import { get } from '../helper/functions/apiRequests';

const getAllProducts = async () => {
      return await get<Product[]>(products.getAll, {});
};

const getProduct = async (productID: number | string) => {
      return await get<Product>(products.getProduct.replace('{id}',productID.toString()), {});
};

export {
      getAllProducts,
      getProduct,
};
