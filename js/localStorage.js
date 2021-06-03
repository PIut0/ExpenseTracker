const localStorage = window.localStorage;

function initLocalStorageData() {
	let ret = {
		"incomeCount": 0,
		"expenseCount": 0,
		"balance": 0,
		"expenseList": []
	}

	return (ret);
}

function getLocalStorageData() {
	let ret = localStorage.getItem('expenseData');

	if (!ret || !(ret = JSON.parse(ret)).expenseList.length)
		ret = initLocalStorageData();

	return (ret);
}

function setLocalStorageData(data) {
	localStorage.setItem('expenseData', JSON.stringify(data));
}

function clearLocalStorage() {
	localStorage.removeItem('expenseData');
}

export { getLocalStorageData, setLocalStorageData, clearLocalStorage };
