import { create } from 'zustand';

const useStore = create((set) => ({
    input: '',
    result: 0,
    history: [],
    setInput: (value) => set({ input: value }),
    calculate: () => set((state) => {
        try {
            const newResult = eval(state.input);
            return {
                result: newResult,
                history: [...state.history, `${state.input} = ${newResult}`],
                input: ''
            };
        } catch {
            return { input: 'Ошибка' };
        }
    }),
    clear: () => set({ input: '', result: 0, history: [] })
}));

export default useStore;
