import React from "react";
import NavbarHead from "../components/NavbarHead";
import FooterBottom from "../components/FooterBottom";
import {
  PageContainer,
  ContentContainer,
  FormGroup,
  Input,
  Label,
  Button,
  HeadTitle,
  HeadDescription,
} from "../components/Styles";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your login logic here
  };

  return (
    <div>
      <NavbarHead />
      <PageContainer>
        <ContentContainer
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "70vh",
          }}
        >
          <div
            style={{
              width: "350px",
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              textAlign: "left", // Adjust textAlign to 'left'
            }}
          >
            <HeadTitle
              style={{
                marginTop: "-5px",
                fontSize: "28px",
                marginBottom: "20px",
                color: "#29A0B1",
                // marginLeft: "20px", // Remove marginLeft
              }}
            >
              User Login
            </HeadTitle>
            <form onSubmit={handleSubmit}>
              <FormGroup style={{ marginBottom: "20px" }}>
                <Label>Username</Label>
                <Input
                  type="text"
                  placeholder="Enter your username"
                  id="name"
                  name="name"
                />
              </FormGroup>

              <FormGroup style={{ marginBottom: "20px" }}>
                <Label>Password</Label>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  id="pw"
                  name="pw"
                />
              </FormGroup>

              <Button
                type="submit"
                style={{
                  backgroundColor: "#29A0B1",
                  color: "#fff",
                  padding: "12px 24px",
                  fontSize: "18px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                  width: "100%",
                }}
              >
                Login
              </Button>
              <HeadDescription
                style={{
                  fontSize: "16px",
                  textAlign: "center",
                }}
              >
                New User? <a href="/signup">Signup!</a>
              </HeadDescription>
            </form>
          </div>
        </ContentContainer>
      </PageContainer>
      <FooterBottom />
    </div>
  );
};

export default Login;
