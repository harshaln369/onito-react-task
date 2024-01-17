import { useState } from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"

type CountryName = {
  common: string
}
interface ICountry {
  name: CountryName
  cca2: string
}

const CountrySelect = ({ ...field }) => {
  const [countries, setCountries] = useState<ICountry[]>([])

  const handleCountryChange = async (_event: any, newValue: string) => {
    field.onChange(newValue)
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${newValue}`,
    )
    const countries = await response.json()
    if (countries.status === 404 || countries.message === "Page Not Found") {
      setCountries([])
      return
    }
    setCountries(
      countries.map((country: ICountry) => ({
        name: { common: country.name.common },
        cca2: country.cca2,
      })),
    )
  }

  return (
    <Autocomplete
      id="country-select"
      sx={{ width: 240 }}
      onInputChange={handleCountryChange}
      isOptionEqualToValue={(option, value) =>
        option.name.common === value.name.common
      }
      // here comes the list of countries
      options={countries || []}
      onBlur={field.onBlur}
      autoHighlight
      // here comes the name of country
      getOptionLabel={option => option?.name?.common}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${option.cca2.toLowerCase()}.png 2x`}
            src={`https://flagcdn.com/w20/${option.cca2.toLowerCase()}.png`}
            alt=""
          />
          {option?.name?.common} ({option?.cca2})
        </Box>
      )}
      renderInput={params => {
        return (
          <TextField
            variant="standard"
            {...params}
            label="Country"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )
      }}
    />
  )
}

export default CountrySelect
