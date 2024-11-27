export const get = async (i = "localhost", h = {}) => {
	const response = await fetch(i, {
		headers: h,
	});
	if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
	return response.text();
};

export const post = async (i = "localhost", b = "", h = {}) => {
	const response = await fetch(i, {
		method: "POST",
		headers: h,
		body: b,
	});
	if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
	return response.text();
};
