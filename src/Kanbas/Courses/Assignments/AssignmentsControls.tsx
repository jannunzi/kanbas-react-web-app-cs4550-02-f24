import SearchBar from "./SearchBar";
import { HiOutlinePlus } from "react-icons/hi2";

export default function AssignmentsControls() {
    return (
        <div className="d-flex align-items-center mt-4">
            <div className="position-relative flex-grow-1 me-5">
                <SearchBar />
            </div>
            <button id="wd-group" className="btn btn-lg btn-secondary rounded-1 me-1 float-end">
                <HiOutlinePlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group</button>
            <button id="wd-Assignment" className="btn btn-lg btn-danger rounded-1 me-1 float-end">
                <HiOutlinePlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment</button>
        </div>

    )
}