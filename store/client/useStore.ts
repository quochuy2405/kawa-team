import { create } from 'zustand'
import { loadingSlice, userSlice } from './slices'
import type { SliceStore } from './slices'

const useStore = create<SliceStore>((set) => ({
  ...loadingSlice(set),
  ...userSlice(set)
}))

export default useStore
