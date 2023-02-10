import create from "zustand";

const useStore = create((set) => ({
  page: 1,
  incrementPage: (pageCount) =>
    set((state) =>
      state.page < pageCount ? { page: state.page + 1 } : { page: state.page }
    ),
  decrementPage: () =>
    set((state) => (state.page > 1 ? { page: state.page - 1 } : { page: 1 }))
}));

export default useStore;
