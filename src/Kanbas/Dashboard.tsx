import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
        <div className="wd-dashboard-course col" style={{ width: "300px"}}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Full Stack Software Developer
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "300px"}}>
          <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/2500/Home">
            <img src="/images/reactjs.jpg" width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS2500 
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Fundamentals of Computer Science 1
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
          </div>
        </div>
        <div className="wd-dashboard-course col" style={{ width: "300px" }} >
        <div className="card rounded-3 overflow-hidden"> 
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/2510/Home">
            <img src="/images/reactjs.jpg" width="100%" height={160}/>
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS2510 
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Fundamentals of Computer Science 2
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
        </div>
                <div className="wd-dashboard-course col" style={{width: "300px"}}>
                <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/3000/Home">
            <img src="/images/reactjs.jpg" width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS3000
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Algorithms and Data
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
        </div>
        <div className="wd-dashboard-course col" style={{width: "300px"}}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/3500/Home">
            <img src="/images/reactjs.jpg" width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS3500 
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Object Oriented Design
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
        </div>
        <div className="wd-dashboard-course col" style={{width: "300px"}}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/4550/Home">
            <img src="/images/reactjs.jpg" width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS4550 
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Web Development
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
        </div> 
        <div className="wd-dashboard-course col" style={{width: "300px"}}>
        <div className="card rounded-3 overflow-hidden">
          <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1800/Home">
            <img src="/images/reactjs.jpg" width="100%" height={160} />
            <div className="card-body">
              <h5 className="wd-dashboard-course-title card-title">
                 CS1800
              </h5>
              <p className="wd-dashboard-course-title card-text">
                Discrete Structures
              </p>
              <button className="btn btn-primary"> Go </button>
            </div>
          </Link>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}
