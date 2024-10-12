const calendarBody = document.getElementById('calendarBody');
const monthYear = document.getElementById('monthYear');
const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
];

function generateCalendar(month, year) {
    calendarBody.innerHTML = '';
    //monthYear.innerHTML = `${monthNames[month]} ${year}`;

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    
    let date = 1;
    for (let i = 0; i < 6; i++) {
        let row = document.createElement('tr');

        for (let j = 0; j < 7; j++) {
            let cell = document.createElement('td');
 if (i === 0 && j < firstDay) {
                let cellText = document.createTextNode('');
                cell.appendChild(cellText);
            } else if (date > daysInMonth) {
                break;
            } else {
                let cellText = document.createTextNode(date);
                cell.appendChild(cellText);
                date++;
            }
            row.appendChild(cell);
        }
        calendarBody.appendChild(row);
    }
}

prevMonthButton.addEventListener('click', () => {
    currentMonth = (currentMonth - 1 + 12) % 12;
    if (currentMonth === 11) currentYear--;
    generateCalendar(currentMonth, currentYear);
});

nextMonthButton.addEventListener('click', () => {
    currentMonth = (currentMonth + 1) % 12;
    if (currentMonth === 0) currentYear++;
    generateCalendar(currentMonth, currentYear);
});

generateCalendar(currentMonth, currentYear);