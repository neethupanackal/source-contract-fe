import * as Yup from 'yup';

export const TermsPageSchema = Yup.object().shape({
  terms: Yup.object().shape({
    usage: Yup.string(),
    limitations: Yup.string(),
    billing: Yup.string(),
    noticePeriod: Yup.string(),
  }),
});
