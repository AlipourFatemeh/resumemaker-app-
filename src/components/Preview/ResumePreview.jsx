import React from 'react';

const ResumePreview = ({ personalInfo, experiences, educations, skills, summary }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow space-y-6 text-right">
      <section>
        <h2 className="text-2xl font-bold mb-2">{personalInfo.fullName || 'نام کامل'}</h2>
        <p>{personalInfo.email || 'ایمیل'}</p>
        <p>{personalInfo.phone || 'شماره تماس'}</p>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">سوابق شغلی</h3>
        {experiences.length === 0 ? (
          <p className="text-gray-500">هیچ سابقه شغلی وارد نشده است.</p>
        ) : (
          experiences.map((exp, idx) => (
            <div key={idx} className="mb-3 border-b pb-2">
              <p className="font-semibold">{exp.title || 'عنوان شغلی'}</p>
              <p>{exp.company || 'نام شرکت'} - {exp.location || 'موقعیت'}</p>
              <p>{exp.startDate || 'تاریخ شروع'} تا {exp.endDate || 'تاریخ پایان'}</p>
            </div>
          ))
        )}
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">سوابق تحصیلی</h3>
        {educations.length === 0 ? (
          <p className="text-gray-500">هیچ مدرک تحصیلی وارد نشده است.</p>
        ) : (
          educations.map((edu, idx) => (
            <div key={idx} className="mb-3 border-b pb-2">
              <p className="font-semibold">{edu.degree || 'مقطع تحصیلی'}</p>
              <p>{edu.field || 'رشته تحصیلی'}</p>
              <p>{edu.university || 'دانشگاه/موسسه'}</p>
              <p>{edu.startDate || 'تاریخ شروع'} تا {edu.endDate || 'تاریخ پایان'}</p>
            </div>
          ))
        )}
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">مهارت‌ها</h3>
        {skills.length === 0 ? (
          <p className="text-gray-500">هیچ مهارتی وارد نشده است.</p>
        ) : (
          <ul className="list-disc list-inside">
            {skills.map((skill, idx) => (
              <li key={idx}>{skill || 'مهارت'}</li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">درباره من</h3>
        <p>{summary || 'خلاصه‌ای از خودتان و اهداف شغلی'}</p>
      </section>
    </div>
  );
};

export default ResumePreview;


