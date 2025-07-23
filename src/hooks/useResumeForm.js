// useResumeForm.js
import useResumeStore from '../store/resumeStore';

const useResumeForm = () => {
  const store = useResumeStore();
  return store;
};

export default useResumeForm;
