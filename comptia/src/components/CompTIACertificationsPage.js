import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const CompTIACertificationsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const certifications = [
    {
      id: 1,
      name: 'CompTIA A+',
      image: 'https://github.com/Skunkworks-Africa/Courses/blob/main/comptia/assets/a-logo-jpeg.png?raw=true',
      description: 'Entry-level IT certification.'
    },
    {
      id: 2,
      name: 'CompTIA CASP+',
      image: 'https://github.com/Skunkworks-Africa/Courses/blob/main/comptia/assets/casp-logo.png?raw=true',
      description: 'Advanced Security Practitioner certification.'
    },
    {
      id: 3,
      name: 'CompTIA Cloud Essentials+',
      image: 'https://github.com/Skunkworks-Africa/Courses/blob/main/comptia/assets/cloud-essentials-logo.png?raw=true',
      description: 'Basic cloud computing fundamentals.'
    },
    {
      id: 4,
      name: 'CompTIA Cloud+',
      image: 'https://github.com/Skunkworks-Africa/Courses/blob/main/comptia/assets/cloudplus-logo.png?raw=true',
      description: 'Cloud computing certification.'
    },
    {
      id: 5,
      name: 'CompTIA Data+',
      image: 'https://github.com/Skunkworks-Africa/Courses/blob/main/comptia/assets/dataplus_logo.png?raw=true',
      description: 'Data analysis certification.'
    },
    {
      id: 6,
      name: 'CompTIA Linux+',
      image: 'https://github.com/Skunkworks-Africa/Courses/blob/main/comptia/assets/linuxplus-logo.png?raw=true',
      description: 'Linux system administration certification.'
    },
    {
      id: 7,
      name: 'CompTIA Network+',
      image: 'https://github.com/Skunkworks-Africa/Courses/blob/main/comptia/assets/networkplus-logo.png?raw=true',
      description: 'Networking certification.'
    },
    {
      id: 8,
      name: 'CompTIA PenTest+',
      image: 'https://github.com/Skunkworks-Africa/Courses/blob/main/comptia/assets/pentestplusjpg-logo.png?raw=true',
      description: 'Penetration testing certification.'
    },
    {
      id: 9,
      name: 'CompTIA Security+',
      image: 'https://github.com/Skunkworks-Africa/Courses/blob/main/comptia/assets/securityplus-logo.png?raw=true',
      description: 'Cybersecurity certification.'
    },
    {
      id: 10,
      name: 'CompTIA Server+',
      image: 'https://github.com/Skunkworks-Africa/Courses/blob/main/comptia/assets/serverplus-logo.png?raw=true',
      description: 'Server management certification.'
    }
  ];

  const accordionData = [
    {
      id: 'aplus',
      title: 'CompTIA A+ Certification Details',
      content: (
        <>
          <p>CompTIA A+ is an entry-level certification that covers foundational IT skills, such as troubleshooting, configuring, and managing hardware and software. It includes two exams:</p>
          <ul>
            <li><b>Core 1 (220-1001):</b> Covers mobile devices, networking technology, hardware, virtualization, and cloud computing.</li>
            <li><b>Core 2 (220-1002):</b> Covers installing and configuring operating systems, expanded security, software troubleshooting, and operational procedures.</li>
          </ul>
        </>
      )
    },
    {
      id: 'security',
      title: 'CompTIA Security+ Certification Details',
      content: (
        <>
          <p>Security+ is a globally recognized certification focusing on the foundational principles of securing networks, devices, and data. Key areas include:</p>
          <ul>
            <li>Threats, attacks, and vulnerabilities</li>
            <li>Technologies and tools</li>
            <li>Architecture and design</li>
            <li>Identity and access management</li>
            <li>Risk management</li>
            <li>Cryptography and public key infrastructure (PKI)</li>
          </ul>
        </>
      )
    },
    // Add other certification details here
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCertifications = certifications.filter(cert =>
    cert.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleAccordion = (id) => {
    setExpandedAccordion(expandedAccordion === id ? null : id);
  };

  return (
    <div className="font-sans bg-gray-100">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center flex-wrap">
        <h1 className="text-2xl font-bold">Skunkworks Academy - CompTIA Certifications</h1>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">Certifications</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      <div className="breadcrumb bg-white p-4">
        <nav className="bx--breadcrumb" aria-label="Breadcrumb">
          <ol className="bx--breadcrumb-list flex items-center space-x-2">
            <li className="bx--breadcrumb-item">
              <a href="https://courses.skunkworks.africa" className="bx--link text-blue-600 hover:text-blue-800">Home</a>
            </li>
            <li className="bx--breadcrumb-item bx--breadcrumb-item--current">
              <span className="text-gray-500">CompTIA Certifications</span>
            </li>
          </ol>
        </nav>
      </div>

      <div className="search-bar bg-gray-200 p-8">
        <div className="bx--search bx--search--xl max-w-2xl mx-auto">
          <label htmlFor="search-input" className="bx--label sr-only">Search Certifications</label>
          <div className="relative">
            <input
              type="text"
              className="bx--search-input w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="search-input"
              placeholder="Type to search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      <main className="main-content p-8 bg-white">
        <section className="bx--grid bx--grid--full-width">
          <div className="bx--row" id="cert-tiles">
            {filteredCertifications.map(cert => (
              <div key={cert.id} className="bx--col-sm-4 bx--col-md-4 bx--col-lg-3 cert-tile bg-gray-100 p-4 rounded-lg text-center transition-transform duration-300 hover:scale-105 mb-6">
                <img src={cert.image} alt={`${cert.name} Certification`} className="w-full max-w-[150px] md:max-w-[200px] h-auto mx-auto mb-4 rounded" />
                <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                <p>{cert.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <div className="bx--accordion shadow-md rounded-lg p-4 border border-gray-300">
            {accordionData.map((item) => (
              <div key={item.id} className="bx--accordion__item mb-2">
                <button
                  className="bx--accordion__heading w-full text-left p-4 flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={expandedAccordion === item.id}
                >
                  <div className="bx--accordion__title text-lg font-semibold">{item.title}</div>
                  <ChevronDown
                    className={`bx--accordion__arrow transition-transform duration-300 ${
                      expandedAccordion === item.id ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedAccordion === item.id && (
                  <div className="bx--accordion__content p-4 bg-white">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="text-center p-8 bg-gray-100 rounded-lg shadow-md mt-8 max-w-3xl mx-auto">
          <img
            src="https://github.com/Skunkworks-Africa/Courses/blob/main/comptia/assets/comptia%20partner.png?raw=true"
            alt="CompTIA Authorized Partner"
            className="w-48 h-auto mb-4 mx-auto"
          />
          <h3 className="text-2xl font-bold text-blue-600 mb-2">Proud CompTIA Authorized Partner</h3>
          <p className="text-gray-700">As a CompTIA Authorized Partner, Skunkworks Academy offers certified courses for global IT standards.</p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white text-center p-8 border-t-4 border-blue-600">
        <p className="text-lg mb-2">&copy; 2024 Skunkworks Academy | All Rights Reserved</p>
        <p className="text-sm">
          Prices are for South African market only. Contact{' '}
          <a href="mailto:info@skunkworks.africa" className="text-blue-400 hover:underline">
            info@skunkworks.africa
          </a>{' '}
          for region-specific prices.
        </p>
      </footer>
    </div>
  );
};

export default CompTIACertificationsPage;
