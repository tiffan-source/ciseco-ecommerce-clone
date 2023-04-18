import React from "react";
import LazyLoadingImage from "../LazyLoadingImage";
import { Link } from "react-router-dom";

const StoreCards = ({ stores }) => {
  const bottomBanner = [
    "https://chisnghiax.com/ciseco/static/media/explore6.d820796c6233d6fd068004c49905dda6.svg",
    "https://chisnghiax.com/ciseco/static/media/explore5.31cdd38104cf6ff9b87f13d23831c063.svg",
    "https://chisnghiax.com/ciseco/static/media/explore9.9cb58d1f5a9bf47be0be877012199caa.svg",
    "https://chisnghiax.com/ciseco/static/media/explore4.1eff03fe05cba351d4d177ed235e5721.svg",
    "https://chisnghiax.com/ciseco/static/media/explore8.266bb971ad46f757d26cd01f28164a6f.svg",
    "https://chisnghiax.com/ciseco/static/media/explore7.de4664b57a4a6234974977afbe804be3.svg",
  ];

  return (
    <>
      {stores?.map(({ _id, title, thumbnail, seller }) => (
        <div
          key={_id}
          class="nc-CardCategory4 relative w-full aspect-w-12 aspect-h-11 h-0 rounded-3xl overflow-hidden bg-white group hover:nc-shadow-lg transition-shadow"
          data-nc-id="CardCategory4"
        >
          <div>
            <div class="absolute bottom-0 right-0 max-w-[280px] opacity-80">
              <img
                src={bottomBanner[Math.floor(Math.random() * (5 - 0) + 0)]}
                alt={Math.floor(Math.random() * (5 - 0) + 0)}
              />
            </div>
            <div class="absolute inset-5 sm:inset-8 flex flex-col justify-between">
              <div class="flex justify-between items-center">
                <div
                  class="w-20 h-20 rounded-full overflow-hidden z-0 bg-orange-50 shadow"
                  data-nc-id="NcImage"
                >
                  <LazyLoadingImage
                    height={"80"}
                    width={"80"}
                    src={thumbnail?.url}
                    alt={thumbnail?.public_id}
                    className={"object-cover w-20 h-20"}
                  />
                </div>
                <span class="text-xs text-slate-700 font-medium">
                  {seller?.name}
                </span>
              </div>
              <div class="">
                <span class="block mb-2 text-sm text-slate-500">{_id}</span>
                <h2 class="text-2xl sm:text-3xl font-semibold">{title}</h2>
              </div>
              <Link
                class="flex items-center text-sm font-medium group-hover:text-primary-500 transition-colors"
                to={`/store/${title}/${_id}`}
              >
                <span>See Collection</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="w-4 h-4 ml-2.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          <Link
            to={`/store/${title}/${_id}`}
            className="absolute inset-0"
          ></Link>
        </div>
      ))}
    </>
  );
};

export default StoreCards;