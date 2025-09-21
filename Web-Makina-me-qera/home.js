

document.addEventListener('DOMContentLoaded', function() {
    // Car data array
    const cars = [
        { category: 'economy', model: 'Toyota Corolla', price: '$50/day', image: './Imazhe/toyota-corolla.png' },
        { category: 'suv', model: 'Jeep Cherokee', price: '$80/day', image: './Imazhe/jeep-cherokee.png' },
        { category: 'luxury', model: 'Mercedes S-Class', price: '$150/day', image: './Imazhe/mercedes-s-class.png' },
        { category: 'economy', model: 'Honda Civic', price: '$55/day', image: './Imazhe/png-clipart-2016-honda-cr-v-2015-honda-cr-v-2012-honda-cr-v-car-tuning-compact-car-car.png' },
        { category: 'suv', model: 'BMW X5', price: '$100/day', image: './Imazhe/png-transparent-2014-bmw-x5-car-sport-utility-vehicle-2018-bmw-x5-suv-car-compact-car-vehicle-transport.png' },
        { category: 'luxury', model: 'Audi A8', price: '$120/day', image: './Imazhe/png-transparent-2012-audi-a8-car-luxury-vehicle-audi-a8-l-audi-compact-car-sedan-car.png' },
        { category: 'economy', model: 'Ford Fiesta', price: '$25/day', image: './Imazhe/png-transparent-2015-ford-fiesta-2014-ford-fiesta-2016-ford-fiesta-car-fiesta-compact-car-sedan-subcompact-car.png' },
        { category: 'suv', model: 'Toyota RAV4', price: '$55/day', image: './Imazhe/png-clipart-2018-toyota-rav4-2015-toyota-rav4-2017-toyota-rav4-car-toyota-compact-car-car.png' },
        { category: 'luxury', model: 'Lexus RX', price: '$110/day', image: './Imazhe/png-clipart-2018-lexus-rx-450h-suv-car-2017-lexus-rx-450h-vehicle-car-compact-car-sedan.png' },
        { category: 'economy', model: 'Nissan Versa', price: '$28/day', image: './Imazhe/png-transparent-2018-nissan-versa-1-6-sv-sedan-2018-nissan-versa-1-6-s-plus-2017-nissan-versa-2016-nissan-versa-nissan-compact-car-sedan-car.png' },
        { category: 'suv', model: 'Subaru Outback', price: '$60/day', image: './Imazhe/png-clipart-2017-subaru-outback-subaru-forester-car-2019-subaru-outback-2-5i-limited-suv-subaru-outback-engine-displacement-compact-car-car.png' },
        { category: 'luxury', model: 'Porsche Cayenne', price: '$150/day', image: './Imazhe/-porsche-cayenne-car-sport-utility-vehicle-2016-porsche-cayenne-gts-porsche-compact-car-vehicle.png' },
        { category: 'economy', model: 'Chevrolet Spark', price: '$22/day', image: './Imazhe/png-clipart-subcompact-car-2017-chevrolet-spark-2016-chevrolet-spark-car-compact-car-sedan.png' },
        { category: 'suv', model: 'Ford Escape', price: '$65/day', image: './Imazhe/png-transparent-2015-ford-fiesta-2014-ford-fiesta-2016-ford-fiesta-car-fiesta-compact-car-sedan-subcompact-car.png' },
        { category: 'luxury', model: 'BMW 7 Series', price: '$130/day', image: './Imazhe/png-clipart-2018-bmw-750i-sedan-2019-bmw-7-series-2017-bmw-7-series-car-bmw-compact-car-sedan.png' },
        { category: 'economy', model: 'Hyundai Elantra', price: '$32/day', image: './Imazhe/png-transparent-2015-hyundai-elantra-car-mercedes-benz-hyundai-elantra-gt-hyundai-compact-car-sedan-car.png' },
        { category: 'suv', model: 'Mazda CX-5', price: '$70/day', image: './Imazhe/png-transparent-2017-mazda-cx-5-car-mazda-mx-5-sport-utility-vehicle-mazda-compact-car-glass-car.png' },
        { category: 'luxury', model: 'Jaguar XF', price: '$140/day', image: './Imazhe/png-clipart-2017-jaguar-xf-jaguar-cars-2016-jaguar-xf-jaguar-compact-car-sedan.png' },
        { category: 'economy', model: 'Kia Rio', price: '$30/day', image: './Imazhe/png-transparent-kia-motors-car-2017-kia-rio-2005-kia-rio-kia-compact-car-sedan-car.png' },
        { category: 'suv', model: 'Honda CR-V', price: '$58/day', image: './Imazhe/png-clipart-2016-honda-cr-v-2015-honda-cr-v-2012-honda-cr-v-car-tuning-compact-car-car.png' }
        
    ];




    const carContainer = document.querySelector('.car-slider');
    const categorySelect = document.querySelector('#category');
    const searchInput = document.querySelector('#search');

    // Function to display cars
    function displayCars(filteredCars) {
        carContainer.innerHTML = ''; // Clear the existing cars

        filteredCars.forEach(car => {
            const carElement = document.createElement('div');
            carElement.classList.add('car-item');

            carElement.innerHTML = `
                <img src="${car.image}" alt="${car.model}">
                <h3>${car.model}</h3>
                <p class="price">${car.price}</p>
                <button>Book Now</button>
            `;
            carContainer.appendChild(carElement);
        });
    }

    // Event listener for category filter
    categorySelect.addEventListener('change', function() {
        const selectedCategory = categorySelect.value;
        const filteredCars = cars.filter(car => selectedCategory === 'all' || car.category === selectedCategory);
        displayCars(filteredCars);
    });

    // Event listener for search input
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredCars = cars.filter(car => car.model.toLowerCase().includes(searchTerm));
        displayCars(filteredCars);
    });

    // Initial display of all cars
    displayCars(cars);
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 2000);


setInterval(nextSlide, 3000); // Çdo 3 sekonda ndryshohet fotoja
document.querySelector('.leave-feedback-btn').addEventListener('click', function() {
    document.querySelector('.feedback-form').style.display = 'block';
    this.style.display = 'none'; // Fshi butonin pasi është shtypur
});

