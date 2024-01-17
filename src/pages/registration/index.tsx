import React from "react"
import CssBaseline from "@mui/material/CssBaseline"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import Typography from "@mui/material/Typography"
import PersonalDetailsForm from "./Steps/personal-details-form"
import AddressDetailsForm from "./Steps/address-details-form"
import Header from "../../components/Header"

const steps = ["Personal Details", "Address Details"]

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  // const handleBack = () => {
  //   setActiveStep(activeStep - 1)
  // }

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <PersonalDetailsForm handleSubmit={handleNext} />
      case 1:
        return <AddressDetailsForm />
      default:
        throw new Error("Unknown step")
    }
  }

  return (
    <>
      <CssBaseline />
      <Header onPage="registration" />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Registration Form
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>{getStepContent(activeStep)}</React.Fragment>
          )}
        </Paper>
      </Container>
    </>
  )
}
