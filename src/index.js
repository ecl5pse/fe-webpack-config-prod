import './assets/sass/style.scss';
import './assets/sass/reset.scss';

fetch("./data/employees.json")
.then(response => response.json())
.then(console.log)
.catch(console.error)

