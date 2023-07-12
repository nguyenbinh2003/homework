import ProductItem from "./ProductItem";
const HomeBody = ({ productList, setCount, count, setSelectedProduct }) => {
  const handleAddToCart = (selectedProduct) => {
    if (
      selectedProduct &&
      !count.some((item) => item.id === selectedProduct.id)
    ) {
      setCount([...count, selectedProduct]);
    }
    setSelectedProduct(null);
  };

  return (
    <div
      className="d-flex justify-content-center gap-3 flex-wrap p-3"
      style={{ background: "#F5EFE7" }}
    >
      {productList.length === 0
        ? "No data"
        : productList.map((productItem) => {
            return (
              <ProductItem
                index={productItem.id}
                onClick={() => {
                  handleAddToCart(productItem);
                }}
                name={productItem.name}
                price={productItem.price}
                discount={productItem.discount}
              />
            );
          })}
    </div>
  );
};

export default HomeBody;
