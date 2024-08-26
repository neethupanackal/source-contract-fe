import * as Yup from 'yup';

export const ModelsPageSchema = Yup.object().shape({
  models: Yup.object().shape({
    // Include validation rules for models
  }),
});
