import { showAlert } from "./alert";

export const CATEGORY_FILTER_LIST=[{id:0, category:"All Categories", value:""},{id:1, category:"Electronics", value:"Electronics"},{id:2, category:"Books", value:"Books"},{id:3, category:"Fashion", value:"Fashion"},{id:4, category:"Home", value:"Home"}]
export const RATING_FILTER_LIST=[{id:0, rating:"All Ratings", value:''},{id:1, rating:"10 stars", value:'&rating_gte=10'},{id:2, rating:"7 stars and above", value:'&rating_gte=7&rating_lte=9.9'},{id:3, rating:"5 stars and above", value:'&rating_gte=5&rating_lte=6.9'},{id:4, rating:"2.5 stars and above", value:'&rating_gte=2.5&rating_lte=4.9'},{id:5, rating:"1 stars and above", value:'&rating_gte=1&rating_lte=2.4'}]
export const PRICE_FILTER_LIST=[{id:0, rating:"All Price", value:''},{id:1, rating:"$501 and above", value:'&price_gte=501'},{id:2, rating:"$401 and above", value:'&price_gte=401&price_lte=500'},{id:3, rating:"$301 and above", value:'&price_gte=301&price_lte=400'},{id:4, rating:"$201 and above", value:'&price_gte=201&price_lte=300'},{id:5, rating:"$101 and above", value:'&price_gte=101&price_lte=200'},{id:6, rating:"<= $100", value:'&price_gte=1&price_lte=100'}]
export const BASE_URL='http://localhost:5000'
export const checkOnline = () => {
    if (!navigator.onLine) return showAlert(3, 'PLEASE CHECK INTERNET');
};