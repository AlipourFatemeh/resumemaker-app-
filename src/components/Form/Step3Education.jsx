import React from 'react';
import Button from '../UI/Button';

const Step3Education = ({ educations, onAdd, onRemove, onChange, onNext, onBack }) => {
  // Check if at least one education is filled
  const isNextDisabled = educations.length === 0 || educations.some(edu => !edu.degree || !edu.field || !edu.university);
  return (
    <div className="bg-white rounded-xl shadow p-4 space-y-6">
      <h2 className="text-lg font-bold mb-4">سوابق تحصیلی</h2>
      {educations.length === 0 && (
        <div className="text-gray-500 mb-4">هیچ مدرکی وارد نشده است.</div>
      )}
      {educations.map((edu, idx) => (
        <div key={idx} className="mb-4 border-b pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="border rounded p-2 w-full"
              type="text"
              placeholder="مقطع تحصیلی"
              value={edu.degree}
              onChange={e => onChange(idx, { ...edu, degree: e.target.value })}
            />
            <input
              className="border rounded p-2 w-full"
              type="text"
              placeholder="رشته تحصیلی"
              value={edu.field}
              onChange={e => onChange(idx, { ...edu, field: e.target.value })}
            />
            <input
              className="border rounded p-2 w-full"
              type="text"
              placeholder="نام دانشگاه/موسسه"
              value={edu.university}
              onChange={e => onChange(idx, { ...edu, university: e.target.value })}
            />
            <input
              className="border rounded p-2 w-full"
              type="text"
              placeholder="تاریخ شروع"
              value={edu.startDate}
              onChange={e => onChange(idx, { ...edu, startDate: e.target.value })}
            />
            <input
              className="border rounded p-2 w-full"
              type="text"
              placeholder="تاریخ پایان"
              value={edu.endDate}
              onChange={e => onChange(idx, { ...edu, endDate: e.target.value })}
            />
          </div>
          <div className="flex justify-end mt-2">
            <Button type="button" onClick={() => onRemove(idx)} className="text-red-500">حذف</Button>
          </div>
        </div>
      ))}
      <Button type="button" onClick={onAdd} className="bg-gray-100 text-blue-600 rounded px-4 py-2">افزودن مدرک جدید</Button>
      <div className="flex justify-between mt-6">
        <Button type="button" onClick={onBack} className="px-4 py-2 bg-gray-200 rounded">قبلی</Button>
        <Button type="button" onClick={onNext} className="px-4 py-2 bg-blue-600 text-white rounded" disabled={isNextDisabled}>بعدی</Button>
      </div>
    </div>
  );
};

export default Step3Education;
