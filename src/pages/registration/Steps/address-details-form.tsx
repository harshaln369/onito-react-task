import * as React from "react"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import type { SubmitHandler } from "react-hook-form"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Box, Button } from "@mui/material"
import CountrySelect from "../../../components/CountrySelect"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { selectForm } from "../../../features/registration/registrationSlice"
import { updateUsers } from "../../../features/users/usersSlice"

interface IAddressDetailsInput {
  address?: string
  state?: string
  city?: string
  country: string
  pincode?: number
}

const addressDetailSchema = yup.object({
  address: yup.string(),
  state: yup.string(),
  city: yup.string(),
  country: yup.string().required("Country is a required field"),
  pincode: yup.number(),
})

export default function AddressDetailsForm() {
  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addressDetailSchema),
  })

  const dispatch = useAppDispatch()

  const registration = useAppSelector(selectForm)
  console.log("formala", registration)

  const onSubmit: SubmitHandler<IAddressDetailsInput> = data => {
    console.log("address", data)
    dispatch(updateUsers({ ...registration, ...data }))
    navigate("/users")
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Address Details
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <TextField
                  id="address"
                  label="Address"
                  fullWidth
                  autoComplete="shipping address-line"
                  variant="standard"
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <TextField
                  id="state"
                  label="State"
                  fullWidth
                  variant="standard"
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <TextField
                  id="city"
                  label="City"
                  fullWidth
                  autoComplete="shipping address-city"
                  variant="standard"
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="country"
              control={control}
              render={({ field }) => <CountrySelect {...field} />}
            />
            <p>{errors?.country?.message}</p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="pincode"
              control={control}
              render={({ field }) => (
                <TextField
                  type="number"
                  id="pin"
                  label="Pin Code"
                  fullWidth
                  autoComplete="shipping postal-code"
                  variant="standard"
                  {...field}
                />
              )}
            />

            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button variant="contained" sx={{ mt: 3, ml: 1 }} type="submit">
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  )
}
