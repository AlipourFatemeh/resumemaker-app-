import React from 'react';
import Button from '../UI/Button';

const Step4Skills = ({ skills, onAdd, onRemove, onChange, onNext, onBack }) => {
  return (
    <div className="bg-white rounded-xl shadow p-4 space-y-6">
      <h2 className="text-lg font-bold mb-4">مهارت‌ها</h2>
      {skills.map((skill, idx) => (
        <div key={idx} className="mb-4 flex items-center gap-4">
          <input
            className="border rounded p-2 w-full"
            type="text"
            placeholder="عنوان مهارت"
            value={skill}
            onChange={e => onChange(idx, e.target.value)}
          />
          <Button type="button" onClick={() => onRemove(idx)} className="text-red-500">حذف</Button>
        </div>
      ))}
      <Button type="button" onClick={onAdd} className="bg-gray-100 text-blue-600 rounded px-4 py-2">افزودن مهارت جدید</Button>
      <div className="flex justify-between mt-6">
        <Button type="button" onClick={onBack} className="px-4 py-2 bg-gray-200 rounded">قبلی</Button>
        <Button type="button" onClick={onNext} className="px-4 py-2 bg-blue-600 text-white rounded">بعدی</Button>
      </div>
    </div>
  );
};

export default Step4Skills;
