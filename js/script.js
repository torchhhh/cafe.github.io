document.querySelector('.burger-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav-list').classList.toggle('active');
    document.querySelector('.nav-list').classList.toggle('show');
});

const navLinks = document.querySelectorAll('.nav-link');
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
        document.querySelector('.burger-menu').classList.remove('active');
        document.querySelector('.nav-list').classList.remove('active');
        document.querySelector('.nav-list').classList.remove('show');
    });
}

// Список данных для баннеров
const bannersData = [
    {
        title: "Отправляйтесь в кофейное путешествие",
        desc: "Откройте для себя богатство вкусов и изысканные блюда в нашем уникальном Меню, специально разработанном для ценителей кофе.",
        imgSrc: "assets/banners/first.png",
        backgroundColor: "var(--brown)",
        link: "menu.html"
    },
    {
        title: "Откройте вкусовое путешествие",
        desc: "Исследуйте разнообразие вкусов и изысканных блюд в нашем уникальном Меню, созданном для настоящих гурманов.",
        imgSrc: "assets/banners/second.png",
        backgroundColor: "var(--blue)",
        link: "menu.html"
    },
    {
        title: "Откройте мир завтраков и обедов",
        desc: "Погрузитесь в многообразие вкусов и изысканных блюд нашего уникального Меню, специально разработанного для истинных гурманов завтраков и обедов.",
        imgSrc: "assets/banners/third.png",
        backgroundColor: "var(--light-green)",
        link: "menu.html"
    }
];

// Получение случайного баннера из списка данных
function getRandomBannerData() {
    const randomIndex = Math.floor(Math.random() * bannersData.length);
    return bannersData[randomIndex];
}

// Обновление контента баннера
// Обновление контента баннера
function updateBannerContent() {
    const bannerBlock = document.querySelector(".banner-block");
    const bannerTextBlock = document.querySelector(".banner-text-block");
    const bannerImg = document.querySelector(".banner-img");
    const bannerLink = document.querySelector(".banner-link");

    const bannerData = getRandomBannerData();

    bannerBlock.style.backgroundColor = bannerData.backgroundColor;
    bannerTextBlock.innerHTML = `
        <h1 class="banner-title">${bannerData.title}</h1>
        <p class="banner-desc">${bannerData.desc}</p>
    `;
    bannerImg.src = bannerData.imgSrc;
    bannerImg.alt = bannerData.title;
    bannerLink.href = bannerData.link;

    // Добавляем класс для плавного переключения
    bannerBlock.classList.add("fade-in");
    bannerTextBlock.classList.add("fade-in");
    bannerImg.classList.add("fade-in");

    // Удаляем классы с плавного переключения после окончания анимации
    setTimeout(() => {
        bannerBlock.classList.remove("fade-in");
        bannerTextBlock.classList.remove("fade-in");
        bannerImg.classList.remove("fade-in");
    }, 500);
}

// Обновление контента баннера при загрузке страницы
updateBannerContent();

// Обновление контента баннера каждые 5 секунд
setInterval(updateBannerContent, 5000);

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300
})

sr.reveal('.hero-img')
sr.reveal('.hero-text-block', {origin: 'bottom'})