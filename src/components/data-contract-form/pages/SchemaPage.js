import React from 'react';
import { Field, ErrorMessage } from 'formik';
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
} from '@mui/material';

const SchemaPage = ({ handleBack, handleNext }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" align="center">
        Schema
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="schema-type-label">Schema Type</InputLabel>
            <Field
              as={Select}
              id="schema.type"
              name="schema.type"
              label="Schema Type"
              labelId="schema-type-label"
            >
              <MenuItem value="dbt">dbt</MenuItem>
              <MenuItem value="bigquery">BigQuery</MenuItem>
              <MenuItem value="json-schema">JSON Schema</MenuItem>
              <MenuItem value="sql-ddl">SQL DDL</MenuItem>
              <MenuItem value="avro">Avro</MenuItem>
              <MenuItem value="protobuf">Protobuf</MenuItem>
              <MenuItem value="custom">Custom</MenuItem>
            </Field>
            <ErrorMessage name="schema.type" component="div" style={{ color: 'red' }} />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Field
            as={TextField}
            fullWidth
            id="schema.specification"
            name="schema.specification"
            label="Specification"
            multiline
            rows={4}
            helperText="Required"
            error={Boolean(<ErrorMessage name="schema.specification" />)}
          />
          <ErrorMessage name="schema.specification" component="div" style={{ color: 'red' }} />
        </Grid>
      </Grid>

    </Box>
  );
};

export default SchemaPage;
