import * as yup from "yup";

export const signInSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string()
        .required().min(8)
        .matches(/[a-z]+/, "One lowercase character")
        .matches(/[A-Z]+/, "One uppercase character")
        .matches(/\d+/, "One number"),
})

export const signUpSchema = yup.object({
    username: yup.string().required().min(2)
}).concat(signInSchema)