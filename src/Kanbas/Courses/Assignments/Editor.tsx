import React from "react";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label> <br />
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br /> <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr> <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option>ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr> <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade As</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option>Percentage</option>
                        </select>
                    </td>
                </tr> <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option>Online</option>
                        </select>
                        <td valign="top"><br />
                            <label>Online Entry Options</label><br />
                            <input type="checkbox" id="wd-text-entry"></input>
                            <label>Text Entry</label><br />
                            <input type="checkbox" id="wd-website-url"></input>
                            <label>Website URL</label><br />
                            <input type="checkbox" id="wd-media-recordings"></input>
                            <label>Media Recordings</label><br />
                            <input type="checkbox" id="wd-student-annotation"></input>
                            <label>Student Annotation</label><br />
                            <input type="checkbox" id="wd-file-upload"></input>
                            <label>File Uploads</label>
                        </td>
                    </td>
                </tr> <br />
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assign-to">Assign</label>
                    </td>
                    <td>
                        <label>Assign to</label><br />
                        <input id="wd-assign-to" value="Everyone">
                        </input>
                    </td>
                </tr> <br />
                <tr>
                    <td></td>
                    <td>
                        <label>Date</label><br />
                        <input id="wd-due-date" type="date" value="2024-05-13">
                        </input>
                    </td>
                </tr> <br />
                <tr>
                    <td></td>
                    <td>
                        <label>Available From</label><br />
                        <input id="wd-available-from" type="date" value="2024-05-06">
                        </input>
                    </td>
                    <td>
                        <label>Until</label><br />
                        <input id="wd-until" type="date" value="2024-05-20">
                        </input>
                    </td>
                </tr> <br />
            </table> <hr />
            <button>Cancel</button><button>Save</button>

        </div>
    );
}
