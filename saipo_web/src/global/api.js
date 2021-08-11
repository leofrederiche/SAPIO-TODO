import axios from 'axios';

export var socketURL = "http://127.0.0.1:3333"

export const API = axios.create({
	baseURL: socketURL
});