import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
  Button,
} from "@react-email/components";
import { CSSProperties } from "react";

const EmailVerification = ({ url }: { url: string }) => {
  return (
    <Html>
      <Head />
      <Preview>Welcome to MySite! - Your something something begins!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={content}>
            <Heading style={heading}>Welcome to MySite!</Heading>
            <Text style={text}>
              Thank you for signing up to MySite please verify your email, if
              you have not created an account you can safely ignore this email.
            </Text>
            <Button href={url} style={button}>
              Click To Verify Your Email
            </Button>
          </Section>
          <Hr style={hr} />
          <Section style={footer}>
            <Text style={footerText}>
              © {new Date().getFullYear()} MySite, Inc. All Rights Reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailVerification;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const content = {
  backgroundColor: "#ffffff",
  padding: "40px",
  borderRadius: "5px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#1a1a1a",
  textAlign: "center" as const,
  letterSpacing: "-1px",
};

const text = {
  margin: "0 0 16px",
  color: "#484848",
  fontSize: "16px",
  lineHeight: "24px",
};

// const warning: CSSProperties = {
//   color: "#fffe00",
// };

const button: CSSProperties = {
  backgroundColor: "#5e6ad2",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "12px",
  marginTop: "40px",
};

const hr = {
  borderColor: "#e6e6e6",
  margin: "20px 0",
};

const footer = {
  marginTop: "32px",
};

const footerText = {
  color: "#9ca299",
  fontSize: "14px",
  textAlign: "center" as const,
};
