import { createSlice } from '@reduxjs/toolkit'
import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { authApi } from './api';

export type InitialStateProp = {
  isLogedIn:boolean;
  authState:{
    email:string,
    address:string
  } ,
  value: number;
  reservationInfo:reservationInfoProps;
}

export type reservationInfoProps = {
  email:string;
  name:string;
  time:string;
  location:string;
  seat:string;
  price:string;
  priceList:Array<PriceListProps>
}

export type PriceListProps = {
  class: string;
price: string;
seatNumbers: Array<number>
}

export const { actions, reducer }  = createSlice({
  name: 'app',
  initialState: {
    authState:{
      email:'',
      address:''
    } ,
    reservationInfo:{
      email:'',
      name:'',
      date:'',
      time:'',
      location:'',
      seat:'',
      price:'',
      priceList:[]
    }
  },
  reducers: {
    setLogedIn: (state,{payload}) => {      
      // if(payload){
      //   const tokens = {
      //     address1:'accessToken'
      //   }
      //   localStorage.setItem('ajs_user_id','address1')  
      //   localStorage.setItem('tokens',JSON.stringify(tokens))
      // }else{    
      //   const tokens = JSON.parse(localStorage.getItem('tokens')||"{}")
      //   if(tokens){
      //     tokens[localStorage.getItem('ajs_user_id')||""] = ""
      //   }
      //   localStorage.setItem('ajs_user_id','')  
      //         localStorage.setItem('tokens',JSON.stringify(tokens))
      // }
      return {
        ...state,
      isLogedIn :payload
      }
    },
    setReservationInfo:(state,{payload}) => ({
      ...state,
      reservationInfo:{
        ...state.reservationInfo,
        ...payload
        // [name]:value,
      },
    }),
    setAddress:(state,{payload}) => ({
      ...state,
      authState:{
        ...state.authState,
        address:payload
      }
    })
  }
})

export const {
  setLogedIn,
  setReservationInfo,
  setAddress,
} = actions


type requestLoginProps = {
  userId:string;
  password:string;
}
// type Dispatcher = ThunkDispatch<State, undefined, AnyAction>;

// type GetState = () => State;


// export function requestLogin(){
//   return async (dispatch:Dispatch, getState)=>{
//     dispatch(setLogedIn(true))
//     // console.log(getState)
//   }
// }

// export function requestLogin({userId,password}:requestLoginProps) {
//   return async (dispatch,getState) => {
    

//   };
// }