// Header hambuger button secction
document.addEventListener("DOMContentLoaded", () => {
  const hamButton = document.querySelector("#menu");
  const navigation = document.querySelector(".navigation");
  const nameHeader = document.querySelector(".nameHeader");

  hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
    nameHeader.classList.toggle("hidden");
  });
});

const temples = [
  {
    templeName: "Arequipa Perú",
    location: "Arequipa, Perú",
    dedicated: "2019, December, 15",
    area: 30657,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/arequipa-peru/800x500/1-55f6c59ce8f9c093a9c689067f8674335de544e2.jpeg",
    width: "400px",
    height: "250px",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    width: "400px",
    height: "250px",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    width: "400px",
    height: "250px",
  },
  {
    templeName: "Guayaquil Ecuador",
    location: "Guayaquil, Ecuador",
    dedicated: "1999, August, 1",
    area: 70000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/guayaquil-ecuador/800x500/guayaquil-ecuador-temple-1159057-wallpaper.jpg",
    width: "400px",
    height: "250px",
  },
  {
    templeName: "Buenos Aires Argentina",
    location: "Buenos Aires, Argentina",
    dedicated: "1986, January, 17",
    area: 36852,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/800x500/buenos-aires-argentina-temple-2012-1021302-wallpaper.jpg",
    width: "400px",
    height: "250px",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    width: "400px",
    height: "250px",
  },
  {
    templeName: "Panamá City Panamá",
    location: "Ancon, Panamá, Panama",
    dedicated: "2008, August, 10",
    area: 18943,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/panama-city-panama/400x250/panama-city-temple-lds-569186-wallpaper.jpg",
    width: "400px",
    height: "250px",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container.home");
  const navLinks = document.querySelectorAll(".navigation a");
  const titleName = document.querySelector(".title");

  const displayTemples = (filteredTemples) => {
    container.innerHTML = "";
    filteredTemples.forEach((temple) => {
      const card = document.createElement("div");
      card.className = "temple-card";
      card.innerHTML = `
                <img src="${temple.imageUrl}"  loading="lazy"  width="${
        temple.width
      }" height="${temple.height}" alt="${temple.templeName} Temple">
                <div class="temple-info">
                    <h2>${temple.templeName}</h2>
                    <p><strong>Location:</strong> ${temple.location}</p>
                    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
                </div>
            `;
      container.appendChild(card);
    });
  };

  const filterTemples = (criteria) => {
    let filteredTemples = temples;
    switch (criteria) {
      case "old":
        filteredTemples = temples.filter(
          (temple) => new Date(temple.dedicated).getFullYear() < 1900
        );
        titleName.innerHTML = "Old Temples";
        break;
      case "new":
        filteredTemples = temples.filter(
          (temple) => new Date(temple.dedicated).getFullYear() > 2000
        );
        titleName.innerHTML = "New Temples";
        break;
      case "large":
        filteredTemples = temples.filter((temple) => temple.area > 90000);
        titleName.innerHTML = "Large Temples";
        break;
      case "small":
        filteredTemples = temples.filter((temple) => temple.area < 10000);
        titleName.innerHTML = "Small Temples";
        break;
      default:
        filteredTemples = temples;
        titleName.innerHTML = "All Temples";
        break;
    }
    displayTemples(filteredTemples);
  };

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navLinks.forEach((nav) => nav.classList.remove("active"));
      e.target.classList.add("active");
      filterTemples(e.target.id);
    });
  });

  filterTemples("home-nav");
});

// Footer information
document.addEventListener("DOMContentLoaded", () => {
  const currentYear = new Date().getFullYear();
  const lastModified = document.lastModified;
  const copyrightYearElement = document.getElementById("currentyear");
  const lastModifiedElement = document.getElementById("lastModified");
  copyrightYearElement.textContent = currentYear;
  lastModifiedElement.textContent = `Last update: ${lastModified}`;
});
