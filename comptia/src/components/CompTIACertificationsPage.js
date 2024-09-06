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
      description: 'Entry-level IT certification.',
    },
    {
      id: 2,
      name: 'CompTIA CASP+',
      image: 'https://github.com/Skunkworks-Africa/Courses/blob/main/comptia/assets/casp-logo.png?raw=true',
      description: 'Advanced Security Practitioner certification.',
    },
    {
      id: 3,
      name: 'CompTIA Cloud Essentials+',
      image: 'https://github.com/Skunkworks-Africa/Courses/blob/main/comptia/assets/cloud-essentials-logo.png?raw=true',
      description: 'Basic cloud computing fundamentals.',
    },
    {
      id: 4,
      name: 'CompTIA Cloud+',
      image: 'https://github.com/Skunkworks-Africa/Courses/blob/main/comptia/assets/cloudplus-logo.png?raw=true',
      description: 'Cloud computing certification.',
    },
    {
      id: 5,
      name: 'CompTIA Data+',
      image: 'https://github.com/Skunkworks-Africa/Courses/blob/main/comptia/assets/dataplus_logo.png?raw=true',
      description: 'Data analysis certification.',
    },
    {
      id: 6,
      name: 'CompTIA Linux+',
      image: 'https://github.com/Skunkworks-Africa/Courses/blob/main/comptia/assets/linuxplus-logo.png?raw=true',
      description: 'Linux system administration certification.',
    },
    {
      id: 7,
      name: 'CompTIA Network+',
      image: 'https://github.com/Skunkworks-Africa/Courses/blob/main/comptia/assets/networkplus-logo.png?raw=true',
      description: 'Networking certification.',
    },
    {
      id: 8,
      name: 'CompTIA PenTest+',
      image: 'https://github.com/Skunkworks-Africa/Courses/blob/main/comptia/assets/pentestplusjpg-logo.png?raw=true',
      description: 'Penetration testing certification.',
    },
    {
      id: 9,
      name: 'CompTIA Security+',
      image: 'https://github.com/Skunkworks-Africa/Courses/blob/main/comptia/assets/securityplus-logo.png?raw=true',
      description: 'Cybersecurity certification.',
    },
    {
      id: 10,
      name: 'CompTIA Server+',
      image: 'https://github.com/Skunkworks-Africa/Courses/blob/main/comptia/assets/serverplus-logo.png?raw=true',
      description: 'Server management certification.',
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
            <li>Cryptography and PKI</li>
          </ul>
        </>
      )
    },
    // Add more certification details here if needed
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
      {/* Header Section */}
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Skunkworks Academy - CompTIA Certifications</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">Certifications</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Breadcrumbs */}
      <div className="breadcrumb bg-white p-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="https://courses.skunkworks.africa" className="text-gray-700 hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronDown className="w-6 h-6 text-gray-400" />
                <span className="ml-1 text-gray-500 md:ml-2">CompTIA Certifications</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Search Bar */}
      <div className="search-bar bg-gray-200 p-8">
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search Certifications"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Certifications Grid */}
      <main className="main-content p-8 bg-white">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertifications.map(cert => (
            <div key={cert.id} className="bg-gray-100 p-4 rounded-lg text-center transition-transform duration-300 hover:scale-105">
              <img src={cert.image} alt={cert.name} className="w-full max-w-[150px] md:max-w-[200px] h-auto mx-auto mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
              <p>{cert.description}</p>
            </div>
          ))}
        </section>

        {/* Accordion Section */}
        <section className="mt-8">
          <div className="shadow-md rounded-lg p-4 border border-gray-300">
            {accordionData.map((item) => (
              <div key={item.id} className="mb-2">
                <button
                  className="w-full text-left p-4 flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={expandedAccordion === item.id}
                >
                  <span className="text-lg font-semibold">{item.title}</span>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      expandedAccordion === item.id ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedAccordion === item.id && (
                  <div className="p-4 bg-white">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CompTIA Authorized Partner Section */}
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

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-8">
        <p>&copy; 2024 Skunkworks Academy. All rights reserved.</p>
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
