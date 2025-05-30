export const getStringedDate = (createdDate) => {
	const year = new Date(createdDate).getFullYear();
	let month = new Date(createdDate).getMonth() + 1;
	let date = new Date(createdDate).getDate();

	if (month < 10) {
		month = `0${month}`;
	}
	if (date < 10) {
		date = `0${date}`;
	}

	return `${year}-${month}-${date}`;
};
