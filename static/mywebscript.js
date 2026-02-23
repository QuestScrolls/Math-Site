document.addEventListener('DOMContentLoaded', () => {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const responseDiv = document.getElementById('system_response');

    const showResult = (result) => {
        responseDiv.innerHTML = `Result: ${result}`;
    };

    const showError = (msg) => {
        responseDiv.innerHTML = `Error: ${msg}`;
    };

    const performOperation = async (operation) => {
        const n1 = parseFloat(num1.value);
        const n2 = parseFloat(num2.value);

        if (isNaN(n1) || isNaN(n2)) {
            showError('Please enter valid numbers in both fields.');
            return;
        }

        responseDiv.innerHTML = 'Loading...';

        try {
            const response = await fetch(`/${operation}?num1=${n1}&num2=${n2}`);
            const data = await response.json();

            if (response.ok) {
                showResult(data.result);
            } else {
                showError(data.error || 'Unknown error');
            }
        } catch (error) {
            showError('Network error: ' + error.message);
        }
    };

    document.getElementById('btnAdd').addEventListener('click', () => performOperation('sum'));
    document.getElementById('btnSub').addEventListener('click', () => performOperation('sub'));
    document.getElementById('btnMul').addEventListener('click', () => performOperation('mul'));
});
