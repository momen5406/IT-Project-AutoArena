function filterCars() {
    const selectedModel = document.getElementById('modelFilter').value;
    const modelGroups = document.querySelectorAll('.model-group');

    modelGroups.forEach(group => {
        const modelYear = group.getAttribute('data-model');

        if (selectedModel === 'all' || modelYear === selectedModel) {
            group.style.display = 'block';
        } else {
            group.style.display = 'none';
        }
    });
}