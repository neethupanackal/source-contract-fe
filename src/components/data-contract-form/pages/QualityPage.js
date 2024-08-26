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

const QualityPage = ({ handleBack, handleNext }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" align="center">
        Quality
      </Typography>

      <FieldArray name="qualityCriteria">
        {({ push, remove, form }) => {
          const { values } = form;
          const { qualityCriteria } = values;

          return (
            <Box>
              {qualityCriteria && qualityCriteria.length > 0
                ? qualityCriteria.map((_, index) => (
                    <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                      <Grid item xs={12} md={6}>
                        <Field
                          as={TextField}
                          fullWidth
                          id={`qualityCriteria[${index}].name`}
                          name={`qualityCriteria[${index}].name`}
                          label="Name"
                        />
                        <ErrorMessage
                          name={`qualityCriteria[${index}].name`}
                          component="div"
                          style={{ color: 'red' }}
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Field
                          as={TextField}
                          fullWidth
                          id={`qualityCriteria[${index}].description`}
                          name={`qualityCriteria[${index}].description`}
                          label="Description"
                          multiline
                          rows={2}
                        />
                        <ErrorMessage
                          name={`qualityCriteria[${index}].description`}
                          component="div"
                          style={{ color: 'red' }}
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <InputLabel
                            id={`qualityCriteria[${index}].type-label`}
                          >
                            Type
                          </InputLabel>
                          <Field
                            as={Select}
                            id={`qualityCriteria[${index}].type`}
                            name={`qualityCriteria[${index}].type`}
                            labelId={`qualityCriteria[${index}].type-label`}
                            label="Type"
                          >
                            <MenuItem value="accuracy">Accuracy</MenuItem>
                            <MenuItem value="completeness">
                              Completeness
                            </MenuItem>
                            <MenuItem value="reliability">Reliability</MenuItem>
                            <MenuItem value="consistency">
                              Consistency
                            </MenuItem>
                          </Field>
                          <ErrorMessage
                            name={`qualityCriteria[${index}].type`}
                            component="div"
                            style={{ color: 'red' }}
                          />
                        </FormControl>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Field
                          as={TextField}
                          fullWidth
                          id={`qualityCriteria[${index}].target`}
                          name={`qualityCriteria[${index}].target`}
                          label="Target"
                        />
                        <ErrorMessage
                          name={`qualityCriteria[${index}].target`}
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
                    name: '',
                    description: '',
                    type: 'accuracy',
                    target: '',
                  })
                }
                startIcon={<Add />}
                sx={{ mt: 2 }}
              >
                Add Quality Criterion
              </Button>
            </Box>
          );
        }}
      </FieldArray>

    </Box>
  );
};

export default QualityPage;
