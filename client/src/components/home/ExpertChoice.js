import React from "react";
import * as Carousel from "../Carousel";
import DashboardLoading from "../loading/DashboardLoading";
import GrayText from "./GrayText";
import { Link } from "react-router-dom";
import LazyLoadingImage from "../LazyLoadingImage";

const ExpertChoice = ({ products, loading, type }) => {
  return (
    <>
      {loading ? (
        <DashboardLoading />
      ) : products?.length ? (
        <div className="flex flex-col gap-y-8 !relative">
          <div className="lg:mb-8 mb-6">
            <h2 class=" text-3xl md:text-4xl font-semibold">
              Chosen by<span class="">. </span>
              <GrayText>Our Experts</GrayText>
            </h2>
          </div>
          <div>
            <Carousel.Component
              options={{
                type: type, // carousel or slide
                perView: 3,
                gap: 30,
                breakpoints: {
                  576: {
                    perView: 1,
                  },
                  768: {
                    perView: 2,
                  },
                  820: {
                    perView: 2,
                  },
                  1024: {
                    perView: 3,
                  },
                },
              }}
            >
              {products?.map(
                ({
                  _id,
                  title,
                  thumbnail,
                  gallery,
                  subcategory,
                  price,
                  review,
                }) => (
                  <Carousel.Slide key={_id}>
                    <div class="CollectionCard2 group relative undefined">
                      <div class="relative flex flex-col">
                        <div
                          class="nc-NcImage aspect-w-8 aspect-h-5 bg-neutral-100 rounded-2xl overflow-hidden"
                          data-nc-id="NcImage"
                        >
                          <LazyLoadingImage
                            height={"253"}
                            width={"405"}
                            src={thumbnail.url}
                            alt={thumbnail.public_id}
                            className="object-contain max-w-full w-[405px] h-[253px] rounded-2xl"
                          />
                        </div>
                        <div class="grid grid-cols-3 gap-2.5 mt-2.5">
                          {gallery?.slice(0, 3)?.map((image) => (
                            <div
                              key={image._id}
                              class="nc-NcImage w-full h-24 sm:h-28"
                              data-nc-id="NcImage"
                            >
                              <LazyLoadingImage
                                height={"112"}
                                width={"128"}
                                src={image.url}
                                alt={image.public_id}
                                className="object-cover max-w-full w-[128px] h-[112px] rounded-2xl"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div class="relative mt-5 flex justify-between">
                        <div class="flex-1">
                          <h2 class="font-semibold text-lg sm:text-xl line-clamp-1 text-black">
                            {title}
                          </h2>
                          <div class="mt-3 flex items-center text-slate-500 dark:text-slate-400">
                            <span class="text-sm">
                              <span class="line-clamp-1">
                                {subcategory?.title}
                              </span>
                            </span>
                            <span class="h-5 mx-1 sm:mx-2 border-l border-slate-200 dark:border-slate-700"></span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                              class="w-4 h-4 text-orange-400"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            <span class="text-sm ml-1">
                              <span class="line-clamp-1">
                                N/A (${review?.length} reviews)
                              </span>
                            </span>
                          </div>
                        </div>
                        <div class="mt-0.5 sm:mt-1 ml-4">
                          <div class="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                            <span class="text-green-500 !leading-none">
                              ৳{price}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Link
                        class="absolute inset-0"
                        to={`/${title
                          .toLowerCase()
                          .replace(/\s/g, "-")}/${_id}`}
                      ></Link>
                    </div>
                  </Carousel.Slide>
                )
              )}
              <Carousel.Slide>
                <div class="relative rounded-2xl overflow-hidden h-[410px]">
                  <div class="h-[410px] bg-black/5"></div>
                  <div class="absolute inset-y-6 inset-x-10  flex flex-col items-center justify-center">
                    <Link
                      to="/products/all"
                      class="flex items-center justify-center relative"
                    >
                      <span class="text-xl font-semibold text-black">
                        More items
                      </span>
                      <svg
                        class="absolute left-full w-5 h-5 ml-2 rotate-45 group-hover:scale-110 transition-transform text-black"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.0701 9.57L12.0001 3.5L5.93005 9.57"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M12 20.4999V3.66992"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </Link>
                    <span class="text-sm mt-1 text-black">Show me more</span>
                  </div>
                </div>
              </Carousel.Slide>
            </Carousel.Component>
          </div>
        </div>
      ) : (
        <div
          class="flex p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 dark:border-yellow-800"
          role="alert"
        >
          <svg
            aria-hidden="true"
            class="flex-shrink-0 inline w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Warning</span>
          <div>
            <span class="font-medium">Warning alert!</span> No product added
            yet!
          </div>
        </div>
      )}
    </>
  );
};

export default ExpertChoice;
