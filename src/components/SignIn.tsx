import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {signInSchema} from "@utils/validations";
import FormField from "@components/FormField";
import {useAppDispatch} from "@hooks/redux";
import {login} from "@redux/reducers/UserSlice";

const theme = createTheme();

interface IFormInput {
    email: string;
    password: string
}

export default function SignIn() {

    const dispatch = useAppDispatch()

    const form = useForm<IFormInput>({
        mode: 'all',
        resolver: yupResolver(signInSchema)
    });

    const signIn: SubmitHandler<IFormInput> = (data) => {
        // @ts-ignore
        dispatch(login(data))
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={form.handleSubmit(signIn)} noValidate sx={{ mt: 1 }}>
                        <FormProvider {...form}>
                            <>
                                <FormField
                                    name="email"
                                    label="Email Address"
                                    autoFocus={true}
                                />
                                <FormField
                                    name="password"
                                    label="Password"
                                    type="password"
                                />
                            </>
                        </FormProvider>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            disabled={!form.formState.isValid}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}