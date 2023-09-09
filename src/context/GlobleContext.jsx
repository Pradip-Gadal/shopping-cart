import React, { createContext, useContext, useReducer } from 'react';
import { faker } from '@faker-js/faker';
import Reducer from './Reducer';

const Context = createContext();
faker.seed(99);


const GlobleContext = ({children}) => {

  const productDiscription = [...Array(20)].map(product => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    inStock: faker.number.int({min: 0, max: 10}),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.number.int({min:0, max:5}),

}));

const [state, dispatch] = useReducer(Reducer, {
  products: productDiscription,
  cart: []
})

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  )
}
export default GlobleContext;


export const UseContext = () => {
  return useContext(Context) };
