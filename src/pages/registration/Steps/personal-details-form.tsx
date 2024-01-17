import type React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import type { SubmitHandler } from "react-hook-form"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import MuiSelect from "../../../components/MuiSelect"
import { Box, Button } from "@mui/material"
import { useAppDispatch } from "../../../app/hooks"
import { updateForm } from "../../../features/registration/registrationSlice"
import { personalDetailSchema } from "./personal-details-validation"

interface IPersonalDetailsInput {
  name: string
  age: number
  sex: string
  mobile: string
  govtIdType: string
  govtId: string
}

const sexMenuItems = [
  { name: "Male", value: "Male" },
  { name: "Female", value: "Female" },
  { name: "Other", value: "Other" },
]

const govtIdType = [
  { name: "Aadhar", value: "Aadhar" },
  { name: "PAN", value: "PAN" },
]

type PersonalDetailsFormProps = {
  handleSubmit: () => void
}

const PersonalDetailsForm: React.FC<PersonalDetailsFormProps> = ({
  handleSubmit: handleNextSubmit,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(personalDetailSchema),
  })

  const dispatch = useAppDispatch()

  const onSubmit: SubmitHandler<IPersonalDetailsInput> = data => {
    console.log(data)
    dispatch(updateForm(data))
    handleNextSubmit()
  }
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Personal Details
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  error={!!errors?.name?.message}
                  helperText={errors?.name?.message}
                  id="name"
                  label="Name"
                  autoComplete="given-name"
                  variant="standard"
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="age"
              control={control}
              render={({ field }) => (
                <TextField
                  error={!!errors?.age?.message}
                  helperText={errors?.age?.message}
                  id="age"
                  label="Age"
                  type="number"
                  autoComplete="age"
                  variant="standard"
                  {...field}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Controller
              name="sex"
              control={control}
              render={({ field }) => (
                <MuiSelect
                  label="Sex"
                  labelId="sex-label"
                  menuItems={sexMenuItems}
                  {...field}
                />
              )}
            />
            <Typography fontSize={12} color="red">
              {errors.sex?.message}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Controller
              name="mobile"
              control={control}
              render={({ field }) => (
                <TextField
                  error={!!errors?.mobile?.message}
                  helperText={errors?.mobile?.message}
                  id="mobile"
                  label="Mobile"
                  fullWidth
                  autoComplete="mobile"
                  variant="standard"
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="govtIdType"
              control={control}
              render={({ field }) => (
                <MuiSelect
                  label="Govt Issued Id Type"
                  labelId="govt-id-type-label"
                  menuItems={govtIdType}
                  {...field}
                />
              )}
            />

            <Typography fontSize={12} color="red">
              {errors.govtIdType?.message}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="govtId"
              control={control}
              render={({ field }) => (
                <TextField
                  error={!!errors?.govtId?.message}
                  helperText={errors?.govtId?.message}
                  id="govt-id"
                  label="Govt Issued Id"
                  variant="standard"
                  {...field}
                  value={field?.value?.toUpperCase()}
                />
              )}
            />
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained" sx={{ mt: 3, ml: 1 }} type="submit">
            Next
          </Button>
        </Box>
      </form>
    </>
  )
}

export default PersonalDetailsForm
