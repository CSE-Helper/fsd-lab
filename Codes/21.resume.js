// App.js
import React, { useState } from 'react';
import Form from './components/Form';
import Preview from './components/Preview';

function App() {
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    education: '',
    experience: '',
    skills: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="app">
      <h1>Resume Builder</h1>
      <Form resumeData={resumeData} handleInputChange={handleInputChange} />
      <Preview resumeData={resumeData} />
    </div>
  );
}

export default App;
// components/Form.js
import React from 'react';

const Form = ({ resumeData, handleInputChange }) => {
  return (
    <div className="form">
      <h2>Personal Information</h2>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={resumeData.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={resumeData.email}
        onChange={handleInputChange}
      />

      <h2>Education</h2>
      <textarea
        name="education"
        placeholder="Education Details"
        value={resumeData.education}
        onChange={handleInputChange}
      />

      <h2>Work Experience</h2>
      <textarea
        name="experience"
        placeholder="Work Experience"
        value={resumeData.experience}
        onChange={handleInputChange}
      />

      <h2>Skills</h2>
      <textarea
        name="skills"
        placeholder="Skills"
        value={resumeData.skills}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Form;
// components/Preview.js
import React from 'react';

const Preview = ({ resumeData }) => {
  // Phrases for the resume
  const phrases = [
    'Strong problem-solving skills',
    'Excellent written and verbal communication',
    'Detail-oriented with a focus on quality',
    'Proven ability to work in a team',
    'Managed complex projects and met deadlines'
  ];

  // Generate resume content with appropriate phrases
  const generateResumeContent = () => {
    const { name, email, education, experience, skills } = resumeData;
    const resumeContent = `
      Full Name: ${name}
      Email: ${email}

      Education:
      ${education}

      Work Experience:
      ${experience}

      Skills:
      ${skills}

      ${getRandomPhrase()}
    `;

    return resumeContent;
  };

  // Get a random phrase from the array
  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
  };

  return (
    <div className="preview">
      <h2>Preview</h2>
      <pre>{generateResumeContent()}</pre>
    </div>
  );
};

export default Preview;
