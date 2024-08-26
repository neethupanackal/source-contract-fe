import * as Yup from 'yup';

export const InfoPageSchema = Yup.object().shape({
  info: Yup.object().shape({
    title: Yup.string().required('Required'),
    version: Yup.string().required('Required'),
    status: Yup.string()
      .oneOf(['proposed', 'in development', 'active', 'deprecated', 'retired'])
      .required('Required'),
    description: Yup.string(),
    owner: Yup.string(),
    contact: Yup.object().shape({
      name: Yup.string(),
      url: Yup.string().url('Invalid URL'),
      email: Yup.string().email('Invalid email'),
    }),
  }),
});
