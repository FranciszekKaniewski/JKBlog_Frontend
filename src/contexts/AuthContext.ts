import {createContext} from 'react';

export const AuthContext = createContext({user:{name:null,role:null},setUser:(e)=>{}});