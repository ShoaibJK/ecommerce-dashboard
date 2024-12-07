import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import Filters from './Filter';
import NoProductImg from "../assets/no_product.png"
import { IProduct } from '../utils/types';
import { BASE_URL, checkOnline } from '../utils/constants';
import { showAlert } from '../utils/alert';


const ProductList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [sort, setSort] = useState('');
  const [ratingFilter, setRatingFilter]= useState('');
  const [categoryFilter, setCategoryFilters] = useState('');
  const [priceRangeFilter, setPriceRangeFilter] = useState('');

  /*the version of json server used in the project does not provide direct access to total number of pages, 
  in order to get total number of pages it has to be fetch from header */
  const getTotalPage = (links:string)=>{
    try{
      const linksList = links?.split(", ")
    const lastLink = linksList[linksList.length - 1];

    // Extract the URL part between the angle brackets
    const url = lastLink?.match(/<(.+?)>/)[1];

    // Get the query parameters
    const params = new URL(url).searchParams;

    // Extract the `_page` value
    const _page = params.get('_page')||0;
    return +_page;
    }
    catch(error){
      console.log("error", error)
      return 1;
    }
    
  }
  const fetchProducts = async () => {
    try {
      checkOnline();
      const response = await axios.get(`${BASE_URL}/products?_page=${page}&_limit=20${sort||''}${ratingFilter||''}${categoryFilter}${priceRangeFilter}`);
      const _page = getTotalPage(response?.headers?.link)
        setProducts((prev:IProduct[]) => [...prev, ...response.data]);
        /*hasMore key checks wheter there are more data or not*/
        setHasMore(+_page !==page ?true:false);
      } catch (error:any) {
        setProducts([]);
        console.error('Failed to fetch products:', error);
        showAlert(2, error?.message)
      } finally {
        setLoading(false);
       }
  };
  useEffect(() => {
    if(page && hasMore){
      fetchProducts()
    }
  }, [page, hasMore, categoryFilter, sort, ratingFilter, priceRangeFilter]);

  const handleScroll = () => {
    if (
      (document.body.scrollHeight - 300 <
      window.scrollY + window.innerHeight ) && hasMore
    ) {
      setLoading(true);
    }
  };
  /*this method adds debouncing to API on scroll so that unnecessary API call can be avoided.*/
  function debounce(func: (this: Window, ev: Event) => any, delay:number) {
    let timeoutId:number;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }

  window.addEventListener("scroll", debounce(handleScroll, 500));

  useEffect(() => {
    if (loading == true) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [loading]);



  return (
    <div className="container">
      <Filters  setSort={setSort} setPage={setPage} setProducts={setProducts} setHasMore={setHasMore} setRatingFilter={setRatingFilter} setCategoryFilters={setCategoryFilters} setPriceRangeFilter={setPriceRangeFilter}/>
      <div className="grid">
        {products.map((product:IProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {loading && hasMore && <p className="loading">Loading...</p>}
      {!hasMore && products.length>0 && <p className="loading">No more products</p>}
      {products.length===0 && <img  src={NoProductImg} style={{display: "block", margin:"auto"}}/>}

    </div>
  );
};

export default ProductList;
