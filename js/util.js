
const $ = (selector) => document.querySelector(selector);

function changeDateFormat(date) {
	date = date.toString();
	let formatDate = date.replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3');
	return (formatDate);
}

function changeMoneyFormat(money) {
	let formatter = new Intl.NumberFormat('en-US', {
		currency: 'USD',
		minimumFractionDigits: 0
	})
	return (formatter.format(money));
}

function addDateZero(date) {
	if (date.length <= 1)
		date = "0" + date;
	return (date);
}

function clearInputData() {
	$('#date').valueAsDate = new Date();
	$('#content').value = '';
	$('#amount').value = '';
	$('#plus').checked = false;
	$('#minus').checked = false;
}

export { $, changeDateFormat, changeMoneyFormat, addDateZero, clearInputData };
