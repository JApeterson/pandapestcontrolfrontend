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
} from "@material-ui/core";
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';
import * as Yup from "yup";
import { Formik } from "formik";

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

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Get Pricing
          </Typography>

        </React.Fragment>
        <Formik
          initialValues={{
            toggle: false,
            checked: [],
            email: "",
            referral: "None",
            fullName: "",
            phoneNumber: "",
            streetAddress: "",
            city: "",
            zip: "",
            sqft: ""
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Must be a valid email")
              .max(255)
              .required("Email is required"),
            password: Yup.string()
              .max(255)
              .required("a password with a minimum length of 8 characters, lowercase, uppercase, and numbers is required"),
            confirmpassword: Yup.string().oneOf(
              [Yup.ref("password"), null],
              "Passwords must match"
            ),
            policy: Yup.boolean().oneOf(
              [true],
              "This field must be checked"
            ),
          })}
          onSubmit={async (values) => {
            try {
              /*const newUser = await Auth.signUp({
                username: values.email,
                password: values.password,
              });*/
              setNewUser(newUser);
            } catch (e) {
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
                error={Boolean(touched.fullName && errors.fullName)}
                fullWidth
                helperText={touched.fullName && errors.fullName}
                label="Full Name"
                margin="normal"
                name="fullName"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fullName}
                variant="outlined"
              />
              <TextField
                error={Boolean(touched.email && errors.email)}
                fullWidth
                helperText={touched.email && errors.email}
                label="Email Address"
                margin="normal"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                value={values.email}
                variant="outlined"
              />
              <TextField
                error={Boolean(touched.phoneNumber && errors.phoneNumber)}
                fullWidth
                helperText={touched.phoneNumber && errors.phoneNumber}
                label="Phone Number"
                margin="normal"
                name="phoneNumber"
                onBlur={handleBlur}
                onChange={handleChange}
                type="number"
                value={values.phoneNumber}
                variant="outlined"
              />
              <TextField
                error={Boolean(
                  touched.streetAddress && errors.streetAddress
                )}
                fullWidth
                helperText={
                  touched.streetAddress && errors.streetAddress
                }
                label="Street Address"
                margin="normal"
                name="streetAddress"
                onBlur={handleBlur}
                onChange={handleChange}
                type="text"
                value={values.streetAddress}
                variant="outlined"
              />
              <TextField
                error={Boolean(
                  touched.city && errors.city
                )}
                fullWidth
                helperText={
                  touched.city && errors.city
                }
                label="City"
                margin="normal"
                name="city"
                onBlur={handleBlur}
                onChange={handleChange}
                type="text"
                value={values.city}
                variant="outlined"
              />
              <TextField
                error={Boolean(
                  touched.zip && errors.zip
                )}
                fullWidth
                helperText={
                  touched.zip && errors.zip
                }
                label="Zip Code"
                margin="normal"
                name="zip"
                onBlur={handleBlur}
                onChange={handleChange}
                type="number"
                value={values.zip}
                variant="outlined"
              />
              <TextField
                error={Boolean(
                  touched.sqft && errors.sqft
                )}
                fullWidth
                helperText={
                  touched.sqft && errors.sqft
                }
                label="Home Sq Ft"
                margin="normal"
                name="sqft"
                onBlur={handleBlur}
                onChange={handleChange}
                type="number"
                value={values.sqft}
                variant="outlined"
              />
              <Typography> How did you hear about us?</Typography>
              <TextField
                id="outlined referral"
                select
                label="Select"
                value={values.referral}
                onChange={handleChange}
                helperText="Please select one"
                name="referral"
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
                  name="toggle"
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
        </Formik>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Quote);
