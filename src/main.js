import { Dog } from "./models/dogs/dog.mjs";
import { getBreeds, getDog, getImage } from "./services/external.mjs"
import { getLocalStorage, setLocalStorage } from "./services/utils.mjs";

document.querySelector("#breed").addEventListener("click", async e => {
   let id = document.querySelector("#breedSelect").value;
   let breed = await getDog(id);
   let dog = new Dog(breed.id, breed.name, breed.weight, breed.height, breed.life_span, breed.bred_for, breed.breed_group, breed.temperament)
   let image = await getImage(breed.reference_image_id);
   dog.setImage(image);
   setLocalStorage("dog", breed);
   dog.renderDetails();
})

let breedList = await getBreeds();

let selectTag = document.querySelector("#breedSelect");
breedList.map( breed => {
   let option = document.createElement("option");
   option.value = breed.id;
   option.innerHTML = breed.name;
   selectTag.append(option);
})

