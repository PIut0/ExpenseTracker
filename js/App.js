import { addEventHook } from "./event.js";
import { expenseApp } from "./expenseApp.js";
import { $, changeDateFormat, changeMoneyFormat } from "./util.js"
import { getLocalStorageData, setLocalStorageData, clearLocalStorage } from "./localStorage.js";

//window.onload = () => {
//}

export let expense = new expenseApp(getLocalStorageData());
expense.renderList();


function test() {
	//clearLocalStorage();
	//let date = "" + $('#year').value + $('#month').value + $('#day').value;
	//let date = $('.delete_btn').value
	//console.log(date);
	//let test = 20200101;
	//console.log(changeDateFormat(test));
}

addEventHook();
test();
