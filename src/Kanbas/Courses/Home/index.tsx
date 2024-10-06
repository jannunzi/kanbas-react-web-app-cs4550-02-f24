import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  return (
    <div className="d-flex gap-4 mt-5" id="wd-home">
      <div className="flex-fill">
        <Modules />
      </div>
      <div className="d-none d-md-block">
        <CourseStatus />
      </div>
    </div>


  );
}
