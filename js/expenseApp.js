import { addEventHook } from "./event.js";
import { setLocalStorageData } from "./localStorage.js";
import { $, changeDateFormat, changeMoneyFormat, addDateZero, clearInputData } from "./util.js";

class expenseApp {
	constructor(localStorageData) {
		this.incomeCount = localStorageData.incomeCount;
		this.expenseCount = localStorageData.expenseCount;
		this.balance = localStorageData.balance;
		this.expenseList = localStorageData.expenseList;
	}

	get expenseData() {
		let ret = {};

		ret.incomeCount = parseInt(this.incomeCount);
		ret.expenseCount = parseInt(this.expenseCount);
		ret.balance = parseInt(this.balance);
		ret.expenseList = this.expenseList;
		return (ret);
	}

	setBalance() {
		this.balance = this.incomeCount - this.expenseCount;
	}

	renderBalance() {
		$('.balance_data').innerHTML = this.balance;
		$('.income_data').innerHTML = this.incomeCount;
		$('.expense_data').innerHTML = this.expenseCount;
	}

	renderList() {
		$('.expense_list').innerHTML = ''
		this.expenseList.forEach(element => {
			renderItem(element);
		});
		this.renderBalance();
		addEventHook();
	}

	addListData(data) {
		if (data.amountType == "plus")
			this.incomeCount += parseInt(data.amount);
		else
			this.expenseCount += parseInt(data.amount);

		this.setBalance();
		this.expenseList.push(data);
		this.expenseList.sort((a, b) => a.date - b.date);
		setLocalStorageData(this.expenseData);
		this.renderList();
	}

	removeListData(id) {
		for(let i = 0; i < this.expenseList.length; i++) {
			if (this.expenseList[i].id == id) {
				let data = this.expenseList[i];
				if (data.amountType == "plus")
					this.incomeCount -= parseInt(data.amount);
				else
					this.expenseCount -= parseInt(data.amount);
				this.expenseList.splice(i,1);
				break ;
			}
		}
		this.setBalance();
		setLocalStorageData(this.expenseData);
		this.renderList();
	}
}

function renderItem(data) {
	let prefix = (data.amountType == "plus") ? "+" : "-";
	let element = document.createElement('li');
	element.innerHTML = `
	<div class="list_item">
		<button class="delete_btn minus_color" value="${data.id}">Del</button>
		<div class="item_content">
			<div class="content_text">
				<h5>${changeDateFormat(data.date)}</h5>
				<h3>${data.content}</h3>
			</div>
			<span class="${data.amountType}_color money">${prefix}${changeMoneyFormat(data.amount)}</span>
		</div>
	</div>`;
	$('.expense_list').appendChild(element);
}

function getItemData() {
	let id = Math.floor(Math.random() * 100000000);
	let date = "" + $('#year').value + addDateZero($('#month').value) + addDateZero($('#day').value);
	let content = $('#content').value;
	let amount = $('#amount').value;

	if (date.length != 8)
		throw alert('날짜를 다시 입력해 주세요.');
	if (!$('#plus').checked && !$('#minus').checked)
		throw alert('금액 종류를 선택해주세요');
	if (!content)
		throw alert('내용을 입력해주세요.');
	if (!amount)
		throw alert('금액을 입력해주세요.');

	let amountType = $('#plus').checked ? "plus" : "minus";
	let ret = {};
	ret.id = id;
	ret.date = date;
	ret.content = content;
	ret.amount = amount;
	ret.amountType = amountType;
	clearInputData();
	return (ret);
}

export { expenseApp, getItemData }
