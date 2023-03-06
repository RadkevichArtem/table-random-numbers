// массив с 30 случайными числами от 1 до 99
let arr = [];
for (let i = 1; i <= 30; i++) {
    arr.push(Math.floor(Math.random() * 100));
}

// добавление таблицы
const myTable = document.createElement('table')
myTable.id = 'myTab'
document.body.appendChild(myTable)

// таблица 5х6 со случаными числами из массива, оранжевая, если значение больше 50
iter = 0
for (let r = 1; r <= 5; r++) {
    let row = document.createElement('tr');
    for (let c = 1; c <= 6; c++) {
        let data = document.createElement('td');
        let value = arr[iter];
        data.innerHTML = String(value);
        if (value > 50) { data.className += ' highlight'; };
        row.appendChild(data);
        iter++;
    };
    myTable.appendChild(row);

}

// функция принимает в качестве аргумента ID таблицы и добавляет в нее случайное число
function addNumber(tabId) {
    let tab = document.getElementById('myTab')
    let value = Math.floor(Math.random() * 100);
    let data = document.createElement('td');
    data.innerHTML = String(value);
    if (value > 50) { data.className += ' highlight'; };
    let maxCols = tab.firstElementChild.childNodes.length;
    let currCols = tab.lastElementChild.childNodes.length;
    let row = currCols == maxCols ? document.createElement('tr') : tab.lastElementChild;
    row.appendChild(data);
    tab.appendChild(row);

}

// кнопка перед таблицей, по нажатию - добавление случайного числа
myTable.insertAdjacentHTML('beforebegin',
    '<button class="button" onclick="addNumber(myTab)">Добавить число</button>')
