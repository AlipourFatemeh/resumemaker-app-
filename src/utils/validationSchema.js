// validationSchema.js
import * as yup from 'yup';

export const personalInfoSchema = yup.object().shape({
  name: yup.string().required('نام الزامی است'),
  email: yup.string().email('ایمیل معتبر نیست').required('ایمیل الزامی است'),
});
// سایر اسکیماها را می‌توانید اضافه کنید
