import * as yup from "yup";

export const signUpSchema = yup.object({
    username: yup.string().required('Username is required').min(2, "Must be 2 characters or more"),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string()
        .required('Password is required').min(8, "Must be 8 characters or more")
        .matches(/[a-z]+/, "One lowercase character")
        .matches(/[A-Z]+/, "One uppercase character")
        .matches(/\d+/, "One number"),
}).required();

export const signInSchema = yup.object({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string()
        .required('Password is required').min(8, "Must be 8 characters or more")
        .matches(/[a-z]+/, "One lowercase character")
        .matches(/[A-Z]+/, "One uppercase character")
        .matches(/\d+/, "One number"),
}).required();