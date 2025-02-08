// Variables

var tableID;
var rowID;
var allTables = document.querySelectorAll("table");
var lastTable = allTables[allTables.length - 1];



/**
 * It creates a table element, assigns it an id, and appends it to a div element.
 * @param divId - the id of the div you want to add the table to
 * @param thisTableID - The ID of the table you want to create.
 * @param [tableClass=default-table] - This is the class name of the table. If you don't want to use a
 * class, just leave it blank.
 */
const addTable = function (divId, thisTableID, tableClass = 'default-table') {
	let thisTable = document.createElement('table');
	thisTable.id = thisTableID;
	tableID = thisTable.id;
	if (tableClass != null) thisTable.className = tableClass;
	document.querySelector(`#${divId}`).appendChild(thisTable);

};

/*
	// Create row object
	@params Row ID
	@params Counter that you will probably get from a for loop calling the function
*/


/**
 * This function creates a new row element, adds a class and an id to it, and then appends it to the
 * table.
 * @param addTo - the id of the table to add the row to
 * @param thisRowID - The ID of the row you want to add to.
 * @param counter - This is the number of rows that have been added.
 * @param [rowClass=not] - the class of the row to be added.
 * @param [name] - the name of the row
 */

const addRow = function (addTo, thisRowID, counter, rowClass = 'not', name = "") {
	let row = document.createElement('tr');
	rowClass != null && row.classList.add(rowClass);
	row.id = `${thisRowID}_${counter}`;
	rowID = row.id;
	row.name = name;

	document.querySelector(`#${addTo}`).appendChild(row);
};

/**
 * It creates a thead element, adds an id to it, and appends it to the table element with the id of
 * addTo.
 * @param addTo - the id of the table you want to add the thead to
 * @param thistheadID - the id of the thead element
 * @param [counter=1] - This is the counter for the thead ID.
 * @param [theadClass=not] - the class name of the thead element.
 */
const thead = function (addTo, thistheadID, counter = '1', theadClass = 'not') {
	let thead = document.createElement('thead');
	theadClass != null && thead.classList.add(theadClass);
	thead.id = `${thistheadID}_${counter}`;
	theadid = thead.id;
	document.querySelector(`#${addTo}`).appendChild(thead);
};

/**
 * The function creates a tbody element, adds a class to it, and appends it to the table element with
 * the id of the argument passed to the function.
 * @param addTo - The ID of the table you want to add the tbody to.
 * @param thistbodyID - This is the ID of the tbody that you want to add to.
 * @param [counter=1] - This is the counter for the tbody ID.
 * @param [tbodyClass=not] - This is the class name of the tbody.
 */

const tbody = function (addTo, thistbodyID, counter = '1', tbodyClass = 'not') {
	let tbody = document.createElement('tbody');
	tbodyClass != null && tbody.classList.add(tbodyClass);
	tbody.id = `${thistbodyID}_${counter}`;
	tbodyid = tbody.id;
	document.querySelector(`#${addTo}`).appendChild(tbody);
};

/**
 * The function creates a tfoot element, adds a class to it, and appends it to the table element with
 * the id of the first argument.
 * @param addTo - the id of the table you want to add the tfoot to.
 * @param thistfootID - the id of the tfoot element
 * @param counter - This is the number of the table.
 * @param [tfootClass=not] - the class name of the tfoot element.
 */
const tfoot = function (addTo, thistfootID, counter, tfootClass = 'not') {
	let tfoot = document.createElement('tfoot');
	tfootClass != null && tfoot.classList.add(tfootClass);
	tfoot.id = `${thistfootID}_${counter}`;
	tfootid = tfoot.id;
	document.querySelector(`#${addTo}`).appendChild(tfoot);
};


/**
 * It creates a table header element, sets the colspan attribute, and appends it to the table row.
 * @param text - the text to be displayed in the header
 * @param [headClass=not] - the class of the header.
 * @param [colspan=1] - the number of columns the header spans
 * @param headerid - the id of the header
 */
const makeHeader = function (text, headClass = 'not', colspan = '1', headerid) {
	let header = document.createElement('th');
	headClass != null && header.classList.add(headClass);
	if (headerid != null) {
		header.id = headerid;
	}
	header.setAttribute('colspan', colspan);
	header.textContent = text;
	document.querySelector(`#${rowID}`).appendChild(header);
};

const makeHeader2 = function (text, headClass = 'not', colspan = '1', headerid, addTo) {
	let header = document.createElement('th');
	headClass != null && header.classList.add(headClass);
	if (headerid != null) {
		header.id = headerid;
	}
	header.setAttribute('colspan', colspan);
	header.textContent = text;
	document.querySelector(`#${addTo}`).appendChild(header);
};

const makeHeaders = function (headers) {
	headers.forEach(header => makeHeader(header));
};

/**
 * It creates a table data element, adds a class, sets the colspan, adds an id if one is provided, and
 * adds the data to the table row.
 * @param arr - The data to be added to the table.
 * @param [dataClass=not] - The class of the data.
 * @param [colspan=1] - The number of columns the data should span.
 * @param [dataID=null] - The ID of the data element.
 * @param [addTo] - The ID of the row you want to add the data to.
 */
const addData = function (arr, dataClass = 'not', colspan = '1', dataID = null, addTo = `#${rowID}`) {

	let data = document.createElement('td');
	data.classList.add(dataClass);
	data.setAttribute('colspan', colspan);
	data.innerHTML = arr;
	if (dataID != null) data.id = dataID;
	document.querySelector(`${addTo}`).appendChild(data);
};

const addDataArr = function (dataArr) {
	dataArr.forEach((dataItem) => addData(dataItem));
}


/**
 * It creates a new table data element, assigns it an id and class, and then appends it to the table
 * row with the id that is passed to the function.
 * @param addto - the id of the row you want to add the empty data to
 * @param id - the id of the element
 * @param [dataClass=not] - This is the class that will be added to the td element.
 * @param [colspan=1] - the number of columns to span
 */
const addemptyData = function (addto, id, dataClass = 'not', colspan = '1') {
	let emptydata = document.createElement('td');
	emptydata.id = id;
	emptydata.classList.add(dataClass);
	emptydata.setAttribute('colspan', colspan);
	document.querySelector(`#${addto}`).appendChild(emptydata);
};

/**
 * It adds an input element to a parent element.
 * @param addTo - the id of the element to add the input to
 * @param type - the type of input you want to create.
 * @param [text=Complete] - The text that will be displayed on the button.
 * @param id - the id of the input element
 * @param listener - the function to be called when the button is clicked
 * @param [buttonClass=tablebuttons] - the class of the button
 * @param [td=true] - true/false - if true, the input will be wrapped in a td element. If false, it
 * will be added directly to the element specified in addTo.
 * @param [tdClass=null] - the class of the td element that will hold the input element
 * @param [colspan=1] - The number of columns the button should span.
 * @param [title=null] - The title of the button.
 * @param [eventtype=click] - the type of event to listen for. Default is 'click'
 */


const addInput = function (addTo, type, text = 'Complete', id, listener, buttonClass = 'tablebuttons', td = true, tdClass = null, colspan = 1, title = null, eventtype = 'click', tdID = null) {
	let button = document.createElement('input');
	button.type = type;
	button.id = id;
	if (button.type == "text" && title != null) button.setAttribute("placeholder", title);
	if (button.type == "button" && title != null) button.title = title;
	td !== undefined ? td = td : td = true;
	if (!td) {
		if (buttonClass !== null) button.classList.add(buttonClass);
		if (listener != '') {
			button.addEventListener(eventtype, listener);
		}
		button.value = text;
		document.querySelector(`#${addTo}`).appendChild(button);
	}
	else {
		let buttonHolder = document.createElement('td');
		if (tdClass != null) {
			buttonHolder.classList.add(tdClass);
		}
		if (tdID != null) {
			buttonHolder.id = tdID;
		}
		if (colspan != 1) {
			buttonHolder.setAttribute('colspan', colspan);
		}
		let button = document.createElement('input');
		button.type = type;
		button.id = id;
		if (buttonClass !== null) button.classList.add(buttonClass);
		if (listener != '') {
			button.addEventListener(eventtype, listener);
		}
		button.value = text;
		buttonHolder.appendChild(button);
		document.querySelector(`#${addTo}`).appendChild(buttonHolder);
	}
};

/**
 * It creates an input element, sets the type, id, and value, then appends it to the row with the id of
 * rowID.
 * @param type - the type of input you want to create.
 * @param [text=Complete] - the text that will be displayed on the button
 * @param id - the id of the button
 * @param rowID - the id of the row that the button will be added to
 */
const addhiddenInput = function (type, text = 'Complete', id, rowID) {
	let button = document.createElement('input');
	button.type = type;
	button.id = id;
	button.value = text;
	//buttonHolder.appendChild(button);
	document.getElementById(`${rowID}`).appendChild(button);
};

/**
 * This function creates a new `hr` element, adds a class to it, and then appends it to the element
 * with the id that is passed to the function.
 * @param divId - The id of the div you want to add the hr to.
 * @param [lineClass=displayspacer] - This is the class that will be applied to the hr element.
 */
const addhr = function (divId, lineClass = 'displayspacer', id) {
	let datahr = document.createElement('hr');
	datahr.classList.add(lineClass);
	datahr.id = id;
	document.querySelector(`#${divId}`).appendChild(datahr);
};

/**
 * It creates a div element, adds an ID, text, and class to it, and then adds it to the element
 * specified by the addTo parameter.
 * @param addTo - The element to add the div to.
 * @param [text=null] - The text to be added to the div.
 * @param [ID] - The ID of the div you want to create.
 * @param [divClass=null] - The class name of the div.
 */
const addDiv = (addTo, text = null, ID = undefined, divClass = null) => {
	let thisDiv = document.createElement('div');
	if (ID !== undefined) thisDiv.id = ID;
	if (text !== null && text !== '') {
		thisDiv.textContent = text;
	}
	if (divClass !== undefined) thisDiv.className = divClass;
	document.querySelector(`${addTo}`).appendChild(thisDiv);
};


/**
 * It creates an option element, sets its value and textContent, and then adds it to the select element
 * with the id of addTo.
 * @param addTo - The ID of the select element to add the option to.
 * @param value - The value of the option.
 * @param selected - true/false
 * @param text - The display text of the option.
 */
const addOption = function (addTo, value, selected, text = '') {
	let option = document.createElement('option');
	option.value = value;
	if (text == "") {
		option.textContent = value;
	} else {
		option.textContent = text;
	}
	if (selected) option.selected = selected;
	document.querySelector(`#${addTo}`).appendChild(option);
};

/**
 * It creates a select element and appends it to the element with the ID passed in as the first
 * argument.
 * @param addTo - The ID of the element you want to add the select to.
 * @param ID - The ID of the select element
 * @param [td=true] - if true, it will create a td element and append the select element to it.
 * @param [tdClass=not] - The class of the td element that will be created.
 * @param [selectClass=dropdown] - The class of the select element
 * @returns Nothing.
 */
const addSelect = function (addTo, ID, td = true, tdClass = 'not', selectClass = 'dropdown', eventListener = null, eventType = null) {
	let dropdown = document.createElement('select');
	dropdown.id = ID;
	dropdown.classList.add(selectClass);
	if (eventListener !== null && eventType !== null) dropdown.addEventListener(eventType, eventListener);
	if (td) {
		let dropDowntd = document.createElement('td');
		dropDowntd.id = `td_${ID}`;
		dropDowntd.classList.add(tdClass)
		document.querySelector(`#${addTo}`).appendChild(dropDowntd);
		document.querySelector(`#${dropDowntd.id}`).appendChild(dropdown);
		return;
	}
	document.querySelector(`#${addTo}`).appendChild(dropdown);
};

/**
 * It creates a textarea element, adds an id and class to it, and then adds it to the DOM.
 * @param addTo - The ID of the element you want to add the textarea to.
 * @param ID - The ID of the textarea
 * @param [td=true] - true/false - whether or not to add a td element to the table row
 * @param [tdClass=not] - The class of the td element that will be created.
 * @param [areaClass=text-input] - The class of the textarea.
 */
const addTextArea = function (addTo, ID, td = true, tdClass = 'not', areaClass = 'text-input') {
	let textarea = document.createElement('textarea');
	textarea.id = ID;
	textarea.classList.add(areaClass);
	let textareaTd = document.createElement('td');
	if (td) {
		textareaTd.id = `td_${ID}`;
		textareaTd.classList.add(tdClass);
		document.querySelector(`#${addTo}`).appendChild(textareaTd);
		document.querySelector(`#${textareaTd.id}`).appendChild(textarea);
	}
	document.querySelector(`#${addTo}`).appendChild(textarea);
}


/**
 * It creates a checkbox element, sets its type, id, and value, and then adds it to the element with
 * the ID of the first argument.
 * @param addTo - The ID of the element you want to add the checkbox to.
 * @param ID - The ID of the checkbox.
 * @param is_checked - true or false
 * @param value - The value of the checkbox.
 */
const addCheckbox = function (addTo, ID, is_checked, value, eventType = 'click', eventListener = null) {
	let checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.id = ID;
	if (eventListener !== null && eventType !== null) checkbox.addEventListener(eventType, eventListener);
	checkbox.value = value;
	if (is_checked) checkbox.checked = true;
	document.querySelector(`${addTo}`).appendChild(checkbox);
}

/**
 * It creates a label element, sets the for attribute to the value of the forid parameter, sets the
 * innerHTML to the value of the value parameter, sets the id attribute to the value of the id
 * parameter, and then appends the label to the element with the id of the addTo parameter.
 * @param addTo - The id of the element you want to add the label to.
 * @param forid - the id of the input you want to add the label to
 * @param value - The text that will be displayed on the label.
 * @param [id] - the id of the element you want to add the label to
 */
const addlabel = function (addTo, forid, value, id = "") {
	let label = document.createElement('label');
	label.setAttribute("for", forid);
	label.innerHTML = value;
	label.id = id;
	document.querySelector(`#${addTo}`).appendChild(label);
}


/**
 * It creates an anchor element, sets the ID, text, target, href, and download attributes, and then
 * appends it to the element with the ID provided in the first argument.
 * @param addTo - the ID of the element you want to add the link to
 * @param ID - the ID of the link
 * @param [text=put in some text please] - the text that will be displayed on the link
 * @param providedLink - the link you want to add
 * @param [target] - _blank, _self, _parent, _top, framename
 * @param [download=false] - if you want to download the file, set this to the name of the file.
 */
const addHref = function (addTo, ID, text = "put in some text please", providedLink, target = "", download = false) {
	let link = document.createElement('a');
	link.id = ID;
	if (text !== null && text !== '') {
		link.textContent = text;
	}
	link.target = target;
	link.href = providedLink;
	download != false ? link.download = download : false;
	document.querySelector(`#${addTo}`).appendChild(link);
}

/**
 * It creates a progress element, sets its ID, value, and max attributes, and then appends it to the
 * element with the ID that is passed to the function.
 * @param addTo - The ID of the element you want to add the progress bar to.
 * @param ID - The ID of the progress bar.
 * @param [value=0] - The current value of the progress bar.
 * @param [max=100] - The maximum value of the progress bar.
 */
const addprogress = function (addTo, ID, value = 0, max = 100) {
	let progress = document.createElement('progress');
	progress.id = ID;
	progress.value = value;
	progress.max = max;
	document.querySelector(`#${addTo}`).appendChild(progress);
}
/**
 * It creates a div element, assigns it an id, and appends it to the element with the id of `appendTo`
 * using the `where` parameter.
 * @param id - the id of the div you want to create
 * @param appendTo - The id of the element you want to append to.
 * @param where - 'beforebegin', 'afterbegin', 'beforeend', 'afterend'
 */
const appendDiv = function (id, appendTo, where) {
	let div = document.createElement('div');
	div.id = id;
	document.querySelector(`#${appendTo}`).insertAdjacentElement(where, div);
}


/**
 * It creates a heading element, sets its text content to the content argument, and then adds it to the
 * element specified by the addTo argument.
 * @param size - the size of the heading (1-6)
 * @param addTo - The element you want to add the heading to.
 * @param content - The text content of the heading.
 * @param headID - ID of the heading.
 */
const addHeading = function (size, addTo, content, headID = null) {
	let heading = document.createElement(`h${size}`);
	if (headID !== null) heading.id = headID;
	heading.textContent = content;
	document.querySelector(addTo).appendChild(heading);

}

/**
 * It creates a radio button, sets its type, name, value, and checked status, and then adds it to the
 * DOM.
 * @param addTo - The element to add the radio button to.
 * @param btnName - The name of the radio button group.
 * @param btnValue - The value of the radio button.
 * @param [is_checked=false] - if true, the radio button will be checked.
 */
const addRadioButton = function (addTo, btnName, btnValue, is_checked = false) {
	let radioButton = document.createElement('input');
	radioButton.type = 'radio';
	radioButton.name = btnName;
	radioButton.value = btnValue;
	radioButton.checked = is_checked;
	document.querySelector(addTo).appendChild(radioButton);

}

/**
 * It creates a div, an input, and a span, then adds them to the DOM.
 * @param addTo - The element to add the notification to.
 * @param btnID - The ID of the button you want to add.
 * @param counterID - The ID of the counter element.
 * @param [onclickListener=null] - This is the function that will be called when the button is clicked.
 */
const addNotification = function (addTo, btnID, counterID, onclickListener = null) {
	let notificationContainer = document.createElement('div');
	let notificationButton = document.createElement('input');
	let notificationCounters = document.createElement('span');
	notificationContainer.className = "button";
	notificationContainer.id = `${btnID}_td`;
	notificationButton.className = "notification_button";
	notificationButton.id = btnID;
	notificationButton.type = "button";
	notificationCounters.className = "button__badge";
	notificationCounters.id = counterID;
	notificationButton.onclick = onclickListener;
	document.querySelector(addTo).appendChild(notificationContainer);
	notificationContainer.appendChild(notificationButton);
	notificationContainer.appendChild(notificationCounters);
}

const addCRMNotification = function (addTo, btnID, counterID, onclickListener = null, btnText, btnclass = 'tablebuttons') {
	let notificationContainer = document.createElement('div');
	let notificationButton = document.createElement('input');
	let notificationCounters = document.createElement('span');
	notificationContainer.className = "crm_button";
	notificationButton.className = btnclass;
	notificationButton.id = btnID;
	notificationButton.type = "button";
	notificationButton.value = btnText
	notificationCounters.className = "button__badge";
	notificationCounters.id = counterID;
	notificationButton.onclick = onclickListener;
	document.querySelector(addTo).appendChild(notificationContainer);
	notificationContainer.appendChild(notificationButton);
	notificationContainer.appendChild(notificationCounters);
}
/**
 * It creates a switch (checkbox) and adds it to the element with the ID of addTo.
 * @param addTo - The element you want to add the switch to.
 * @param addFor - The ID of the checkbox
 * @param labelClass - The class of the label element.
 * @param checkboxID - The ID of the checkbox you want to create.
 */
function createSwitch(addTo, labelClass, checkboxID, on_off, spanID) {
	let label = document.createElement('label');
	label.className = labelClass;
	label.setAttribute("for", checkboxID);
	let checkbox = document.createElement('input');
	checkbox.type = "checkbox";
	checkbox.id = checkboxID;
	checkbox.checked = on_off;
	let span = document.createElement('span');
	span.classList = "slider round";
	span.id = spanID;
	document.querySelector(`${addTo}`).appendChild(label);
	label.appendChild(checkbox);
	label.appendChild(span);
}

/**
 * This function creates a list element and appends it to the element with the ID of addTo.
 * @param addTo - The element you want to add the list to.
 * @param listType - The type of list you want to create. Either "ul" or "ol".
 * @param listID - The ID of the list you want to add.
 * @param [listClass=default-list] - The class name of the list.
 */

const addList = function (addTo, listType, listID, listClass = 'default-list') {
	let list = listType == "ul" ? document.createElement("ul") : document.createElement('ol');
	list.id = listID;
	list.className = listClass;
	$(addTo).appendChild(list);
}

/**
 * It creates a new list item, gives it an ID and a value, and then adds it to the list.
 * @param addTo - The ID of the element you want to add the list item to.
 * @param itemID - The ID of the list item.
 * @param value - The text that will be displayed in the list item.
 */
const addListItem = function (addTo, itemID = null, value) {
	let listItem = document.createElement('li');
	if (itemID !== null) listItem.id = itemID;
	listItem.textContent = value;
	$(addTo).appendChild(listItem);
}

const addListItem2 = function (addTo, itemID = null, value, spanID = null, title = null) {
	let listItem = document.createElement('li');
	if (itemID !== null) listItem.id = itemID;
	let span = document.createElement('span');
	span.textContent = value;
	if (spanID !== null) span.id = spanID;
	if (title !== null) span.title = title;
	listItem.appendChild(span);
	$(addTo).appendChild(listItem);
}


const addtooltip = function (addto, value, divclass = "tooltip", spanclass = "tooltiptext") {
	let div = document.createElement("div");
	div.className = divclass;
	let tooltip = document.createElement("span");
	tooltip.className = spanclass;
	tooltip.textContent = value;
	div.appendChild(tooltip);
	$(addto).append(div);
}