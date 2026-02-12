import React from 'react';
import './Latestjob.css'; // Import the CSS

const Latestjob = () => {
  return (
    <div className="latestjob-container">
      <h1>🧭 Latest Private Sector Jobs</h1>

      {/* Job 1 */}
      <section className="job-card">
        <h2>1. Senior Technical Delivery Manager – Belzabar Software Design India</h2>
        <ul>
          <li><strong>Location:</strong> Kanpur (Onsite)</li>
          <li><strong>Role:</strong> Lead cross-functional tech projects, manage client delivery, and drive automation initiatives.</li>
          <li><strong>Skills:</strong> Agile/Scrum, stakeholder management, project planning, AI trends</li>
          <li><strong>Bonus:</strong> PMP or CSM certification preferred</li>
        </ul>
      </section>

      {/* Job 2 */}
      <section className="job-card">
        <h2>2. SQL or Python Developer – HRM Counsel Private Limited</h2>
        <ul>
          <li><strong>Location:</strong> Kanpur (Onsite)</li>
          <li><strong>Role:</strong> Build scalable backend systems, integrate user-facing elements, and optimize databases.</li>
          <li><strong>Skills:</strong> Python, Django/Flask, SQL, server-side logic, debugging</li>
        </ul>
      </section>

      {/* Job 3 */}
      <section className="job-card">
        <h2>3. Technical Product Manager – Infinite Possibilities</h2>
        <ul>
          <li><strong>Location:</strong> Remote (based in Kanpur)</li>
          <li><strong>Role:</strong> Develop AI products for Private Equity markets, translate financial workflows into tech solutions.</li>
          <li><strong>Skills:</strong> Financial modeling, Python, product strategy, AI/ML familiarity</li>
        </ul>
      </section>

      {/* Job 4 */}
      <section className="job-card">
        <h2>4. Finance & Banking Expert – KPMG India</h2>
        <ul>
          <li><strong>Location:</strong> Kanpur (Onsite)</li>
          <li><strong>Role:</strong> Advise on financial policy and infrastructure development in the public-private sector.</li>
          <li><strong>Experience:</strong> 6–8 years in finance, banking, or government advisory</li>
        </ul>
      </section>

      {/* Job 5 */}
      <section className="job-card">
        <h2>5. Project Finance Role – KPMG India</h2>
        <ul>
          <li><strong>Location:</strong> Kanpur (Onsite)</li>
          <li><strong>Role:</strong> Draft and implement financial policies, conduct feasibility studies, and liaise with government bodies.</li>
          <li><strong>Experience:</strong> 7+ years in public finance or policy</li>
        </ul>
      </section>

      {/* Resources */}
      <section>
        <h2>🔗 Explore More Job Portals</h2>
        <ul>
          <li><a href="https://pvtjob.in/" target="_blank" rel="noopener noreferrer">Pvtjob.in – Campus placements & ITI jobs</a></li>
          <li><a href="https://www.jobvision.in/latest-private-jobs/" target="_blank" rel="noopener noreferrer">Jobvision.in – MNC and fresher jobs</a></li>
          <li><a href="https://in.jooble.org/jobs-private-sector" target="_blank" rel="noopener noreferrer">Jooble – Private sector jobs across India</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Latestjob;
