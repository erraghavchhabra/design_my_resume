const BaseUrl = process.env.REACT_APP_BASE_URL;


export const LoginApi = `${BaseUrl}/api/auth/login`;

export const SignupApi = `${BaseUrl}/api/auth/register`;

export const UserApi = `${BaseUrl}/api/auth/me`;


export const ForgotPasswordApi = `${BaseUrl}/api/auth/forgot-password`;
export const ResetPasswordApi = `${BaseUrl}/api/auth/reset-password`;
