import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;

  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />
      <ul className="list-group rounded-0" id="wd-modules">
        {modules
          .filter((module) => module.course === cid)
          .map((module) => (
            <li className="wd-module list-group-item  p-0 mb-5 border-gray">
              {/* {JSON.stringify(module)} */}
              <div className="wd-title  p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {module.name}
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.flatMap((lesson) => (
                    <li className="wd-lesson list-group-item p-3 ps-1">
                      {/* {JSON.stringify(lesson)} */}
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
