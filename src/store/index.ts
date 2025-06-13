import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from '../store/reducers/carrinho'

const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer
  }
})
