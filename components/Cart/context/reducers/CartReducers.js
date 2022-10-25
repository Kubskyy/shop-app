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

      if (!isTheNewProductInCart) {
        const newProducts = [newProduct, ...products];
        const productsLength = newProducts.length;
        const totalPrice = calculateTotalPrice(newProducts).toFixed(2);

        return {
          ...state,
          products: newProducts,
          productsLength,
          totalPrice,
        };
      } else {
        // const count = products.reduce((acc, product) => {
        //   if (product.id === isTheNewProductInCart.id) {
        //     return acc + 1;
        //   }
        //   return acc;
        // }, 1);
        //console.log(count);
        const mutableProduct = { ...newProduct };

        const newProducts = [mutableProduct, ...products];
        console.log(newProducts);
        //console.log(mutableProduct.quantity);
        // const filteredProducts = newProducts.filter(
        //   (item) =>
        //     item.id !== mutableProduct.id ||
        //     (item.id === mutableProduct.id &&
        //       item.quantity === mutableProduct.quantity &&
        //       item.quantity > 1),
        // );
        console.log('====');
        //console.log(filteredProducts);

        const productsLength = newProducts.length;
        const totalPrice = calculateTotalPrice(newProducts).toFixed(2);

        return {
          ...state,
          products: newProducts,
          productsLength,
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
      const productsLength = newProducts.length;
      const totalPrice = calculateTotalPrice(newProducts);

      return {
        ...state,
        products: [...newProducts],
        productsLength,
        totalPrice,
      };
    }
    case 'openMenu': {
      return {
        ...state,
        isOpen: true,
      };
    }
    case 'closeMenu': {
      return {
        ...state,
        isOpen: false,
      };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};
