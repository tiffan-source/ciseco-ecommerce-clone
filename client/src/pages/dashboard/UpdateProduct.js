import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  useDisplayProductQuery,
  useUpdateProductMutation,
} from "../../features/product/productApi";
import {
  useUpdateGalleryMutation,
  useUpdatePhotoMutation,
} from "../../features/update/updateApi";

const UpdateProduct = () => {
  const { pid } = useParams();
  const {
    data: displayProduct,
    isLoading: displayingProducts,
    isSuccess: displayedProducts,
  } = useDisplayProductQuery(pid);

  const {
    title,
    description,
    price,
    store,
    subcategory,
    brand,
    tags,
    thumbnail,
    gallery,
  } = displayProduct?.data || {};

  // react hook form credentials
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title,
      description,
      price,
      store,
      subcategory,
      brand,
      tags,
      thumbnail,
      gallery,
    },
  });

  // server side credentials
  const [
    updateProduct,
    { isLoading: productUpdating, isSuccess: productUpdated },
  ] = useUpdateProductMutation();
  const [
    updateProductThumbnail,
    { isLoading: thumbnailUploading, isSuccess: thumbnailUploaded },
  ] = useUpdatePhotoMutation();
  const [
    updateGallery,
    { isLoading: galleryUploading, isSuccess: galleryUploaded },
  ] = useUpdateGalleryMutation();

  // upload credentials from state
  const { photo, gallery: productGallery } = useSelector(
    (state) => state.update
  );
  const [productTags, setProductTags] = useState([]);

  const removeTag = (selectedTag) => {
    setProductTags(productTags.filter((tag) => tag !== selectedTag));
  };

  useEffect(() => {
    if (displayingProducts) {
      toast.loading("Displaying product...", { id: "display_product" });
    } else if (displayedProducts) {
      toast.success("Displayed product.", {
        id: "display_product",
      });
    } else if (thumbnailUploading) {
      toast.loading("Uploading thumbnail...", {
        id: "thumbnail_upload",
      });
    } else if (thumbnailUploaded) {
      toast.success("Uploaded thumbnail.", {
        id: "thumbnail_upload",
      });
    } else if (galleryUploading) {
      toast.loading("Uploading gallery...", {
        id: "gallery_upload",
      });
    } else if (galleryUploaded) {
      toast.success("Uploaded gallery.", {
        id: "gallery_upload",
      });
    } else if (productUpdating) {
      toast.loading("Updating product...", { id: "update_product" });
    } else if (productUpdated) {
      toast.success("Updated product.", {
        id: "update_product",
      });
    }

    setProductTags(tags);

    reset({
      title,
      description,
      price,
      store,
      subcategory,
      brand,
      tags,
      thumbnail,
      gallery,
    });
  }, [
    displayingProducts,
    displayedProducts,
    thumbnailUploading,
    thumbnailUploaded,
    galleryUploading,
    galleryUploaded,
    productUpdating,
    productUpdated,
    reset,
    title,
    description,
    price,
    store,
    subcategory,
    brand,
    tags,
    thumbnail,
    gallery,
  ]);

  // submit add product form
  const handleAddProductForm = (data) => {
    data.tags = tags;
    data.brand = undefined;
    data.subcategory = undefined;
    data.store = undefined;
    data.thumbnail = Object.keys(photo)?.length ? photo : thumbnail;
    data.gallery = Object.keys(productGallery)?.length
      ? productGallery
      : gallery;

    updateProduct({ pid: pid, productData: data });
  };

  return (
    <>
      <section className="grid grid-cols-12 gap-8">
        {/* product form */}
        <form
          className="md:col-span-7 col-span-12"
          onSubmit={handleSubmit(handleAddProductForm)}
        >
          <div className="grid grid-cols-1 gap-y-4">
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
                    {...register("title", { maxLength: 100 })}
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
            </div>

            <div className="grid grid-cols-1 gap-y-8 bg-white p-4 rounded-md">
              {/* product price */}
              <div>
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
                      Product price{" "}
                      <span className="hover:text-gray-500">{">="} 00</span>{" "}
                    </span>
                  )}
                </label>
                <div className="mt-1">
                  <input
                    id="price"
                    name="price"
                    type="number"
                    autoComplete="off"
                    placeholder="Enter your product price"
                    {...register("price", { maxLength: 100 })}
                    className={`w-full form-input rounded-md`}
                  />
                </div>
              </div>

              {/* product tags */}
              <div>
                <label
                  htmlFor="tags"
                  className="block text-sm font-medium text-gray-700"
                >
                  {errors.productTags ? (
                    <span className="text-red-500 font-medium">
                      Product tags field is required!
                    </span>
                  ) : (
                    <span className="flex justify-between">
                      Product tags{" "}
                      <span className="hover:text-gray-500">{"<="} upto 5</span>{" "}
                    </span>
                  )}
                </label>
                <div className="mt-1 w-full border rounded-md border-black px-3 py-1 flex items-center flex-wrap gap-2">
                  {productTags?.map((tag, index) => (
                    <span
                      key={index}
                      id="badge-dismiss-dark"
                      className="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-gray-800 bg-gray-200 rounded"
                    >
                      {tag}
                      <button
                        type="button"
                        className="inline-flex items-center p-0.5 ml-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900"
                        data-dismiss-target="#badge-dismiss-dark"
                        aria-label="Remove"
                      >
                        <svg
                          aria-hidden="true"
                          className="w-3.5 h-3.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={() => removeTag(tag)}
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Remove badge</span>
                      </button>
                    </span>
                  ))}
                  <input
                    id="productTags"
                    name="productTags"
                    type="text"
                    autoComplete="off"
                    placeholder="Separate by , or ⎵"
                    {...register("productTags", { required: false })}
                    className={`border-transparent focus:border-transparent focus:ring-transparent rounded-md`}
                    onKeyUp={(event) => {
                      if (event.which === 188 || event.which === 32) {
                        const tagValue = event.target.value.replace(",", "");
                        setProductTags([...productTags, tagValue]);
                        event.target.value = "";
                      }
                    }}
                    readOnly={productTags?.length >= 5}
                  />
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
                    {...register("subcategory", {})}
                    className="w-full form-select rounded-md"
                  >
                    <option value="subcategory1">Subcategory1</option>
                    <option value="subcategory2">Subcategory2</option>
                    <option value="subcategory3">Subcategory3</option>
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
                    {...register("brand", {})}
                    className="w-full form-select rounded-md"
                  >
                    <option value="brand1">Brand1</option>
                    <option value="brand2">Brand2</option>
                    <option value="brand3">Brand3</option>
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
                    {...register("store", {})}
                    className="w-full form-select rounded-md"
                  >
                    <option value="store1">Store1</option>
                    <option value="store2">Store2</option>
                    <option value="store3">Store3</option>
                  </select>
                </div>
              </div>
            </div>

            {/* product thumbnail & gallery */}
            <div className="grid grid-cols-1 gap-y-8 bg-white p-4 rounded-md">
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
                      <span className="hover:text-gray-500">{"<="} 1MB</span>{" "}
                    </span>
                  )}
                </label>
                <div className="mt-1">
                  <div className="flex items-center gap-x-4">
                    {Object.keys(photo)?.length ? (
                      <input
                        type="text"
                        className="form-input rounded-md w-full"
                        value="Thumbnail updated!"
                        readOnly
                      />
                    ) : (
                      <input
                        id="thumbnail"
                        name="thumbnail"
                        type="file"
                        multiple
                        accept=".png, .jpg, .jpeg, .webp"
                        autoComplete="off"
                        placeholder="Enter your product thumbnail"
                        {...register("thumbnail", {})}
                        className={`w-full form-input rounded-md`}
                        onChange={(event) => {
                          const formData = new FormData();
                          formData.append("thumbnail", event.target.files[0]);
                          updateProductThumbnail({
                            route: "product/thumbnail",
                            public_id: thumbnail?.public_id,
                            photo: formData,
                          });
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>

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
                        {"<="} 1MB & upto 5
                      </span>{" "}
                    </span>
                  )}
                </label>
                <div className="mt-1">
                  {Object.keys(productGallery)?.length ? (
                    <input
                      type="text"
                      className="form-input rounded-md w-full"
                      value="Gallery updated!"
                      readOnly
                    />
                  ) : (
                    <input
                      id="gallery"
                      name="gallery"
                      type="file"
                      multiple
                      accept=".png, .jpg, .jpeg, .webp"
                      autoComplete="off"
                      placeholder="Enter your product gallery"
                      {...register("gallery", {})}
                      className={`w-full form-input rounded-md`}
                      onChange={(event) => {
                        const formData = new FormData();
                        for (let i = 0; i < event.target.files.length; i++) {
                          formData.append(
                            "gallery",
                            event.target.files[i]
                          );
                        }
                        updateGallery({ gallery: formData, pid: pid });
                      }}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* form submit button */}
            <div>
              <button type="submit" className="w-full btn-primary">
                Create New Product
              </button>
            </div>
          </div>
        </form>

        {/* preview pan for near future */}
        <section className="md:col-span-5 col-span-12 h-full w-full rounded-md shadow p-4">
          <div className="h-full w-full flex justify-center items-center text-lg">
            {productUpdated ? (
              <div
                className="flex p-4 text-sm text-green-800 rounded-lg bg-green-500"
                role="alert"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 inline w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Success</span>
                <div>
                  <span className="font-medium">Success alert!</span> Your
                  required product is created successfully.
                </div>
              </div>
            ) : (
              <div
                className="flex p-4 text-sm text-yellow-800 rounded-lg bg-yellow-500"
                role="alert"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 inline w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Info</span>
                <div>
                  <span className="font-medium">Refresh alert!</span> Please,
                  refresh the page after creating each product.
                </div>
              </div>
            )}
          </div>
        </section>
      </section>
    </>
  );
};

export default UpdateProduct;
