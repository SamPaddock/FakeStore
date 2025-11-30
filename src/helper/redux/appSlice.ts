import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PreferencesState {
  theme: 'light' | 'dark';
  direction: 'ltr' | 'rtl';
  isRTL: boolean;
}

const getInitialState = (): PreferencesState => {
  const theme = 'light';
  const direction = 'ltr';
  const isRTL = false;
  return { theme, direction, isRTL };
};

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState: getInitialState(),
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      const theme = action.payload === 'dark' ? 'light' : 'dark';
      state.theme = theme;
    },
    setDirection: (state, action: PayloadAction<'ltr' | 'rtl'>) => {
      state.direction = action.payload;
      state.isRTL = action.payload === 'rtl';
    },
  },
});

export const { setTheme, setDirection } = preferencesSlice.actions;
export default preferencesSlice.reducer;
