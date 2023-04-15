import React, { useEffect, useState } from "react";
import {
  useDisplayProductsQuery,
  useRemoveProductMutation,
} from "../../../features/product/productApi";
import LazyLoadingImage from "../../../components/LazyLoadingImage";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import DashboardLoading from "../DashboardLoading";
import DashboardInlineLoading from "../DashboardInlineLoading";

const ListProduct = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { data: productsData, isLoading: displayingProducts } =
    useDisplayProductsQuery({
      page,
      limit,
    });
  const [removeProduct, { isLoading: removingProduct }] =
    useRemoveProductMutation();

  const products = productsData?.data || [];

  return (
    <>
      {displayingProducts ? (
        <DashboardLoading />
      ) : (
        <div class="flex flex-col">
          <div class="-m-1.5 overflow-x-auto">
            <div class="p-1.5 min-w-full inline-block align-middle">
              <div class="overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Thumbnail
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Price (৳)
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Gallery
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Subcategory
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Brand
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Store
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(
                      ({ _id, thumbnail, title, price, gallery }) => (
                        <tr
                          key={_id}
                          class="odd:bg-white even:bg-gray-100 hover:odd:bg-gray-100"
                        >
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                            <LazyLoadingImage
                              src={thumbnail?.url}
                              alt={thumbnail?.public_id}
                              className={
                                "h-10 w-10 object-cover object-center rounded-full border-2 border-cyan-500"
                              }
                              height={"40"}
                              width={"40"}
                            />
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            {title}
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            {price}
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            <div class="flex -space-x-4">
                              {gallery?.map((image) => (
                                <LazyLoadingImage
                                  src={image?.url}
                                  alt={image?.public_id}
                                  className={
                                    "h-10 w-10 object-cover object-center rounded-full border-2 border-cyan-500"
                                  }
                                  height={"40"}
                                  width={"40"}
                                />
                              ))}
                            </div>
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            N/A
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            N/A
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            N/A
                          </td>
                          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            {removingProduct ? (
                              <DashboardInlineLoading />
                            ) : (
                              <>
                                <Link
                                  class="text-green-500 hover:text-green-700"
                                  to={`/dashboard/update-product/${_id}`}
                                >
                                  Update
                                </Link>
                                <span
                                  class="text-red-500 hover:text-red-700 ml-4 cursor-pointer"
                                  onClick={() => removeProduct(_id)}
                                >
                                  Delete
                                </span>
                              </>
                            )}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ListProduct;
