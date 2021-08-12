import axios from 'axios';

import { mailBoxLayerKey } from "./keys"

export var socketURL = `http://apilayer.net/api/check?access_key=${mailBoxLayerKey}&`

export const MailBoxLayer = axios.create({
	//baseURL: socketURL
});