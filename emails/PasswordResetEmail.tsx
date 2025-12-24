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

const EmailVerification = ({ name, url }: { name: string; url: string }) => {
  return (
    <Html>
      <Head />
      <Preview>Reset Your Password For MySite</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={content}>
            <Heading style={heading}>Reset Your Password</Heading>
            <Text style={text}>Hello {name},</Text>

            <Text style={text}>
              Someone recently requested a password change for your MySite
              account. If this was you, you can set a new password here:
            </Text>
            <Button href={url} style={button}>
              Click To Reset Your Password
            </Button>

            <Text style={text}>
              If you don&apos;t want to change your password or didn&apos;t
              request this, just ignore and delete this message.
            </Text>

            <Text style={text}>
              To keep your account secure, please don&apos;t forward this email
              to anyone.
            </Text>
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
  marginBottom: "40px",
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
