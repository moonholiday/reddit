import React from "react";
import { Flex, Button, Image, Text } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";

const OAuthButtons: React.FC = () => {
    const [SignInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <Flex direction="column" width="100%" mb={4}>
            <Button
                variant="oauth"
                isLoading={loading}
                onClick={() => SignInWithGoogle}
            >
                <Image src="/images/googlelogo.png" alt="Google" height="20px" mr={4} />
                Continue with Google
            </Button>
            <div></div>
            <Button variant="oauth">Some other provider</Button>
        </Flex>
    );
};

export default OAuthButtons;
