import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormHelperText,
  TextField,
  MenuItem
} from "@mui/material";
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';
import * as Yup from "yup";
import { Formik } from "formik";
import axios from 'axios';

// const useStyles = makeStyles((theme) => ({
//   form: {
//     marginTop: theme.spacing(6),
//   },
//   button: {
//     marginTop: theme.spacing(3),
//     marginBottom: theme.spacing(2),
//   },
// formControl: {
// margin: theme.spacing(1),
//   minWidth: 520,
// },
//   feedback: {
//     marginTop: theme.spacing(2),
//   },
// }));


function Quote() {
  const [newUser, setNewUser] = useState(null);
  const [formSent, setFormSent] = useState(false);
  const [usersFullName, setUsersFullName] = useState("");


  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        {formSent ? <Typography>Thanks you {usersFullName} for contacting us we will get back to you shortly!</Typography> : <>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Get Pricing
          </Typography>

          <Formik
            initialValues={{
              TextMessage: false,
              Email: "",
              Source: "None",
              FullName: "",
              PhoneNumber: "",
              Address: "",
              City: "",
              ZIP: "",
              SQFT: ""
            }}
            validationSchema={Yup.object().shape({
              Email: Yup.string()
                .email("Must be a valid email")
                .max(255)
                .required("Email is required"),
            })}
            onSubmit={async (values) => {
              if (values.TextMessage) values.TextMessage = 'Yes'
              if (!values.TextMessage) values.TextMessage = 'No'
              // 418222268621-g5h9ms0o4t8cs4kb3k8ocmvvi80f6s07.apps.googleusercontent.com
              try {
                axios.post(
                  `https://sheet.best/api/sheets/7d44312f-42e3-4de2-bba3-7f5eda0208ea`, values
                ).then((res) => {
                  setFormSent(true)
                  setUsersFullName(res.data[0].FullName)
                })
                setNewUser(newUser);
              } catch (e) {
                console.log("Quote error", e)
              }
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                </Box>
                <TextField
                  error={Boolean(touched.FullName && errors.FullName)}
                  fullWidth
                  helperText={touched.FullName && errors.FullName}
                  label="Full Name"
                  margin="normal"
                  name="FullName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.FullName}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.Email && errors.Email)}
                  fullWidth
                  helperText={touched.Email && errors.Email}
                  label="Email Address"
                  margin="normal"
                  name="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="Email"
                  value={values.Email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.PhoneNumber && errors.PhoneNumber)}
                  fullWidth
                  helperText={touched.PhoneNumber && errors.PhoneNumber}
                  label="Phone Number"
                  margin="normal"
                  name="PhoneNumber"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="number"
                  value={values.PhoneNumber}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(
                    touched.Address && errors.Address
                  )}
                  fullWidth
                  helperText={
                    touched.Address && errors.Address
                  }
                  label="Street Address"
                  margin="normal"
                  name="Address"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.Address}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(
                    touched.City && errors.City
                  )}
                  fullWidth
                  helperText={
                    touched.City && errors.City
                  }
                  label="City"
                  margin="normal"
                  name="City"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="text"
                  value={values.City}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(
                    touched.ZIP && errors.ZIP
                  )}
                  fullWidth
                  helperText={
                    touched.ZIP && errors.ZIP
                  }
                  label="Zip Code"
                  margin="normal"
                  name="ZIP"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="number"
                  value={values.ZIP}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(
                    touched.SQFT && errors.SQFT
                  )}
                  fullWidth
                  helperText={
                    touched.SQFT && errors.SQFT
                  }
                  label="Home Sq Ft"
                  margin="normal"
                  name="SQFT"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="number"
                  value={values.SQFT}
                  variant="outlined"
                />
                <Typography> How did you hear about us?</Typography>
                <TextField
                  id="outlined Source"
                  select
                  label="Select"
                  value={values.Source}
                  onChange={handleChange}
                  helperText="Please select one"
                  name="Source"
                >
                  <MenuItem value="None">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Google">Google</MenuItem>
                  <MenuItem value="Instagram">Instagram</MenuItem>
                  <MenuItem value="Facebook">Facebook</MenuItem>
                  <MenuItem value="Friend">Friend/Neighbor/relative</MenuItem>
                  <MenuItem value="Vehicle">Vehicle Ad</MenuItem>
                  <MenuItem value="Flyer">Flyer/Business Card</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField>
                <Box alignItems="center" display="flex" ml={-1}>
                  <Checkbox
                    color="primary"
                    name="TextMessage"
                    onChange={handleChange}
                  />
                  <Typography color="primary" variant="body1">
                    Can we contact you via text?                  </Typography>
                </Box>
                {Boolean(touched.policy && errors.policy) && (
                  <FormHelperText error>{errors.policy}</FormHelperText>
                )}

                <Box my={2}>
                  <Button
                    style={{ backgroundColor: "#5bd620" }}
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Send info
                  </Button>
                </Box>
                {/* <Typography color="textSecondary" variant="body1">
                    Have an account?{" "}
                    <Link to={'/quote'} variant="h6">
                      Sign in
                    </Link>
                  </Typography> */}
              </form>
            )}
          </Formik></>}

      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Quote);
