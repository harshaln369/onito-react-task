import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"

export interface RegistrationSliceState {
  name: string
  age: number
  sex: string
  mobile: string
  govtIdType: string
  govtId: string
}

const initialState: RegistrationSliceState = {
  name: "",
  age: 0,
  sex: "",
  mobile: "",
  govtIdType: "",
  govtId: "",
}

export const registrationSlice = createAppSlice({
  name: "registration",
  initialState,
  reducers: create => ({
    updateForm: create.reducer(
      (state, action: PayloadAction<RegistrationSliceState>) => {
        const { name, age, sex, mobile, govtIdType, govtId } = action.payload
        state.name = name
        state.age = age
        state.sex = sex
        state.mobile = mobile
        state.govtIdType = govtIdType
        state.govtId = govtId
      },
    ),
    resetForm: create.reducer(state => {
      state = initialState
    }),
  }),
  selectors: {
    selectForm: registration => registration,
  },
})

export const { updateForm, resetForm } = registrationSlice.actions

export const { selectForm } = registrationSlice.selectors
