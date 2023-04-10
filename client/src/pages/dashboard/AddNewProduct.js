import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddNewProduct = () => {
  // react hook form credentials
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [tags, setTags] = useState([]);
  const [productThumbnail, setProductThumbnail] = useState(null);
  const [productGallery, setProductGallery] = useState([]);

  // submit add product form
  const handleAddProductForm = (data) => {
    data.tags = tags;
    data.thumbnail = productThumbnail;
    data.gallery = productGallery;
    console.log(data);
  };

  return (
    <section className="grid md:grid-cols-2 grid-cols-1 gap-8">
      {/* product form */}
      <form
        className="grid grid-cols-1 gap-y-4 md:order-1 order-2"
        onSubmit={handleSubmit(handleAddProductForm)}
      >
        <div className="grid grid-cols-1 gap-y-8 bg-white p-4 rounded-md">
          {/* product title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              {errors.title ? (
                <span className="text-red-500 font-medium">
                  Product title field is required!
                </span>
              ) : (
                <span className="flex justify-between">
                  Product title{" "}
                  <span className="hover:text-gray-500">{"<="} 100</span>{" "}
                </span>
              )}
            </label>
            <div className="mt-1">
              <input
                id="title"
                name="title"
                type="text"
                autoComplete="off"
                placeholder="Enter your product title"
                {...register("title", { required: true, maxLength: 100 })}
                className={`w-full form-input rounded-md ${
                  watch("title")?.length > 100 &&
                  "focus:border-red-500 focus:ring-1 focus:ring-red-500"
                }`}
              />
            </div>
          </div>

          {/* product description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              {errors.description ? (
                <span className="text-red-500 font-medium">
                  Product description field is required!
                </span>
              ) : (
                <span className="flex justify-between">
                  Product description{" "}
                  <span className="hover:text-gray-500">{"<="} 2000</span>{" "}
                </span>
              )}
            </label>
            <div className="mt-1">
              <textarea
                id="description"
                name="description"
                type="text"
                autoComplete="off"
                placeholder="Enter your product description"
                {...register("description", {
                  required: true,
                  maxLength: 2000,
                })}
                className={`w-full form-textarea rounded-md ${
                  watch("description")?.length > 2000 &&
                  "focus:border-red-500 focus:ring-1 focus:ring-red-500"
                }`}
                rows="8"
              />
            </div>
          </div>

          {/* product price */}
          <div>
            <div className="grid grid-cols-12 gap-4">
              <div className="md:col-span-4 col-span-12">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  {errors.price ? (
                    <span className="text-red-500 font-medium">
                      Product price field is required!
                    </span>
                  ) : (
                    <span className="flex justify-between">
                      Product price (BDT){" "}
                      <span className="hover:text-gray-500">{">"} 0</span>{" "}
                    </span>
                  )}
                </label>
                <div className="mt-1">
                  <input
                    id="price"
                    name="price"
                    type="number"
                    autoComplete="off"
                    placeholder="Enter product price"
                    {...register("price", { required: true, maxLength: 100 })}
                    className={`w-full form-input rounded-md ${
                      watch("price")?.length > 100 &&
                      "focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    }`}
                  />
                </div>
              </div>

              {/* product tags */}
              <div className="md:col-span-8  col-span-12">
                <div>
                  <label
                    htmlFor="tags"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {errors.tags ? (
                      <span className="text-red-500 font-medium">
                        Product tags field is required!
                      </span>
                    ) : (
                      <span className="flex justify-between">
                        Product tags (use "," to separate){" "}
                      </span>
                    )}
                  </label>
                  <div className="border border-black rounded-md flex flex-wrap flex-row gap-4 items-center mt-1">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-slate-200 p-2 rounded text-xs font-bold"
                      >
                        {tag}
                        <span
                          className="rounded-full bg-slate-300 h-4 w-4 ml-2 hover:text-slate-400 px-1 cursor-pointer"
                          onClick={() => setTags(tags.filter((t) => t !== tag))}
                        >
                          x
                        </span>
                      </span>
                    ))}
                    <input
                      id="tags"
                      name="tags"
                      type="text"
                      autoComplete="off"
                      placeholder="Product tag"
                      {...register("tags", {
                        required: false,
                        maxLength: 10,
                      })}
                      className={`w-32 form-input border-0 focus:right-0 focus:ring-transparent focus:border-0 rounded-md ${
                        watch("tags")?.length > 100 &&
                        "focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      }`}
                      disabled={tags?.length >= 5}
                      onKeyUp={(event) => {
                        if (event.which === 188) {
                          const tagValue = event.target.value.replace(",", "");
                          setTags([...tags, tagValue]);
                          event.target.value = "";
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-8 bg-white p-4 rounded-md">
          {/* subcategory */}
          <div>
            <label
              htmlFor="subcategory"
              className="block text-sm font-medium text-gray-700"
            >
              {errors.subcategory ? (
                <span className="text-red-500 font-medium">
                  Subcategory field is required!
                </span>
              ) : (
                "Subcategory"
              )}
            </label>
            <div className="mt-1">
              <select
                id="subcategory"
                name="subcategory"
                {...register("subcategory", { required: true })}
                className="w-full form-select rounded-md"
              >
                <optgroup label="Choose a subcategory">
                  <option value="subcategory1">Subcategory1</option>
                  <option value="subcategory2">Subcategory2</option>
                  <option value="subcategory3">Subcategory3</option>
                </optgroup>
              </select>
            </div>
          </div>

          {/* brand */}
          <div>
            <label
              htmlFor="brand"
              className="block text-sm font-medium text-gray-700"
            >
              {errors.brand ? (
                <span className="text-red-500 font-medium">
                  Brand field is required!
                </span>
              ) : (
                "Brand"
              )}
            </label>
            <div className="mt-1">
              <select
                id="brand"
                name="brand"
                {...register("brand", { required: true })}
                className="w-full form-select rounded-md"
              >
                <optgroup label="Choose a brand">
                  <option value="brand1">Brand1</option>
                  <option value="brand2">Brand2</option>
                  <option value="brand3">Brand3</option>
                </optgroup>
              </select>
            </div>
          </div>

          {/* store */}
          <div>
            <label
              htmlFor="store"
              className="block text-sm font-medium text-gray-700"
            >
              {errors.store ? (
                <span className="text-red-500 font-medium">
                  Store field is required!
                </span>
              ) : (
                "Store"
              )}
            </label>
            <div className="mt-1">
              <select
                id="store"
                name="store"
                {...register("store", { required: true })}
                className="w-full form-select rounded-md"
              >
                <optgroup label="Choose a store">
                  <option value="store1">Store1</option>
                  <option value="store2">Store2</option>
                  <option value="store3">Store3</option>
                </optgroup>
              </select>
            </div>
          </div>
        </div>

        {/* form submit button */}
        <div className="bg-white p-4 rounded-md">
          <button type="submit" className="w-full btn-primary">
            Create New Product
          </button>
        </div>
      </form>

      {/* product thumbnail & gallery */}
      <div className="grid grid-cols-1 gap-y-4 md:order-2 order-1 content-baseline">
        <h1 className="text-xl">📌 Product Thumbnail & Gallery</h1>
        <div className="bg-white p-4 rounded-md">
          {/* product thumbnail */}
          <div>
            <label
              htmlFor="thumbnail"
              className="block text-sm font-medium text-gray-700"
            >
              {errors.thumbnail ? (
                <span className="text-red-500 font-medium">
                  Product thumbnail field is required!
                </span>
              ) : (
                <span className="flex justify-between">
                  Product thumbnail (765x850){" "}
                  <span className="hover:text-gray-500">
                    {"<="} 1MB (Recommended)
                  </span>{" "}
                </span>
              )}
            </label>
            <div className="mt-1">
              {/* <div class="relative overflow-hidden flex rounded-md">
                <img
                  src={
                    productThumbnail === null
                      ? "https://placehold.co/765x850"
                      : productThumbnail
                  }
                  alt="placeholder preview"
                  class="max-w-full object-cover z-0 rounded-md"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-neutral-50 cursor-pointer">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 5H7.5C6.83696 5 6.20107 5.26339 5.73223 5.73223C5.26339 6.20107 5 6.83696 5 7.5V20M5 20V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H22.5C23.163 25 23.7989 24.7366 24.2678 24.2678C24.7366 23.7989 25 23.163 25 22.5V17.5M5 20L10.7325 14.2675C11.2013 13.7988 11.8371 13.5355 12.5 13.5355C13.1629 13.5355 13.7987 13.7988 14.2675 14.2675L17.5 17.5M25 12.5V17.5M25 17.5L23.0175 15.5175C22.5487 15.0488 21.9129 14.7855 21.25 14.7855C20.5871 14.7855 19.9513 15.0488 19.4825 15.5175L17.5 17.5M17.5 17.5L20 20M22.5 5H27.5M25 2.5V7.5M17.5 10H17.5125"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span class="mt-1 text-xs">Change Image</span>
                </div>
                <input
                  id="thumbnail"
                  name="thumbnail"
                  type="file"
                  accept=".png, .jpg, .jpeg, .webp"
                  autoComplete="off"
                  placeholder="Enter your product thumbnail"
                  {...register("thumbnail", { required: true, maxLength: 100 })}
                  className={`w-full form-input rounded-md absolute inset-0 opacity-0 cursor-pointer ${
                    watch("thumbnail")?.length > 100 &&
                    "focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  }`}
                  onChange={(event) => {
                    setProductThumbnail(
                      URL.createObjectURL(event.target.files[0])
                    );
                  }}
                />
              </div> */}
              <div className="flex items-center gap-x-4">
                <img
                  src={
                    productThumbnail === null
                      ? "https://placehold.co/765x850"
                      : productThumbnail
                  }
                  alt="thumbnail preview"
                  loading="lazy"
                  className="w-20 h-20 max-w-full object-cover object-center rounded-md"
                />
                {productThumbnail === null && (
                  <input
                    id="gallery"
                    name="gallery"
                    type="file"
                    multiple
                    accept=".png, .jpg, .jpeg, .webp"
                    autoComplete="off"
                    placeholder="Enter your product gallery"
                    {...register("gallery", { required: true, maxLength: 100 })}
                    className={`w-full form-input rounded-md ${
                      watch("gallery")?.length > 100 &&
                      "focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    }`}
                    onChange={(event) => {
                      setProductThumbnail(
                        URL.createObjectURL(event.target.files[0])
                      );
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-md">
          {/* product gallery */}
          <div>
            <label
              htmlFor="gallery"
              className="block text-sm font-medium text-gray-700"
            >
              {errors.gallery ? (
                <span className="text-red-500 font-medium">
                  Product gallery field is required!
                </span>
              ) : (
                <span className="flex justify-between">
                  Product gallery (765x850){" "}
                  <span className="hover:text-gray-500">
                    {"<="} 1MB & 5 (Recommended)
                  </span>{" "}
                </span>
              )}
            </label>
            <div className="mt-1">
              <div className="flex gap-x-2 overflow-x-auto">
                {productGallery.map((thumb, index) => (
                  <img
                    key={index}
                    src={thumb}
                    alt="thumbnail preview"
                    loading="lazy"
                    className="w-20 h-20 max-w-full object-cover object-center rounded-md"
                  />
                ))}
              </div>
              {productGallery?.length === 0 && (
                <input
                  id="gallery"
                  name="gallery"
                  type="file"
                  multiple
                  accept=".png, .jpg, .jpeg, .webp"
                  autoComplete="off"
                  placeholder="Enter your product gallery"
                  {...register("gallery", { required: true, maxLength: 100 })}
                  className={`w-full form-input rounded-md ${
                    watch("gallery")?.length > 100 &&
                    "focus:border-red-500 focus:ring-1 focus:ring-red-500"
                  }`}
                  onChange={(event) => {
                    const thumbnails = event.target.files;
                    for (let index = 0; index < thumbnails.length; index++) {
                      setProductGallery((current) => [
                        ...current,
                        URL.createObjectURL(thumbnails[index]),
                      ]);
                    }
                    setProductGallery(URL.createObjectURL(event.target.files));
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddNewProduct;
