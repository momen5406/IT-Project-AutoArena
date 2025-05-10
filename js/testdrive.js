function showConfirmation() {

    document.getElementById('confirmation-message').style.display = 'block';

    document.getElementById('modelFilter').value = '----';
    document.getElementById('test-drive-date').value = '';
    document.getElementById('test-drive-time').value = '';
    document.getElementById('title').value = '---';
    document.getElementById('first-name').value = '';
    document.getElementById('last-name').value = '';
    document.getElementById('telephone').value = '';
    document.getElementById('email').value = '';
    let checkboxes = document.getElementsByName('contact_method');
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
    setTimeout(function () {
        document.getElementById('confirmation-message').style.display = 'none';
    }, 4000);
}

const carData = {
    "Lamborghini Temerario": {
        image: "../img/gallery/lambo.png",
    },
    "Mercedes-Benz S-Class": {
        image: "../img/gallery/Mercedes-Benz S-Class.jpg",
    },
    "Mercedes-AMG GT Black Series 2025": {
        image: "../img/gallery/amg.jpg",

    },
    "Ferrari 812 Superfast": {
        image: "../img/gallery/Ferrari-812-Superfast.jpg",

    },
    "Porsche 911": {
        image: "../img/gallery/Porsche-911-GT3-RS-2024.jpg",
    },
    "Lamborghini Urus": {
        image: "../img/gallery/urus.png",

    },
    "BMW X5": {
        image: "../img/gallery/BMW X5.jpg",

    },
    "Koenigsegg Jesko 2025": {
        image: "../img/gallery/kong.png",
    }
};

document.getElementById('modelFilter').addEventListener('change', function () {
    const selectedModel = this.value;
    const detailsContainer = document.getElementById('car-details');


    if (carData[selectedModel]) {
        detailsContainer.innerHTML = `
                <div class="car-info">
                    <img src="${carData[selectedModel].image}" alt="${selectedModel}">
                    <div class="car-description">
                        <h3>${selectedModel}</h3>
                    </div>
                </div>
            `;
    } else {

        detailsContainer.innerHTML = '';
    }
});