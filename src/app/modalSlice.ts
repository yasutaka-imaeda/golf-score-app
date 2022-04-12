import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface ModalState {
  isCreateModalOpen: boolean;
  isEditModalOpen: boolean;
  isDeleteModalOpen: boolean;
}

const initialState: ModalState = {
  isCreateModalOpen: false,
  isEditModalOpen: false,
  isDeleteModalOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setIsCreateModalOpen: (state, action) => {
      state.isCreateModalOpen = action.payload;
    },
    setIsEditModalOpen: (state, action) => {
      state.isEditModalOpen = action.payload;
    },
    setIsDeleteModalOpen: (state, action) => {
      state.isDeleteModalOpen = action.payload;
    },
  },
});

export const {
  setIsCreateModalOpen,
  setIsEditModalOpen,
  setIsDeleteModalOpen,
} = modalSlice.actions;

export const selectIsCreateModalOpen = (
  state: RootState
): ModalState["isCreateModalOpen"] => state.modal.isCreateModalOpen;
export const selectIsEditModalOpen = (
  state: RootState
): ModalState["isEditModalOpen"] => state.modal.isEditModalOpen;
export const selectIsDeleteModalOpen = (
  state: RootState
): ModalState["isDeleteModalOpen"] => state.modal.isDeleteModalOpen;

export default modalSlice.reducer;
