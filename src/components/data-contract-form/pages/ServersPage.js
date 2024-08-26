import React, { useState } from 'react';
import { FieldArray, Field, ErrorMessage } from 'formik';
import {
  TextField,
  Typography,
  Grid,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const ServersPage = ({ handleBack, handleNext }) => {
  const [selectedServerType, setSelectedServerType] = useState('BigQueryServer');

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" align="center">
        Servers
      </Typography>

      <FormControl fullWidth>
        <InputLabel id="serverType-label">Server Type</InputLabel>
        <Select
          id="serverType"
          label="Server Type"
          value={selectedServerType}
          onChange={(e) => setSelectedServerType(e.target.value)}
        >
          <MenuItem value="BigQueryServer">BigQuery Server</MenuItem>
          <MenuItem value="S3Server">S3 Server</MenuItem>
          <MenuItem value="GcsServer">GCS Server</MenuItem>
          {/* Add other server types here */}
        </Select>
      </FormControl>

      <FieldArray name="servers">
        {({ push, remove, form }) => {
          const { values } = form;
          const { servers } = values;

          return (
            <Box>
              {servers && servers.length > 0
                ? servers.map((_, index) => (
                    <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
                      <Grid item xs={12}>
                        <Field
                          as={TextField}
                          fullWidth
                          id={`servers[${index}].description`}
                          name={`servers[${index}].description`}
                          label="Description"
                        />
                        <ErrorMessage
                          name={`servers[${index}].description`}
                          component="div"
                          style={{ color: 'red' }}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Field
                          as={TextField}
                          fullWidth
                          id={`servers[${index}].environment`}
                          name={`servers[${index}].environment`}
                          label="Environment"
                        />
                        <ErrorMessage
                          name={`servers[${index}].environment`}
                          component="div"
                          style={{ color: 'red' }}
                        />
                      </Grid>

                      {/* Dynamic Server Type Fields */}
                      {selectedServerType === 'BigQueryServer' && (
                        <>
                          <Grid item xs={12} md={6}>
                            <Field
                              as={TextField}
                              fullWidth
                              id={`servers[${index}].BigQueryServer.project`}
                              name={`servers[${index}].BigQueryServer.project`}
                              label="Project"
                            />
                            <ErrorMessage
                              name={`servers[${index}].BigQueryServer.project`}
                              component="div"
                              style={{ color: 'red' }}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Field
                              as={TextField}
                              fullWidth
                              id={`servers[${index}].BigQueryServer.dataset`}
                              name={`servers[${index}].BigQueryServer.dataset`}
                              label="Dataset"
                            />
                            <ErrorMessage
                              name={`servers[${index}].BigQueryServer.dataset`}
                              component="div"
                              style={{ color: 'red' }}
                            />
                          </Grid>
                        </>
                      )}

                      {selectedServerType === 'S3Server' && (
                        <>
                          <Grid item xs={12} md={6}>
                            <Field
                              as={TextField}
                              fullWidth
                              id={`servers[${index}].S3Server.location`}
                              name={`servers[${index}].S3Server.location`}
                              label="Location"
                            />
                            <ErrorMessage
                              name={`servers[${index}].S3Server.location`}
                              component="div"
                              style={{ color: 'red' }}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Field
                              as={TextField}
                              fullWidth
                              id={`servers[${index}].S3Server.endpointUrl`}
                              name={`servers[${index}].S3Server.endpointUrl`}
                              label="Endpoint URL"
                            />
                            <ErrorMessage
                              name={`servers[${index}].S3Server.endpointUrl`}
                              component="div"
                              style={{ color: 'red' }}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Field
                              as={Select}
                              fullWidth
                              id={`servers[${index}].S3Server.format`}
                              name={`servers[${index}].S3Server.format`}
                              label="Format"
                            >
                              <MenuItem value="parquet">Parquet</MenuItem>
                              <MenuItem value="delta">Delta</MenuItem>
                              <MenuItem value="json">JSON</MenuItem>
                              <MenuItem value="csv">CSV</MenuItem>
                            </Field>
                            <ErrorMessage
                              name={`servers[${index}].S3Server.format`}
                              component="div"
                              style={{ color: 'red' }}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Field
                              as={Select}
                              fullWidth
                              id={`servers[${index}].S3Server.delimiter`}
                              name={`servers[${index}].S3Server.delimiter`}
                              label="Delimiter"
                            >
                              <MenuItem value="new_line">New Line</MenuItem>
                              <MenuItem value="array">Array</MenuItem>
                            </Field>
                            <ErrorMessage
                              name={`servers[${index}].S3Server.delimiter`}
                              component="div"
                              style={{ color: 'red' }}
                            />
                          </Grid>
                        </>
                      )}
                      {/* Add other server type fields based on selectedServerType */}

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
                    description: '',
                    environment: '',
                    [`${selectedServerType}`]: {
                      // Add default fields here based on selectedServerType
                    },
                  })
                }
                startIcon={<Add />}
                sx={{ mt: 2 }}
              >
                Add Server
              </Button>
            </Box>
          );
        }}
      </FieldArray>

    </Box>
  );
};

export default ServersPage;
