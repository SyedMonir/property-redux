import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postAllItems } from '../../feature/propertyAction';
import {
  Grid,
  makeStyles,
  Card,
  CardContent,
  MenuItem,
  InputLabel,
  Select,
  CardActions,
  Button,
  CardHeader,
  FormControl,
} from '@material-ui/core';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'formik-material-ui';

const useStyle = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

//Data
const initialValues = {
  firstName: '',
  lastName: '',
  occupation: '',
  city: '',
  country: '',
  email: '',
  password: '',
};

const options = [
  { label: 'Karim', value: 'Karim' },
  { label: 'Fahad', value: 'Fahad' },
];

//validation schema
let validationSchema = Yup.object().shape({
  Reference: Yup.string().required('Required'),
});

const AddProperty = () => {
  const { isLoading, items, error } = useSelector((state) => state);
  console.log(items);

  const primaryType = [
    {
      value: 'commercial',
      label: 'Commercial',
    },
    {
      value: 'residential',
      label: 'Residential',
    },
  ];

  const strata = [
    {
      value: 'moment Pty Ltd (SUP00001)',
      label: 'moment Pty Ltd (SUP00001)',
    },
    {
      value: 'Bencrop OCM Ltd (SUP00004)',
      label: 'Bencrop OCM Ltd (SUP00004)',
    },
  ];

  const type = [
    {
      value: 'house',
      label: 'house',
    },
    {
      value: 'duplex',
      label: 'duplex',
    },
    {
      value: 'apartment',
      label: 'apartment',
    },
    {
      value: 'commercial',
      label: 'commercial',
    },
  ];

  const dispatch = useDispatch();

  const classes = useStyle();

  const onSubmit = (values) => {
    console.log(values);
    dispatch(postAllItems());
  };
  return (
    <>
      {isLoading && <h3>Loading ...</h3>}
      {error && <h3>{error.message}</h3>}
      <Grid container justify="center" spacing={1}>
        <Grid item md={6}>
          <Card className={classes.padding}>
            <CardHeader title="Add Property"></CardHeader>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ dirty, isValid, values, handleChange, handleBlur }) => {
                return (
                  <Form>
                    <CardContent>
                      <Grid item container spacing={1} justify="">
                        <Grid item xs={12}>
                          <Field
                            label="Reference"
                            variant="outlined"
                            fullWidth
                            name="Reference"
                            value={values.Reference}
                            component={TextField}
                          />
                        </Grid>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel id="demo-simple-select-outlined-label">
                            Manager
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="manager"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.manager}
                            name="manager"
                          >
                            {options.map((item) => (
                              <MenuItem key={item.value} value={item.value}>
                                {item.label}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <h3>Address</h3>
                      <Grid item container spacing={1} justify="center">
                        <Grid item xs={12}>
                          <Field
                            label="Details"
                            variant="outlined"
                            fullWidth
                            name="details"
                            value={values.details}
                            component={TextField}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            label="Location"
                            variant="outlined"
                            fullWidth
                            name="location"
                            value={values.location}
                            component={TextField}
                          />
                        </Grid>
                      </Grid>
                      <h3>Details</h3>
                      <Grid item container spacing={1} justify="center">
                        <Grid item xs={12}>
                          <FormControl fullWidth variant="outlined">
                            <InputLabel id="demo-simple-select-outlined-label-2">
                              Primary Type
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label-2"
                              id="demo-simple-select-outlined-2"
                              label="Primary-Type"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.primaryType}
                              name="Primary-Type"
                            >
                              {primaryType.map((item) => (
                                <MenuItem key={item.value} value={item.value}>
                                  {item.label}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                          <FormControl fullWidth variant="outlined">
                            <InputLabel id="demo-simple-select-outlined-label-3">
                              Type
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label-3"
                              id="demo-simple-select-outlined-3"
                              label="Type"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.type}
                              name="Type"
                            >
                              {type.map((item) => (
                                <MenuItem key={item.value} value={item.value}>
                                  {item.label}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                          <FormControl fullWidth variant="outlined">
                            <InputLabel id="demo-simple-select-outlined-label-2">
                              Strata Manager
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label-4"
                              id="demo-simple-select-outlined-4"
                              label="strata manager"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.starta}
                              name="strata"
                            >
                              {strata.map((item) => (
                                <MenuItem key={item.value} value={item.value}>
                                  {item.label}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                      </Grid>
                      <h3>Inspections</h3>
                      <Grid item container spacing={1} justify="center">
                        <Grid item xs={12}>
                          <Field
                            label="Routine Inspection Frequency"
                            variant="outlined"
                            fullWidth
                            name="routine"
                            type="number"
                            value={values.routine}
                            component={TextField}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            label="First Routine (Optional)"
                            variant="outlined"
                            fullWidth
                            name="firstRoutine"
                            type="number"
                            value={values.firstRoutine}
                            component={TextField}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <label>Routine Inspection Due</label>
                          <Field
                            variant="outlined"
                            fullWidth
                            name="routineInspectionDue"
                            type="date"
                            value={values.routineInspectionDue}
                            component={TextField}
                          />
                        </Grid>
                      </Grid>
                      <h3>Notes</h3>
                      <Grid item container spacing={1} justify="center">
                        <Grid item xs={12}>
                          <Field
                            label="Notes"
                            variant="outlined"
                            fullWidth
                            type="textfield"
                            name="notes"
                            value={values.notes}
                            component={TextField}
                          />
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions>
                      <Button
                        disabled={!dirty || !isValid}
                        variant="contained"
                        color="primary"
                        type="Submit"
                        className={classes.button}
                      >
                        SAVE
                      </Button>
                    </CardActions>
                  </Form>
                );
              }}
            </Formik>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default AddProperty;
