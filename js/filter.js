const mixer = mixitup('.products', {
    selectors: {
        target: '.product'
    },
    animation: {
        duration: 300
    }
});
const filtersContainer = document.querySelector('.menu-filters');
const filters = filtersContainer.getElementsByClassName('menu-filter');

for (let i = 0; i < filters.length; i++) {
    filters[i].addEventListener('click', function () {
        const currentFilter = this.getAttribute('data-filter');

        for (let j = 0; j < filters.length; j++) {
            filters[j].classList.remove('selected');
        }
        this.classList.add('selected');

        mixer.filter(currentFilter);
    });
}