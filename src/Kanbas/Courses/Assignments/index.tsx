import AssignmentsControls from "./AssignmentsControls";
import { IoMdArrowDropdown, IoMdMore } from "react-icons/io";
import { BsGripVertical } from "react-icons/bs";
import { PiNotebookLight } from "react-icons/pi";
import { PiPlus } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <AssignmentsControls />
            <br />
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        <IoMdArrowDropdown className="me-1 fs-3" />
                        ASSIGNMENTS
                        <span className="d-flex align-items-center float-end">
                            <button className="rounded-pill px-3 border-1 float-end fs-25">40% of Total</button>
                            <PiPlus className="float-end mx-2 fs-4" />
                            <IoMdMore className="float-end mx-2 fs-3" />
                        </span>
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item d-flex align-items-center p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <PiNotebookLight className="me-4 fs-2 text-success" />
                            <div className="d-flex flex-column">
                                <p className="fs-4 mb-0">A1</p>
                                <p className="fs-6 mb-1">
                                    <span className="text-danger">Multiple Modules </span>
                                    | <strong>Not available until</strong> May 6 at 12:00am |
                                </p>
                                <p className="fs-6 mb-0">
                                    <strong>Due</strong> May 13 at 11:59pm | 100 pts
                                </p>
                            </div>
                            <span className="ms-auto">
                            <FaCheckCircle className="fs-3 text-success" />
                            <IoMdMore className="ms-5 fs-2"/>
                            </span>
                        </li>
                        <li className="wd-lesson list-group-item d-flex align-items-center p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <PiNotebookLight className="me-4 fs-2 text-success" />
                            <div className="d-flex flex-column">
                                <p className="fs-4 mb-0">A2</p>
                                <p className="fs-6 mb-1">
                                    <span className="text-danger">Multiple Modules </span>
                                    | <strong>Not available until</strong> May 13 at 12:00am |
                                </p>
                                <p className="fs-6 mb-0">
                                    <strong>Due</strong> May 20 at 11:59pm | 100 pts
                                </p>
                            </div>
                            <span className="ms-auto">
                            <FaCheckCircle className="fs-3 text-success" />
                            <IoMdMore className="ms-5 fs-2"/>
                            </span>
                        </li>
                        <li className="wd-lesson list-group-item d-flex align-items-center p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <PiNotebookLight className="me-4 fs-2 text-success" />
                            <div className="d-flex flex-column">
                                <p className="fs-4 mb-0">A3</p>
                                <p className="fs-6 mb-1">
                                    <span className="text-danger">Multiple Modules </span>
                                    | <strong>Not available until</strong> May 20 at 12:00am |
                                </p>
                                <p className="fs-6 mb-0">
                                    <strong>Due</strong> May 27 at 11:59pm | 100 pts
                                </p>
                            </div>
                            <span className="ms-auto">
                            <FaCheckCircle className="fs-3 text-success" />
                            <IoMdMore className="ms-5 fs-2"/>
                            </span>
                        </li>
                    </ul>
                </li>
            </ul> </div>
    )
}
