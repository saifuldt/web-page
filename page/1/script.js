const input = document.querySelector("#inputSalary");
const button = document.querySelector("#submitButton");
const result = document.querySelector("#result");

 
      const  bonus = function (input) {
      	return (input.value) * 0.2;
      }

const bbb = function(event){
	event.preventDefault();
	const bonn = `${Math.round(bonus(input))} Tk.`;
	result.innerHTML=bonn;
}

button.addEventListener('click', bbb );