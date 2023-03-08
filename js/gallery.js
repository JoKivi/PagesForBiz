const galleryContainer = document.getElementById('gallery-container');

const xhr = new XMLHttpRequest();
xhr.open('GET', '../data/gallery.json');
xhr.onload = () => {
  if (xhr.status == 200) { //200 on hyväksytty vastaus
    const data = JSON.parse(xhr.responseText);
    console.log(data.gallery);

    for (const image of data.gallery) {
      const img = document.createElement('img');
      img.src = 'gallery/' + image.filename;
      img.alt = image.alt;
      const caption = document.createElement('div');
      caption.innerText = image.caption;
      const container = document.createElement('div');
      container.classList.add('image-container');
      container.appendChild(img);
      container.appendChild(caption);
      galleryContainer.appendChild(container);
    }
  } else {
    console.error(`Virhe ladattaessa JSON dataa: ${xhr.status}`);
  }
};
xhr.send();
