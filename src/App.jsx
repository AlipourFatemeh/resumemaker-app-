import React, { useState } from 'react';
import './styles/tailwind.css';

import Step2Experience from './components/Form/Step2Experience';
import Step3Education from './components/Form/Step3Education';

import Step4Skills from './components/Form/Step4Skills';
import Step5Summary from './components/Form/Step5Summary';



function App() {
  const [step, setStep] = useState(2); // 2: سوابق شغلی، 3: تحصیلی، 4: مهارت‌ها، 5: خلاصه

  // سوابق شغلی
  const [experiences, setExperiences] = useState([
    { title: '', company: '', location: '', startDate: '', endDate: '' }
  ]);
  // سوابق تحصیلی
  const [educations, setEducations] = useState([
    { degree: '', field: '', university: '', startDate: '', endDate: '' }
  ]);
  // مهارت‌ها
  const [skills, setSkills] = useState(['']);
  // خلاصه رزومه
  const [summary, setSummary] = useState('');

  // Handlers for experiences
  const handleExpAdd = () => {
    setExperiences([...experiences, { title: '', company: '', location: '', startDate: '', endDate: '' }]);
  };
  const handleExpRemove = idx => {
    setExperiences(experiences.filter((_, i) => i !== idx));
  };
  const handleExpChange = (idx, value) => {
    setExperiences(experiences.map((exp, i) => (i === idx ? value : exp)));
  };

  // Handlers for educations
  const handleEduAdd = () => {
    setEducations([...educations, { degree: '', field: '', university: '', startDate: '', endDate: '' }]);
  };
  const handleEduRemove = idx => {
    setEducations(educations.filter((_, i) => i !== idx));
  };
  const handleEduChange = (idx, value) => {
    setEducations(educations.map((edu, i) => (i === idx ? value : edu)));
  };

  // Handlers for skills
  const handleSkillAdd = () => {
    setSkills([...skills, '']);
  };
  const handleSkillRemove = idx => {
    setSkills(skills.filter((_, i) => i !== idx));
  };
  const handleSkillChange = (idx, value) => {
    setSkills(skills.map((skill, i) => (i === idx ? value : skill)));
  };

  // Navigation
  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {step === 2 && (
        <Step2Experience
          experiences={experiences}
          onAdd={handleExpAdd}
          onRemove={handleExpRemove}
          onChange={handleExpChange}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {step === 3 && (
        <Step3Education
          educations={educations}
          onAdd={handleEduAdd}
          onRemove={handleEduRemove}
          onChange={handleEduChange}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {step === 4 && (
        <Step4Skills
          skills={skills}
          onAdd={handleSkillAdd}
          onRemove={handleSkillRemove}
          onChange={handleSkillChange}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}
      {step === 5 && (
        <Step5Summary
          summary={summary}
          onChange={setSummary}
          onNext={() => alert('رزومه ثبت شد!')}
          onBack={handleBack}
        />
      )}
    </div>
  );
}

export default App;
