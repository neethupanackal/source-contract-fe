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

const ServiceLevelsPage = ({ handleBack, handleNext }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" align="center">
        Service Levels
      </Typography>

      <FieldArray name="serviceLevels">
        {({ push, remove, form }) => {
          const { values } = form;
          const { serviceLevels } = values;

          return (
            <Box>
              {serviceLevels && serviceLevels.length > 0
                ? serviceLevels.map((_, index) => (
                    <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                      <Grid item xs={12} md={6}>
                        <Field
                          as={TextField}
                          fullWidth
                          id={`serviceLevels[${index}].name`}
                          name={`serviceLevels[${index}].name`}
                          label="Name"
                        />
                        <ErrorMessage
                          name={`serviceLevels[${index}].name`}
                          component="div"
                          style={{ color: 'red' }}
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Field
                          as={TextField}
                          fullWidth
                          id={`serviceLevels[${index}].description`}
                          name={`serviceLevels[${index}].description`}
                          label="Description"
                          multiline
                          rows={2}
                        />
                        <ErrorMessage
                          name={`serviceLevels[${index}].description`}
                          component="div"
                          style={{ color: 'red' }}
                        />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                          <InputLabel id={`serviceLevels[${index}].type-label`}>
                            Type
                          </InputLabel>
                          <Field
                            as={Select}
                            id={`serviceLevels[${index}].type`}
                            name={`serviceLevels[${index}].type`}
                            labelId={`serviceLevels[${index}].type-label`}
                            label="Type"
                          >
                            <MenuItem value="response_time">
                              Response Time
                            </MenuItem>
                            <MenuItem value="uptime">Uptime</MenuItem>
                            <MenuItem value="performance">Performance</MenuItem>
                            <MenuItem value="availability">
                              Availability
                            </MenuItem>
                          </Field>
                          <ErrorMessage
                            name={`serviceLevels[${index}].type`}
                            component="div"
                            style={{ color: 'red' }}
                          />
                        </FormControl>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Field
                          as={TextField}
                          fullWidth
                          id={`serviceLevels[${index}].target`}
                          name={`serviceLevels[${index}].target`}
                          label="Target"
                        />
                        <ErrorMessage
                          name={`serviceLevels[${index}].target`}
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
                    type: 'response_time',
                    target: '',
                  })
                }
                startIcon={<Add />}
                sx={{ mt: 2 }}
              >
                Add Service Level
              </Button>
            </Box>
          );
        }}
      </FieldArray>

    </Box>
  );
};

export default ServiceLevelsPage;
