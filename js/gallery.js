const searchInput = document.getElementById('search');
const cars = document.querySelectorAll('.car-card');

searchInput.addEventListener('input', () => {
    const searchName = searchInput.value.toLowerCase();
    cars.forEach(car => {
        const name = car.dataset.name.toLowerCase();
        car.style.display = name.includes(searchName) ? 'block' : 'none';
    });
});
