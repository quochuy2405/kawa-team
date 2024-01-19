import { StoreApi } from 'zustand'

interface ILoadingState {
  loading: boolean
}
interface ILoadingHandle {
  setLoading: (value: ILoadingState) => void
}

export type LoadingSliceType = Partial<ILoadingHandle & ILoadingState>

const loading = false

const loadingSlice = (set: StoreApi<LoadingSliceType>['setState']) => ({
  loading,
  setLoading: (value: ILoadingState) => set(value)
})

export default loadingSlice
