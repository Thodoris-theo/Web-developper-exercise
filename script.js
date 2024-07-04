function handleSubmit(event) {
    event.preventDefault(); 
    const inputValue = document.getElementById('form-input').value;

    if(inputValue<=10)
        alert("This number is less or equal to 10");
            else
                confirm('The number is valid');
    }
    window.onload = () => {
        document.getElementById('form-box').addEventListener('submit', handleSubmit);
    };