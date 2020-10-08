import { createSelector} from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections ? Array.from(shop.collections.values()) : []
);

export const selectCollection = collectionUrlParam => 
  createSelector(
    [selectShop],
    shop => shop.collections && shop.collections.get(collectionUrlParam)
  )