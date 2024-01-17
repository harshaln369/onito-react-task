import type * as React from "react"
import Box from "@mui/material/Box"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import type { SelectChangeEvent } from "@mui/material/Select"
import Select from "@mui/material/Select"

type MenuItemOption = {
  name: string
  value: string
}

type MuiSelectProps = {
  name: string
  label: string
  labelId: string
  menuItems: MenuItemOption[]
}

const MuiSelect: React.FC<MuiSelectProps> = ({
  name,
  label,
  labelId,
  menuItems,
  ...field
}) => {
  console.log("filed in mui slect", field)

  const handleChange = (event: SelectChangeEvent) => {
    field.onChange(event)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={labelId}>{label}</InputLabel>
        <Select
          labelId={labelId}
          id={name}
          value={field.value}
          label={label}
          onChange={handleChange}
          onBlur={field.onBlur}
          variant="standard"
        >
          {menuItems.map(item => (
            <MenuItem key={item.value} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default MuiSelect
