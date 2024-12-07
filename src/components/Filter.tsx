import { CATEGORY_FILTER_LIST, PRICE_FILTER_LIST, RATING_FILTER_LIST } from "../utils/constants";
import { IProduct } from "../utils/types";
type IProp={
  setSort:React.Dispatch<React.SetStateAction<string>>,
  setPage:React.Dispatch<React.SetStateAction<number>>,
  setProducts:React.Dispatch<React.SetStateAction<IProduct[]>>,
  setHasMore: React.Dispatch<React.SetStateAction<boolean>>,
  setRatingFilter:React.Dispatch<React.SetStateAction<string>>,
  setCategoryFilters: React.Dispatch<React.SetStateAction<string>>,
  setPriceRangeFilter: React.Dispatch<React.SetStateAction<string>>,
}

const Filters = ({ setSort, setPage,setProducts, setHasMore, setRatingFilter,setCategoryFilters,setPriceRangeFilter}:IProp) => {
    const handleCategoryChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
      setProducts([])
      setHasMore(true)
      if(e.target.value)setCategoryFilters(`&category=${e.target.value}`)
      else setCategoryFilters(``)
      setPage(1)
    };
  
    const handleSortChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
      setProducts([])
      setHasMore(true)
      setSort(e.target.value);
      setPage(1)
    };
    const handleRatingChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
      setProducts([])
      setHasMore(true)
      setRatingFilter(e.target.value);
      setPage(1)
    }
    const handlePriceRangeChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
      setProducts([])
      setHasMore(true)
      setPriceRangeFilter(e.target.value);
      setPage(1)
    }
  
    return (
      <div className="filters">
        <select onChange={handleCategoryChange} className="filter-select">
          {CATEGORY_FILTER_LIST.map(({id, category, value}:{id:number, category:string, value:string})=>(<option key={id} value={value}>{category}</option>))}
        </select>
        <select onChange={handleRatingChange} className="filter-select">
          {RATING_FILTER_LIST.map(({id, rating, value}:{id:number, rating:string, value:string})=>(<option key={id} value={value}>{rating}</option>))}
        </select>
        <select onChange={handlePriceRangeChange} className="filter-select">
          {PRICE_FILTER_LIST.map(({id, rating, value}:{id:number, rating:string, value:string})=>(<option key={id} value={value}>{rating}</option>))}
        </select>
        <select onChange={handleSortChange} className="filter-select">
          <option value="">Sort By</option>
          <option value="&_sort=price&_order=asc">Price: Low to High</option>
          <option value="&_sort=price&_order=desc">Price: High to Low</option>
        </select>
      </div>
    );
  };
  
  export default Filters;