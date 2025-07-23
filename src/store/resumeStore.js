// resumeStore.js
import { create } from 'zustand';

const useResumeStore = create((set) => ({
  personalInfo: {},
  experience: [],
  education: [],
  skills: [],
  summary: '',
  setPersonalInfo: (info) => set({ personalInfo: info }),
  setExperience: (exp) => set({ experience: exp }),
  setEducation: (edu) => set({ education: edu }),
  setSkills: (skills) => set({ skills }),
  setSummary: (summary) => set({ summary }),
}));

export default useResumeStore;
