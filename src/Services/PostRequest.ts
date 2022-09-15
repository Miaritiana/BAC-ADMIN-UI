import axios from "axios"
import { useState } from "react";

const postRequest = (link:string,data:object[]) => {
	const [resData, setResData] = useState<object[]>([{}])
	axios.post(link,data)
		.then(
			response => {
				console.log(response.data);
				setResData(response.data)
			}
		)
		.catch(
			error => {
				console.error(error);
			}
		)
	return resData;
}

export default postRequest;