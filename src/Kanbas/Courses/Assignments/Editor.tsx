import { FaChevronDown } from "react-icons/fa";
import AssignTo from "./AssignToEditor";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="mt-4">
            <label htmlFor="wd-name" className="form-label">Assignment Name</label> <br />
            <input id="wd-name" className="form-control mb-10" /><br />
            <div className="border px-3 rounded-3">
                <br />
                <p>The assignment is <span className="text-danger">available online</span></p>
                <p>Submit a link to the landing page of your Web application running on Netlify.</p>
                <p>The landing page should include the following:</p>
                <ul>
                    <li>Your full name and section</li>
                    <li>Links to each of the lab assignments</li>
                    <li>Link to the Kanbas application</li>
                    <li>Link to all relevant source code repositories</li>
                </ul>
                <p>The Kanbas application should include a link to navigate back to the landing page.</p>
            </div><br/>
            <div className="mb-3 row"> 
        <label htmlFor="points" className="col-sm-2 col-form-label text-end">Points</label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="points" placeholder="100" />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="assignmentGroup" className="col-sm-2 col-form-label text-end">Assignment Group</label>
        <div className="col-sm-10">
          <select className="form-select px-3" id="assignmentGroup">
            <option value="assignments">ASSIGNMENTS</option>
          </select>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="displayGrade" className="col-sm-2 col-form-label text-end">Display Grade as</label>
        <div className="col-sm-10">
          <select className="form-select" id="displayGrade">
            <option value="percentage">Percentage</option>
          </select>
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label text-end">Submission Type</label>
        <div className="col-sm-10">
            <div className="border px-3 rounded-3">
          <select className="form-select mt-3 mb-3" id="wd-submission-type">
            <option value="online">Online</option>
          </select>
          <div className="mb-3">
        <h6><strong>Online Entry Options</strong></h6>
        <div className="form-check">
          <input id="wd-text-entry" className="form-check-input" type="checkbox"/>
          <label className="form-check-label">
            Text Entry
          </label>
        </div>
        <div className="form-check">
          <input id="wd-website-url" className="form-check-input" type="checkbox"/>
          <label className="form-check-label">
            Website URL
          </label>
        </div>
        <div className="form-check">
          <input id="wd-media-recordings" className="form-check-input" type="checkbox"/>
          <label className="form-check-label">
            Media Recordings
          </label>
        </div>
        <div className="form-check">
          <input id="wd-file-uploads" className="form-check-input" type="checkbox"/>
          <label className="form-check-label">
            File Uploads
          </label>
        </div>
        </div>
        </div>
        </div>
        </div>
        <AssignTo />
        <div className="text-end mt-5">
        <button type="button" className="btn btn-secondary me-2">Cancel</button>
        <button type="submit" className="btn btn-danger">Save</button>
      </div>
    </div>
    );
}
