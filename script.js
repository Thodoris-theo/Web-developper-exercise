function handleSubmit(event) {
    event.preventDefault(); 
    const inputElement = document.getElementById('form-input');
    const inputValue = parseFloat(inputElement.value);  

    if (inputValue <= 10) {
        alert("This number is less or equal to 10");
        inputElement.value = ''; 
        inputElement.focus(); 
    } else {
        confirm('The number is valid');
    }
}

window.onload = () => {
    document.getElementById('form-box').addEventListener('submit', handleSubmit);
};
