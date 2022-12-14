import axios from 'axios';

const headers = {
	accept: 'application/json',
	'content-type': 'application/json',
};
// we only have one endpoint for this test, however i thought maybe would be good to define the baseUrl
export const http = axios.create({
	baseURL: 'https://dummyjson.com/',
	headers,
});

export async function fetchData(endpoint, data, method = 'GET') {
	try {
		const resp = await http({
			method,
			url: endpoint,
			data, // if the method is not GET
		});
		return resp.data;
	} catch (error) {
		if (error.response) {
			/*
			 * The request was made and the server responded with a
			 * status code that falls out of the range of 2xx
			 */
			const { status } = error.response;

			console.warn(
				status,
				error?.response?.data?.message ||
					error?.response?.data?.error ||
					'Unknown error',
			);

			// console.log(error.response.headers);
		} else if (error.request) {
			/*
			 * The request was made but no response was received, `error.request`
			 * is an instance of XMLHttpRequest in the browser and an instance
			 * of http.ClientRequest in Node.js
			 */
			console.warn('Network error');
		} else {
			console.warn('Connection error');
		}
		return false;
	}
}
