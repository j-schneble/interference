import { useState } from "react";
import Image from "next/image";

import useWishlistDispatch from "../hooks/useWishlistDispatch";
import useWishlistState from "../hooks/useWishlistState";

import VariantPicker from "./VariantPicker";

const Product = (product) => {
  const { addItem } = useWishlistDispatch();
  const { isSaved } = useWishlistState();

  const { id, name, variants } = product;
  const [firstVariant] = variants;
  const oneStyle = variants.length === 1;

  const [activeVariantExternalId, setActiveVariantExternalId] = useState(
    firstVariant.external_id
  );

  const activeVariant = variants.find(
    (v) => v.external_id === activeVariantExternalId
  );

  const activeVariantFile = activeVariant.files.find(
    ({ type }) => type === "preview"
  );

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: activeVariant.currency,
  }).format(activeVariant.retail_price);

  const addToWishlist = () => addItem(product);

  const onWishlist = isSaved(id);

  return (
    <article className="relative flex flex-col rounded ">
      <button
        aria-label="Add to wishlist"
        className="absolute top-0 right-0 mt-3 mr-3 text-gray-500 transition appearance-none focus:text-gray-500 hover:text-red-500 focus:outline-none"
        onClick={addToWishlist}
      >
        {onWishlist ? (
       
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 text-red-500 fill-current "
          >
            <path fill="none" d="M0 0H24V24H0z" />
            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z" />
          </svg>
     
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-current"
          >
            <path fill="none" d="M0 0H24V24H0z" />
            <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
          </svg>
        )}
      </button>
      <div className="flex items-center justify-center flex-1 w-full p-6 rounded-md bg-zinc-100 sm:flex-shrink-0">
        {activeVariantFile && (
          <Image
            src={activeVariantFile.preview_url}
            width={250}
            height={250}
            alt={`${activeVariant.name} ${name}`}
            title={`${activeVariant.name} ${name}`}
          />
        )}
      </div>
      <div className="flex p-4 pt-1">
        <div className="text-left">
      
          <p className="mb-1 font-semibold text-zinc-800">{name}</p>
          <p className="text-sm font-medium text-green-700">{formattedPrice}</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-3 text-black sm:flex-row">
        <VariantPicker
          value={activeVariantExternalId}
          
          onChange={({ target: { value } }) =>
            setActiveVariantExternalId(value)
          }
          variants={variants}
          disabled={oneStyle}
        
        />
        <button
          className="flex-shrink-0 w-full px-4 py-2 text-sm font-medium transition bg-black border rounded shadow-sm snipcart-add-item md:w-auto border-black/20 hover:border-transparent text-zinc-50 focus:text-white hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:outline-none"
          data-item-id={activeVariantExternalId}
          data-item-price={activeVariant.retail_price}
          data-item-url={`/api/products/${activeVariantExternalId}`}
          data-item-description={activeVariant.name}
          data-item-image={activeVariantFile.preview_url}
          data-item-name={name}
        >
          Add to Bag
        </button>
      </div>
    </article>
  );
};

export default Product;
