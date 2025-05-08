const searchInput = document.getElementById('search');
const cars = document.querySelectorAll('.car-card');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    cars.forEach(car => {
        const name = car.dataset.name.toLowerCase();
        car.style.display = name.includes(query) ? 'block' : 'none';
    });
});
