import Product from "./Product";

const ProductGrid = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <div className='flex items-center place-items-center justify-evenly'>

    <div className="grid items-center gap-6 place-items-center justify-evenly sm:grid-cols-2 lg:grid-cols-2">
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
    </div>
  );
};

export default ProductGrid;
