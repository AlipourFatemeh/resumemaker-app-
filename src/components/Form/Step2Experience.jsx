
import React from 'react';
import Button from '../UI/Button';

const Step2Experience = ({ experiences, onAdd, onRemove, onChange, onNext, onBack }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 space-y-6">
      <h2 className="text-lg font-bold mb-4">سوابق شغلی</h2>
      {experiences.map((exp, idx) => (
        <div key={idx} className="mb-4 border-b pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="border rounded p-2 w-full"
              type="text"
              placeholder="عنوان شغلی"
              value={exp.title}
              onChange={e => onChange(idx, { ...exp, title: e.target.value })}
            />
            <input
              className="border rounded p-2 w-full"
              type="text"
              placeholder="نام شرکت"
              value={exp.company}
              onChange={e => onChange(idx, { ...exp, company: e.target.value })}
            />
            <input
              className="border rounded p-2 w-full"
              type="text"
              placeholder="موقعیت مکانی"
              value={exp.location}
              onChange={e => onChange(idx, { ...exp, location: e.target.value })}
            />
            <input
              className="border rounded p-2 w-full"
              type="text"
              placeholder="تاریخ شروع"
              value={exp.startDate}
              onChange={e => onChange(idx, { ...exp, startDate: e.target.value })}
            />
            <input
              className="border rounded p-2 w-full"
              type="text"
              placeholder="تاریخ پایان"
              value={exp.endDate}
              onChange={e => onChange(idx, { ...exp, endDate: e.target.value })}
            />
          </div>
          <div className="flex justify-end mt-2">
            <Button type="button" onClick={() => onRemove(idx)} className="text-red-500">حذف</Button>
          </div>
        </div>
      ))}
      <Button type="button" onClick={onAdd} className="bg-gray-100 text-blue-600 rounded px-4 py-2">افزودن سابقه جدید</Button>
      <div className="flex justify-between mt-6">
        <Button type="button" onClick={onBack} className="px-4 py-2 bg-gray-200 rounded">قبلی</Button>
        <Button type="button" onClick={onNext} className="px-4 py-2 bg-blue-600 text-white rounded">بعدی</Button>
      </div>
    </div>
  );
};

export default Step2Experience;
