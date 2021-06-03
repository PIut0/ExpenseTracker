import { addEventHook } from "./event.js";
import { expenseApp } from "./expenseApp.js";
import { getLocalStorageData } from "./localStorage.js";
import { clearInputData } from "./util.js";

export let expense = new expenseApp(getLocalStorageData());
addEventHook();
clearInputData();
expense.renderList();
