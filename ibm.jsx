import React from 'react';
import ReactDOM from 'react-dom';
import { Header, HeaderName, HeaderNavigation, HeaderMenuItem, SideNav, SideNavItems, SideNavLink } from 'carbon-components-react';

const App = () => (
  <div>
    <Header aria-label="IBM Platform Name">
      <HeaderName href="#" prefix="IBM">
        Courses
      </HeaderName>
      <HeaderNavigation aria-label="IBM [Platform]">
        <HeaderMenuItem href="https://courses.skunkworks.africa/ibm/ai.html">AI</HeaderMenuItem>
        <HeaderMenuItem href="https://courses.skunkworks.africa/ibm/automation.html">Automation</HeaderMenuItem>
        <HeaderMenuItem href="https://courses.skunkworks.africa/ibm/cloud.html">Cloud</HeaderMenuItem>
        <HeaderMenuItem href="https://courses.skunkworks.africa/ibm/data-analytics.html">Data & Analytics</HeaderMenuItem>
        <HeaderMenuItem href="https://courses.skunkworks.africa/ibm/security.html">Security</HeaderMenuItem>
        <HeaderMenuItem href="https://courses.skunkworks.africa/ibm/systems.html">Systems</HeaderMenuItem>
        {/* Add more links here */}
      </HeaderNavigation>
    </Header>

    <SideNav
      isFixedNav
      expanded
      isChildOfHeader={false}
      aria-label="Side navigation"
      className="bx--side-nav--fixed">
      <SideNavItems>
        <SideNavLink href="https://courses.skunkworks.africa/ibm/badges-certifications.html">Learning Paths</SideNavLink>
        <SideNavLink href="https://courses.skunkworks.africa/ibm/course-materials">Course Materials</SideNavLink>
        <SideNavLink href="https://courses.skunkworks.africa/ibm/exam-study-guides.html">Certification Study Guides</SideNavLink>
        <SideNavLink href="https://courses.skunkworks.africa/ibm/learning-paths.html">Learning Paths</SideNavLink>
        <SideNavLink href="https://courses.skunkworks.africa/ibm/technical-workshops.html">Technical Workshops</SideNavLink>
        <SideNavLink href="https://courses.skunkworks.africa/ibm/virtual-labs.html">Virtual Labs</SideNavLink>
        {/* Add more links here */}
      </SideNavItems>
    </SideNav>

    <main id="main-content" style={{ padding: '20px', marginLeft: '250px' }}>
      <div className="cover-page">
        <img src="https://www.ibm.com/images/branding/ibm-logo.png" alt="IBM Logo" />
        <h1>Skunkworks EdTech IBM Course Catalog</h1>
      </div>

      <div className="search-container">
        <input type="text" id="search-input" className="search-input" placeholder="Search for courses..." />
      </div>

      <section className="section">
        <h2 className="section-title">Introduction</h2>
        <p>Welcome to the Skunkworks EdTech IBM Course Catalog. This repository is your one-stop destination for cutting-edge educational content across various domains of technology and business. Our courses are meticulously crafted to provide you with the knowledge and skills needed to excel in today's fast-paced tech environment.</p>
      </section>

      <section className="section">
        <h2 className="section-title">Available Courses</h2>
        <p>Explore our wide range of IBM courses:</p>
        <ul>
          <li><a href="https://courses.skunkworks.africa/IBM/DB2/index.html">DB2</a></li>
          {/* Add more courses here */}
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">Contact Us</h2>
        <p>If you have any questions or need further information, please feel free to <a href="mailto:support@skunkworks.africa">contact us</a>.</p>
      </section>
    </main>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
