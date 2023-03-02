// Ladataan JSON tiedosto
fetch("../gallery.json")
    .then(response => response.json())
    .then(data => {

        // Luuppi images arraylle ja luodaan HTML elementti jokaiselle kuvalle
        for (let i = 0; i < data.images.length; i++) {
            const image = data.images[i];

            const sourceElement = document.createElement("source");
            sourceElement.srcset = image.srcset;
            sourceElement.type = image.type;

            const imgElement = document.createElement("img");
            imgElement.src = image.src;
            imgElement.alt = image.title;

            const captionElement = document.createElement("p");
            captionElement.innerText = image.description;

            const pictureElement = document.createElement("picture");
            pictureElement.appendChild(sourceElement);
            pictureElement.appendChild(imgElement);
            pictureElement.appendChild(captionElement);
            document.querySelector(".images").appendChild(pictureElement);
        }
    })
    .catch(error => {
        console.error(error);
    });


