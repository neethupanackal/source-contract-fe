import * as Yup from 'yup';

export const ServersPageSchema = Yup.object().shape({
  servers: Yup.object().shape({
    description: Yup.string(),
    environment: Yup.string(),
    // Include other fields relevant to servers
  }),
});
