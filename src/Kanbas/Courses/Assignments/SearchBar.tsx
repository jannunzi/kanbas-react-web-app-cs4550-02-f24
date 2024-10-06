import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
    return (
      <div className="position-relative">
        <form className="d-flex ">
          <input
            className="form-control"
            type="search"
            placeholder="Search..."
            style={{ paddingLeft: "40px", fontSize:"20px", height:"50px"}} 
          />
          <CiSearch
            className="position-absolute text-secondary"
            style={{left: "10px", fontSize: "30px", top: "50%", transform: "translateY(-50%)"}}
          />
        </form>
      </div>
    );
  }