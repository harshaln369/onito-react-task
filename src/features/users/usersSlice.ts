import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"

export interface UsersSliceState {
  name: string
  age: number
  sex: string
  mobile: string
  govtIdType: string
  govtId: string
  address?: string
  state?: string
  city?: string
  country: string
  pincode?: number
}

const initialState: UsersSliceState[] = []

export const usersSlice = createAppSlice({
  name: "users",
  initialState,
  reducers: create => ({
    updateUsers: create.reducer(
      (state, action: PayloadAction<UsersSliceState>) => {
        state.push(action.payload)
      },
    ),
  }),
  selectors: {
    selectUsers: users => users,
  },
})

export const { updateUsers } = usersSlice.actions

export const { selectUsers } = usersSlice.selectors
