import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Syllabus from './Syllabus.jsx';
import Latestjob from './Latestjob.jsx';
import Certifications from './Certifications.jsx';
import Competitions from './Competitions.jsx';

function App() {
  return (
    <Router>
      <div>
        {/* Top Red Header */}
        <div className="header">
          <h1>PRIVATE RESULT</h1>
          <a href="#">PrivateResult.com</a>
          <div className="panel">Private job information</div>
        </div>

        {/* Dark Blue Navbar */}
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/latestjob">Latest Job</Link>
          <a href="https://roadmap.sh/"
            target="_blank"
            rel="noopener noreferrer">Roadmap</a>
          <Link to="/syllabus">Syllabus</Link>
          <Link to="/competitions">Competitions</Link>
          <Link to="/certifications">Certifications</Link>
          <a
            href="https://www.google.com/xhtml/search"
            className="whatsapp-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="src/assets/whatsapp.png"
              alt="WhatsApp"
              className="whatsapp-logo"
            />
            Join Our Whatsapp Channel
          </a>
        </div>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <div className="content-container">
                {/* Latest Updates */}
                <div>
                  <h2 className="section-title">Latest Updates</h2>
                  <div className="latest-updates">
                    <ul>
                      <li>
                        <a href="https://www.hcltech.com/jobs/senior-project-manager-2"
                          target="_blank"
                          rel="noopener noreferrer">HCL Tech - Senior Project Manager - Apply Now</a>
                      </li>
                      <li>
                        <a href="#">UPSC Civil Services Prelims Result 2025</a>
                      </li>
                      <li>
                        <a href="#">Railway Group D Admit Card 2025</a>
                      </li>
                      <li>
                        <a href="#">CTET July 2025 Registration Started</a>
                      </li>
                      <li>
                        <a href="#">IBPS PO 2025 Final Result Declared</a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Job Listings */}
                <div>
                  <h2 className="section-title">Job Listings</h2>
                  <table className="job-table">
                    <thead>
                      <tr>
                        <th>Post Name</th>
                        <th>Department</th>
                        <th>Last Date</th>
                        <th>Apply Link</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>TCS</td>
                        <td>Tata Consultancy Services</td>
                        <td>15 Aug 2025</td>
                        <td><a href="#">Apply Now</a></td>
                      </tr>
                      <tr>
                        <td>HCL Tech</td>
                        <td>Hindustan Computers Limited</td>
                        <td>10 Sep 2025</td>
                        <td><a href="#">Apply Now</a></td>
                      </tr>
                      <tr>
                        <td>JTG</td>
                        <td>Josh Technology Groups</td>
                        <td>5 Oct 2025</td>
                        <td><a href="#">Apply Now</a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Quick Links */}
                <div>
                  <h2 className="section-title">Quick Links</h2>
                  <div className="quick-links">
                    <Link to="/latestjob">Latestjob</Link>
                    <a href="#">Results</a>
                    <Link to="/syllabus">Syllabus</Link>
                    <a href="#">Job Interview Questions</a>
                  </div>
                </div>
              </div>
            }
          />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/latestjob" element={<Latestjob />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/competitions" element={<Competitions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
