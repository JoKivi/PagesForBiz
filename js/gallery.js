const galleryContainer = document.getElementById('gallery-container');

const xhr = new XMLHttpRequest();
xhr.open('GET', '../data/gallery.json');
xhr.onload = () => {
  if (xhr.status == 200) { //200 on hyväksytty vastaus
    const data = JSON.parse(xhr.responseText);
    console.log(data.gallery);

    for (const image of data.gallery) {
      const a = document.createElement('a');
      a.href = 'gallery/' + image.filename;
      a.setAttribute('data-lightbox', 'liventer');
      
      const img = document.createElement('img');
      img.src = 'gallery/' + image.filename;
      img.alt = image.alt;

      const container = document.createElement('div');
      container.classList.add('image-container');

      a.appendChild(img);
      container.appendChild(a);

      document.getElementById("gallery-container").appendChild(container);

      lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
      });
    }
  } else {
    console.error(`Virhe ladattaessa JSON dataa: ${xhr.status}`);
  }
};
xhr.send();
