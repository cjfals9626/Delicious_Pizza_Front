import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";

const GoogleButton = () => {
    const clientId = '125650612660-l6mqr26n8iv0db95vnt1532n9vlng54v.apps.googleusercontent.com';

    const handleSuccess = (response) => {
        console.log("Login Success:", response);
        console.log("credential", response.credential);
    };

    const handleFailure = (response) => {
        console.log("Login Failed:", response);
    };

    return (
        <>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin

                    onSuccess={handleSuccess}
                    onFailure={handleFailure}
                >
                    <span>Sign in with Google</span>
                </GoogleLogin>
            </ GoogleOAuthProvider>

        </>


    );
}
export default GoogleButton;