import { $, addDateZero } from "./util.js";
import { expense } from "./app.js";
import { getItemData } from "./expenseApp.js";


function addNewList() {
	expense.addListData(getItemData());
}

function removeListItem() {
	//console.log(this.value);
	expense.removeListData(this.value);
}

function hideAddContainer() {
	$('.add_container').classList.remove('container_show');
}

function showAddContainer() {
	$('.add_container').classList.add('container_show');
}

function addEventHook() {
	$('.new_list').addEventListener('click', showAddContainer);
	$('.cancel').addEventListener('click', hideAddContainer);
	$('.submit').addEventListener('click', addNewList);
	document.querySelectorAll('.delete_btn').forEach(e => {
		e.addEventListener('click', removeListItem);
	})
	//$('.delete_btn').addEventListener('click', removeListItem);
}

export { addEventHook };
