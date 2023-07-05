import ProductItem from "./ProductItem";
const HomeBody = ({ data, setData }) => {
  const onAddStudentHandler = () => {
    const filterDataList = data.filter((productItem) => {
      return data[0].id !== productItem.id;
    });
    setData(filterDataList);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center gap-3 flex-wrap p-3"
      style={{ background: "#F5EFE7", minHeight: "789px" }}
    >
      {data.length === 0 ? (
        <h2 className="text-danger">No data</h2>
      ) : (
        data.map((productItem) => {
          return (
            <ProductItem
              index={productItem.id}
              onClick={() => {
                onAddStudentHandler(productItem);
              }}
              productName={productItem.Product_name}
              price={productItem.price}
              discount={productItem.discount}
            />
          );
        })
      )}
    </div>
  );
};

export default HomeBody;
