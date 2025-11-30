import { SearchTypes } from "../../constant/types";

export type RootStackParamList = {
  Home: undefined;
  Search: { query: string, type: SearchTypes };
  Product: { id: number }
};
