import * as yup from "yup";
const emialRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const alphaNumericWithSpaceRegex = /^[a-zA-Z0-9 ]+$/;
export const contactusShema = yup.object().shape({
  firstName: yup
    .string()
    .nullable()
    .matches(alphaNumericWithSpaceRegex, "Special characters are not allowed.")
    .required("First Name is required"),
  lastName: yup
    .string()
    .nullable()
    .matches(alphaNumericWithSpaceRegex, "Special characters are not allowed.")
    .required("Last Name is required"),
  email: yup
    .string()
    .nullable()
    .matches(emialRegex, "Invalid Email Id")
    .required("Email is required"),
  comment: yup
    .string()
    .nullable()
    .matches(alphaNumericWithSpaceRegex, "Special characters are not allowed.")
    .required("Comment is required"),
});
