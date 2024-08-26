import * as Yup from 'yup';

// Define the schema for definitions on the Definitions page
export const DefinitionsPageSchema = Yup.object().shape({
  definitions: Yup.object().shape({
    // Assuming definitions is an object with multiple definitions
    // Each definition might be an object with various fields
    definition1: Yup.object().shape({
      name: Yup.string().required('Name is required'),
      type: Yup.string().oneOf(['type1', 'type2', 'type3']).required('Type is required'),
      description: Yup.string().optional(),
      // Add other fields relevant to definition1
    }),
    definition2: Yup.object().shape({
      name: Yup.string().required('Name is required'),
      type: Yup.string().oneOf(['type1', 'type2', 'type3']).required('Type is required'),
      description: Yup.string().optional(),
      // Add other fields relevant to definition2
    }),
    // Define more definitions if needed
  }),
});
