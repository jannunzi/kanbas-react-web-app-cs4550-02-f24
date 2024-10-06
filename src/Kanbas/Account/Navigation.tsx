import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link to={`Signin`}  
      className="list-group-item active border border-0">Signin  </Link> <br/>
      <Link to={`Signup`}  
      className="list-group-item text-danger border border-0"> Signup  </Link> <br/>
      <Link to={`Profile`}
      className="list-group-item text-danger border border-0"> Profile </Link> <br/>
    </div>

);}
