import { IUser } from '@/interfaces/user'
import { StoreApi } from 'zustand'

interface IUserState {
  user: IUser
}
interface IUserHandle {
  setUser: (value: IUser) => void
}

export type UserSliceType = Partial<IUserHandle & IUserState>

const user: IUser = {
  name: '',
  avatar: '',
  id: ''
}

const UserSlice = (set: StoreApi<UserSliceType>['setState']) => ({
  user,
  setUser: (value: UserSliceType) => set(value)
})

export default UserSlice
