import Header from "./Header";
import { useNavigate } from "react-router-dom";

export default function PrivateRoute(props) {

  let Cmp =props.Cmp
  
  return (
    <div>
      <Cmp />
      
    </div>  
  );
}
