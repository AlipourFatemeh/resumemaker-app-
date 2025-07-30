import React from 'react';
import TextArea from '../UI/TextArea';
import Button from '../UI/Button';

const Step5Summary = ({ summary, onChange, onNext, onBack }) => (
  <div className="bg-white rounded-xl shadow p-4 space-y-6 max-w-md mx-auto">
    <h2 className="text-lg font-bold mb-4">درباره من / خلاصه رزومه</h2>
    <TextArea
      className="w-full min-h-[120px] border rounded p-2"
      value={summary}
      onChange={e => onChange(e.target.value)}
      placeholder="خلاصه‌ای از خودتان و اهداف شغلی بنویسید..."
    />
    <div className="flex justify-between mt-4">
      <Button type="button" onClick={onBack} className="px-4 py-2 bg-gray-200 rounded">قبلی</Button>
      <Button type="button" onClick={onNext} className="px-4 py-2 bg-blue-600 text-white rounded">ثبت نهایی</Button>
    </div>
  </div>
);

export default Step5Summary;
