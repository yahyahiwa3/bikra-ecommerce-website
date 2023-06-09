import React, { useEffect, useState } from "react";
import { useGetCategoreyQuery } from "../../app/api/categorey.endpoint";
import {
  useAddProductMutation,
  useUploadImageMutation,
} from "../../app/api/productEndPoint";
import { useSelector } from "react-redux";
function AddProduct() {
  const { data, isError, isLoading } = useGetCategoreyQuery();
  const userData = useSelector((state) => state.user.user);
  const [uploadImage, { data: UploadImage }] = useUploadImageMutation();
  const [productData, setproductData] = useState({
    name: "",
    image: null,
    price: null,
    discount: 0,
    description: "",
    owner: userData?._id,
    quantity: 1,
    category: "",
  });
  let options;
  //----------------- adding product-------------------------///
  useEffect(() => {
    if (UploadImage?.status === "success") {
      setproductData({ ...productData, image: UploadImage?.data });
    }
  }, [UploadImage]);
  if (!isError && !isLoading) {
    options = data.data.map((value, index) => {
      return (
        <option key={index} value={value._id}>
          {value.name}
        </option>
      );
    });
  }
  ////////////////////////////////////////////////////
  useEffect(() => {
    if (!isError && !isLoading) {
      options = data.data.map((value, index) => {
        return (
          <option key={index} value={value._id}>
            {value.name}
          </option>
        );
      });
    }
  }, [isError, isLoading]);

  ////////////////////////////////////////////////////
  const [addProduct] = useAddProductMutation();
  const handldata = (e) => {
    setproductData({ ...productData, [e.target.name]: e.target.value });
  };
  return (
    <section className="w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addProduct(productData);
        }}
        className="w-full flex justify-center items-center mt-6"
      >
        <div className="w-[90%] sm:w-1/2 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold text-slate-700">Add Product</h1>
          {/* -------------------------Name------------------------------------ */}
          <div className="w-full flex flex-col justify-center items-center mt-4">
            <h1 className="text- font-bold text-slate-700">Product Name</h1>
            <input
              onChange={handldata}
              type="text"
              name="name"
              className="w-full border-[2px] py-1 pl-2 rounded-xl  outline-none "
            />
          </div>
          {/* ----------------------Image------------------------------------ */}
          <div className="w-full flex flex-col justify-center items-center mt-4">
            <h1 className="text- font-bold text-slate-700">Product Image</h1>
            <div className="w-full h-[250px] rounded-2xl overflow-hidden border mb-2 object-cover">
              <img
                src={`${import.meta.env.VITE_BACK_END}uploads/image/${
                  productData.image && productData.image
                }`}
                className={`w-full h-full`}
                alt=""
              />
            </div>
            <input
              type="file"
              onChange={(e) => {
                uploadImage(e.target.files);
              }}
              name="image"
              className="w-full border-[2px] py-1 pl-2 rounded-xl border- outline-none "
            />
          </div>
          {/* -----------------------Category--------------------------------- */}

          <div className="w-full flex flex-col justify-center items-center mt-4">
            <h1 className="text- font-bold text-slate-700">Category</h1>
            <select
              onChange={handldata}
              name="category"
              className="w-full border-[2px] py-1 pl-2 rounded-xl border- outline-none"
            >
              <option value="">Select Category</option>
              {options}
            </select>
          </div>
          {/* ----------------------Price------------------------------------ */}
          <div className="w-full flex flex-col justify-center items-center mt-4">
            <h1 className="text- font-bold text-slate-700">Product Price</h1>
            <input
              onChange={handldata}
              type="number"
              name="price"
              min={0}
              className="w-full border-[2px] py-1 pl-2 rounded-xl border- outline-none "
            />
          </div>
          {/* ----------------------Discount------------------------------------ */}
          <div className="w-full flex flex-col justify-center items-center mt-4">
            <h1 className="text- font-bold text-slate-700">Product Discount</h1>
            <input
              type="number"
              min={0}
              onChange={handldata}
              name="discount"
              defaultValue={0}
              className="w-full border-[2px] py-1 pl-2 rounded-xl border- outline-none "
            />
          </div>
          {/* ----------------------quantity------------------------------------ */}
          <div className="w-full flex flex-col justify-center items-center mt-4">
            <h1 className="text- font-bold text-slate-700">Quantity</h1>
            <input
              type="number"
              name="quantity"
              min={1}
              defaultValue={1}
              onChange={handldata}
              className="w-full border-[2px] py-1 pl-2 rounded-xl border- outline-none "
            />
          </div>
          {/* ----------------------Description------------------------------------ */}
          <div className="w-full flex flex-col justify-center items-center mt-4">
            <h1 className="text- font-bold text-slate-700">
              Product Description
            </h1>
            <textarea
              onChange={handldata}
              name="description"
              type="text"
              className="w-full border-[2px] py-1 pl-2 rounded-xl border- outline-none "
            />
          </div>
          <button
            type="submit"
            className="w-full h-10 bg-jaguar-400 mt-2 hover:bg-jaguar-500
           ease-in-out duration-300 text-white rounded-xl"
          >
            Add Product
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddProduct;
