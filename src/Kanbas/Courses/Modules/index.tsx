import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />
      <ul className="list-group rounded-0" id="wd-modules">
        <li className="wd-module list-group-item  p-0 mb-5 border-gray">
          <div className="wd-title  p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 1
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Lesson 1.1
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Lesson 1.2 <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Lesson 1.3 <LessonControlButtons />
            </li>
          </ul>
        </li>
        <li className="wd-module list-group-item mb-5  p-0">
          <div className="wd-title p-3 ps-2 bg-secondary">Week 2</div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">Lesson 2.1</li>
            <li className="wd-lesson list-group-item p-3 ps-1">Lesson 2.2</li>
            <li className="wd-lesson list-group-item p-3 ps-1">Lesson 2.3</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
