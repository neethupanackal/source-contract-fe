import * as Yup from 'yup';
import { InfoPageSchema } from './InfoPageSchema';
import { ServersPageSchema } from './ServersPageSchema';
import { TermsPageSchema } from './TermsPageSchema';
import { ModelsPageSchema } from './ModelsPageSchema';
import { DefinitionsPageSchema } from './DefinitionsPageSchema';


const DataContractSchema = Yup.object().shape({
  dataContractSpecification: Yup.string()
    .oneOf(['0.9.3', '0.9.2', '0.9.1', '0.9.0'])
    .required('Required'),
  id: Yup.string().required('Required'),
  ...InfoPageSchema.fields,
  ...ServersPageSchema.fields,
  ...TermsPageSchema.fields,
  ...ModelsPageSchema.fields,
  ...DefinitionsPageSchema.fields
  // Merge other schemas similarly
});

export default DataContractSchema;