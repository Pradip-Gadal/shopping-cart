
import { UseContext } from '../context/GlobleContext';
import FilterProductBar from './FilterProductBar';
import ProductDiscription from './ProductDiscription';


 
const ProductListing = () => {

  const { state: {products} } = UseContext();
  console.log(products)
  
  return (
    <section className='flex justify-around'>
      <FilterProductBar />
      <div className='grid grid-cols-3 gap-4 w-[80%]'>
        {products.map(product => 
          <ProductDiscription product={product} key={product.id}/>
        )}
      </div>
    </section>
  )
}

export default ProductListing;
