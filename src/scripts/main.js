'use strict';

const tr = document.querySelectorAll('tr');

const listOfPosition = [];

for (let i = 1; i < tr.length - 1; i++) {
  listOfPosition.push(tr[i].cells[1].textContent);
}

const table = document.querySelector('table');
const thead = table.querySelector('thead');
const headerRow = thead.querySelector('tr');
const newTh = document.createElement('th');

newTh.textContent = 'Position';
headerRow.insertBefore(newTh, headerRow.children[4]);

const tfoot = document.querySelector('tfoot');
const footerRow = tfoot.querySelector('tr');
const newFtTh = document.createElement('th');

newFtTh.textContent = 'Position';
footerRow.insertBefore(newFtTh, footerRow.children[4]);

const tbody = document.querySelector('tbody');
const bodyTrRow = tbody.querySelectorAll('tr');

for (let i = 0; i < bodyTrRow.length; i++) {
  const newTd = document.createElement('td');

  newTd.textContent = listOfPosition[i];
  bodyTrRow[i].insertBefore(newTd, bodyTrRow[i].children[4]);
}
