import { ClipLoader } from 'react-spinners'
type IProp={
  isLoading:boolean;
  size:number;
  className:string;
}
function Loader({isLoading, size,className}:IProp) {
  return (
    <ClipLoader
        color={"black"}
        loading={isLoading}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
        className={className}
    />
  )
}

export default Loader