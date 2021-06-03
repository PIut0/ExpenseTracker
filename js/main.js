import { addEventHook } from "./event.js";
import { expenseApp } from "./expenseApp.js";
import { getLocalStorageData } from "./localStorage.js";

export let expense = new expenseApp(getLocalStorageData());
addEventHook();
expense.renderList();
