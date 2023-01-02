import { editProduct } from "../../actions/productAction";

const editProductData = (id, updatedProduct) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(),
    });
    const data = await res.json(updatedProduct);
    console.log(data);
    if (data.acknowledged) {
      dispatch(editProduct(updatedProduct));
      alert("Product updated successfully");
    }
  };
};

export default editProductData;
