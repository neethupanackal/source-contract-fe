import React from 'react';
import { FieldArray, Field, ErrorMessage } from 'formik';
import {
  TextField,
  Typography,
  Grid,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  IconButton,
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const ExamplesPage = ({ handleBack, handleNext }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" align="center">
        Examples
      </Typography>

      <FieldArray name="examples">
        {({ push, remove, form }) => {
          const { values } = form;
          const { examples } = values;

          return (
            <Box>
              {examples && examples.length > 0
                ? examples.map((_, index) => (
                    <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <InputLabel id={`examples[${index}].type-label`}>
                            Type
                          </InputLabel>
                          <Field
                            as={Select}
                            id={`examples[${index}].type`}
                            name={`examples[${index}].type`}
                            labelId={`examples[${index}].type-label`}
                            label="Type"
                          >
                            <MenuItem value="csv">CSV</MenuItem>
                            <MenuItem value="json">JSON</MenuItem>
                            <MenuItem value="yaml">YAML</MenuItem>
                            <MenuItem value="custom">Custom</MenuItem>
                          </Field>
                          <ErrorMessage
                            name={`examples[${index}].type`}
                            component="div"
                            style={{ color: 'red' }}
                          />
                        </FormControl>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Field
                          as={TextField}
                          fullWidth
                          id={`examples[${index}].description`}
                          name={`examples[${index}].description`}
                          label="Description"
                          multiline
                          rows={2}
                        />
                        <ErrorMessage
                          name={`examples[${index}].description`}
                          component="div"
                          style={{ color: 'red' }}
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Field
                          as={TextField}
                          fullWidth
                          id={`examples[${index}].model`}
                          name={`examples[${index}].model`}
                          label="Model"
                        />
                        <ErrorMessage
                          name={`examples[${index}].model`}
                          component="div"
                          style={{ color: 'red' }}
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Field
                          as={TextField}
                          fullWidth
                          id={`examples[${index}].data`}
                          name={`examples[${index}].data`}
                          label="Data"
                          multiline
                          rows={4}
                          helperText="Required"
                          error={Boolean(
                            <ErrorMessage
                              name={`examples[${index}].data`}
                              render={(msg) => msg}
                            />
                          )}
                        />
                        <ErrorMessage
                          name={`examples[${index}].data`}
                          component="div"
                          style={{ color: 'red' }}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <IconButton
                          onClick={() => remove(index)}
                          color="secondary"
                        >
                          <Remove />
                        </IconButton>
                      </Grid>
                    </Grid>
                  ))
                : null}

              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  push({
                    type: 'csv',
                    description: '',
                    model: '',
                    data: '',
                  })
                }
                startIcon={<Add />}
                sx={{ mt: 2 }}
              >
                Add Example
              </Button>
            </Box>
          );
        }}
      </FieldArray>

    </Box>
  );
};

export default ExamplesPage;
