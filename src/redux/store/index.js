import { createStore } from 'redux';
import {bostaReducer} from '../reducer/index'

const store = createStore(bostaReducer);

export default store;