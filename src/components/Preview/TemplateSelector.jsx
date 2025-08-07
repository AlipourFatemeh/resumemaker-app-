import React from 'react';

const templates = [
  { id: 1, name: 'قالب ساده' },
  { id: 2, name: 'قالب رنگی' },
  { id: 3, name: 'قالب حرفه‌ای' },
];

const TemplateSelector = ({ selectedTemplate, onSelect }) => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow space-y-4 text-center">
      <h2 className="text-lg font-bold mb-4">انتخاب قالب رزومه</h2>
      <div className="flex justify-around">
        {templates.map(template => (
          <button
            key={template.id}
            onClick={() => onSelect(template.id)}
            className={`px-4 py-2 rounded border ${
              selectedTemplate === template.id
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-gray-100 text-gray-700 border-gray-300'
            }`}
          >
            {template.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;

