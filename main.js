const chef = [
  {
    id: 1,
    image: 'images/chef.jpg',
    name: 'Zhe Jon1',
    position: 'Chef at Ukwi restaurants',
    description: 'Lorem ipsum dolor adipisicing elit. Provident incidunt eos laborum quae',
  },
  {
    id: 2,
    image: 'images/chef.jpg',
    name: 'Zhe Jon2',
    position: 'Chef at Ukwi restaurants',
    description: 'Lorem ipsum dolor adipisicing elit. Provident incidunt eos laborum quae',
  },
  {
    id: 3,
    image: 'images/chef.jpg',
    name: 'Zhe Jon3',
    position: 'Chef at Ukwi restaurants',
    description: 'Lorem ipsum dolor adipisicing elit. Provident incidunt eos laborum quae',
  },
  {
    id: 4,
    image: 'images/chef.jpg',
    name: 'Zhe Jon4',
    position: 'Chef at Ukwi restaurants',
    description: 'Lorem ipsum dolor adipisicing elit. Provident incidunt eos laborum quae',
  },
  {
    id: 5,
    image: 'images/chef.jpg',
    name: 'Zhe Jon5',
    position: 'Chef at Ukwi restaurants',
    description: 'Lorem ipsum dolor adipisicing elit. Provident incidunt eos laborum quae',
  },
  {
    id: 6,
    image: 'images/chef.jpg',
    name: 'Zhe Jon6',
    position: 'Chef at Ukwi restaurants',
    description: 'Lorem ipsum dolor adipisicing elit. Provident incidunt eos laborum quae',
  },
];

const chefSection = document.querySelector('.chefs-section');
const allChefs = document.createElement('div');
allChefs.className = 'allChefs';

const titleContainer = document.createElement('div');
titleContainer.className = 'chef-section-title';

const title = document.createElement('h4');
title.innerText = 'Featured Chefs';
titleContainer.appendChild(title);

const titleLine = document.createElement('hr');
titleContainer.appendChild(titleLine);

chefSection.appendChild(titleContainer);

for (let i = 0; i < chef.length; i += 1) {
  const imgContainer = document.createElement('div');
  imgContainer.className = 'chef-image';

  const chefImg = document.createElement('img');
  chefImg.src = chef[i].image;
  imgContainer.appendChild(chefImg);

  const chefInfo = document.createElement('div');
  chefInfo.className = 'chef-info';

  const chefName = document.createElement('h5');
  chefName.innerText = chef[i].name;
  chefInfo.appendChild(chefName);

  const chefPosition = document.createElement('p');
  chefPosition.innerText = chef[i].position;
  chefInfo.appendChild(chefPosition);

  const line = document.createElement('hr');
  chefInfo.appendChild(line);

  const chefDescription = document.createElement('p');
  chefDescription.innerText = chef[i].description;
  chefInfo.appendChild(chefDescription);

  const chefContainer = document.createElement('div');
  chefContainer.className = 'chef';
  chefContainer.appendChild(imgContainer);
  chefContainer.appendChild(chefInfo);

  allChefs.appendChild(chefContainer);

  chefSection.appendChild(allChefs);

  if (i > 1 && window.innerWidth < 768) {
    chefContainer.id = 'hide';
  }

  const moreButton = document.querySelector('.more-btn');
  const upDirection = document.querySelector('.fa-chevron-up');
  const down = document.querySelector('.fa-chevron-down');

  moreButton.addEventListener('click', () => {
    if (chefContainer.id === 'hide') {
      chefContainer.removeAttribute('id');
      down.style.display = 'none';
      upDirection.style.display = 'block';
    } else if (chefContainer.id !== 'hide' && i > 1) {
      chefContainer.id = 'hide';
      down.style.display = 'block';
      upDirection.style.display = 'none';
    }
  });
}
