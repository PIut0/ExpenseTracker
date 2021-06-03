import { $, addDateZero } from "./util.js";
import { expense } from "./app.js";
import { getItemData } from "./expenseApp.js";


function addNewList() {
	expense.addListData(getItemData());
}

function removeListItem() {
	expense.removeListData(this.value);
}

function hideAddContainer() {
	$('.add_container').classList.remove('container_show');
}

function showAddContainer() {
	$('.add_container').classList.add('container_show');
}

function addRemoveEventHook() {
	document.querySelectorAll('.delete_btn').forEach(e => {
		e.addEventListener('click', removeListItem);
	});
}

function addEventHook() {
	$('.new_list').addEventListener('click', showAddContainer);
	$('.cancel').addEventListener('click', hideAddContainer);
	$('.submit').addEventListener('click', addNewList);
	$('#year').addEventListener('keyup', () => {
		if ($('#year').value.toString().length === 4)
			$('#month').focus();
	});
	$('#month').addEventListener('keyup', () => {
		if ($('#month').value.toString().length === 2)
			$('#day').focus();
	});
}

export { addEventHook, addRemoveEventHook };
