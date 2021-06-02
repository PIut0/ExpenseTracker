
const $ = (selector) => document.querySelector(selector);

function hideAddContainer() {
	$('.add_container').classList.remove('container_show');
}

function showAddContainer() {
	$('.add_container').classList.add('container_show');
}

function addEventHook() {
	$('.new_list').addEventListener('click', showAddContainer);
	$('.cancel').addEventListener('click', hideAddContainer);
}

export { addEventHook, $ };
