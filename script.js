const operations = new Set(['-', '+', '*', '/', '='])

function InsertValue(number)
{
    const last_number_part = document.form.result.value.split(/[-+*/=]/).at(-1)
    const is_last_operation = operations.has(document.form.result.value.at(-1))	
    if(number ==='.' && is_last_operation){
        document.form.result.value = document.form.result.value + '0'
    }

    if (number === '.' && last_number_part.includes('.')) {
		alert('Число уже содержит точку')
		return
	}

    if (document.form.result.value.at(-1) === '0' && number != '.'){
        document.form.result.value = document.form.result.value.slice(0, -1) + number
    }
    else{
        document.form.result.value = document.form.result.value + number
    }
        
        
}
function InsertOperation(operation) {
	const is_last_operation = operations.has(document.form.result.value.at(-1))	

	if (document.form.result.value.at(-1) === '.') {
		alert('Введите число или уберите точку')
		return
	}

	
	if (is_last_operation) {
		document.form.result.value = document.form.result.value.slice(0, -1) + operation
	} else {
		document.form.result.value = document.form.result.value + operation
	}
}

function Clean() {
	document.form.result.value = '0'
}

function Back() {
	let temp = document.form.result.value
	document.form.result.value = temp.substring(0, temp.length - 1)
}

function Equal() {
	let res = document.form.result.value
	if (res) document.form.result.value = eval(res)
}