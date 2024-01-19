import type { LoadingSliceType } from './loadingSlice'
import type { UserSliceType } from './userSlice'
export type SliceStore = UserSliceType & LoadingSliceType

export { default as loadingSlice } from './loadingSlice'
export { default as userSlice } from './userSlice'
