type ProductConstantsType = {
  url: string;
  db: string;
  paymentLinks: {
    membership: string;
  };
};

const productsTest: ProductConstantsType = {
  url: "http://localhost:3000",
  db: "postgresdb",
  paymentLinks: {
    membership: "https://buy.stripe.com/test_4gwaH5fVWdwBc909AA",
  },
};

const productsProd: ProductConstantsType = {
  url: "http://localhost:3000",
  db: "postgresdb",
  paymentLinks: {
    membership: "https://buy.stripe.com/test_4gwaH5fVWdwBc909AA",
  },
};

const products =
  process.env.NODE_ENV === "development" ? productsTest : productsProd;

export default products;
