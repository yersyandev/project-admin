import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {SIGN_IN_PAGE} from "@utils/urls";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {signUpSchema} from "@utils/validations";
import FormField from "@components/FormField";

const theme = createTheme();

interface IFormInput {
    username: string;
    email: string;
    password: string
}

export default function SignUp() {
    const form = useForm<IFormInput>({
        mode: 'all',
        resolver: yupResolver(signUpSchema)
    });

    const signUp: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={form.handleSubmit(signUp)} sx={{mt: 3}}>
                        <FormProvider {...form}>
                            <>
                                <FormField
                                    name="username"
                                    label="Username"
                                    autoFocus={true}
                                />

                                <FormField
                                    name="email"
                                    label="Email"
                                />

                                <FormField
                                    name="password"
                                    label="Password"
                                    type="password"
                                />
                            </>
                        </FormProvider>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                            disabled={!form.formState.isValid}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to={SIGN_IN_PAGE}>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}