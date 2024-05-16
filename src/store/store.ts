import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/auth'
import siteReducer from './reducers/site'
const reducers = combineReducers({
  auth: authReducer,
  site: siteReducer
})

export const store = configureStore({
  reducer: reducers,
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
