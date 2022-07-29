/* eslint-disable no-fallthrough */
const calculateTotalPrice = (products) =>
  products.reduce((acc, curr) => acc + curr.price, 0);

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'addProduct': {
      const products = [...state.products];
      const newProduct = action.payload;
      const isTheNewProductInCart = products.find(
        (product) => product.id === newProduct.id,
      );
      const newProducts = [newProduct, ...products];

      const totalPrice = calculateTotalPrice(newProducts);
      if (!isTheNewProductInCart) {
        return {
          ...state,
          products: newProducts,
          totalPrice,
        };
      }
    }
    case 'deleteProduct': {
      const products = [...state.products];
      const productToDelete = action.payload;

      const newProducts = products.filter(
        (product) => product.id !== productToDelete.id,
      );
      const totalPrice = calculateTotalPrice(newProducts);

      return {
        ...state,
        products: [...newProducts],
        totalPrice,
      };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};
