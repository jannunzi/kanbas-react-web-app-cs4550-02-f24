import { Link } from "react-router-dom";
export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation">
      <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">Northeastern</a><br/>
      <Link to="Account" id="wd-account-link">Account</Link><br/>
      <Link to="Dashboard" id="wd-dashboard-link">Dashboard</Link><br/>
      <Link to="Dashboard" id="wd-course-link">Courses</Link><br/>
      <Link to="Calendar" id="wd-calendar-link">Calendar</Link><br/>
      <Link to="Inbox" id="wd-inbox-link">Inbox</Link><br/>
      <Link to="Labs" id="wd-labs-link">Labs</Link><br/>
    </div>
);}
