import { getImage } from "../../services/external.mjs";

export class Dog {
   constructor(id, name, weight, height, life_span, bred_for, breed_group, temperament) {
      this.id = id;
      this.name = name;
      this.weight = weight;
      this.height = height;
      this.life_span = life_span;
      this.bred_for = bred_for;
      this. breed_group = breed_group;
      this.temperament = temperament;
      this.image_url;
   }

   renderDetails() {
      document.querySelector("#dog-name").innerText = `${this.name}`;
      document.querySelector("#breed-group").innerText = `Group: ${this.breed_group}`;
      document.querySelector("#bred-for").innerText = `Best for: ${this.bred_for}`;
      document.querySelector("#height").innerText = `Height: ${this.height.imperial}"`;
      document.querySelector("#weight").innerText = `Weight: ${this.weight.imperial} lbs`;
      document.querySelector("#temperament").innerText = `Temperament: ${this.temperament}`;
      document.querySelector("#life-span").innerText = `Life Expectancy: ${this.life_span}`;
      this.renderImage();
   }

   setImage(url) {
      this.image_url = url;
   }

   renderImage() {
      document.querySelector("#dog-image").src = this.image_url;
      document.querySelector("#dog-image").alt = this.name;
   }
}