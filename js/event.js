import { $ } from "./util.js";
import { expense } from "./main.js";
import { getItemData } from "./expenseApp.js";

function addNewList() {
	expense.addListData(getItemData());
}

function removeListItem(e) {
	if (e.target.tagName == 'BUTTON')
		expense.removeListData(e.target.value)
}

function hideAddContainer() {
	$('.add_container').classList.remove('container_show');
}

function showAddContainer() {
	$('.add_container').classList.add('container_show');
}

function changeLenderType(e) {
	if (e.target.tagName == "INPUT") {
		let type = Array.from(document.getElementsByName('listType')).find(e => e.checked).value;
		expense.setLenderType(type);
		expense.renderList();
	}
}

function addEventHook() {
	$('.new_list').addEventListener('click', showAddContainer);
	$('.cancel').addEventListener('click', hideAddContainer);
	$('.submit').addEventListener('click', addNewList);
	$('.expense_list').addEventListener('click', removeListItem);
	$('.list_select').addEventListener('click', changeLenderType);
}

export { addEventHook };
