const baseURL = "https://api.thedogapi.com/v1";

async function convertToJson(res) {
   const data = await res.json();
   if (res.ok) {
     return data;
   } else {
     throw { name: "servicesError", message: data };
   }
 }

export const getBreeds = async () => {
   return await fetch(`${baseURL}/breeds`)
   .then(convertToJson);
}

export const getDog = async (id) => {
   return await fetch(`${baseURL}/breeds/${id}`)
   .then(convertToJson);
}

export const getImage = async id => {
   const res = await fetch(`${baseURL}/images/${id}`)
   .then(convertToJson);
   return res.url;
}