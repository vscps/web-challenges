import Chance from "chance";

export default function handler(request, response) {
  const chance = new Chance();
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    profession: chance.profession(),
    twitter: chance.twitter(),
    geohash: chance.geohash(),
  };
  response.status(200).json(character);
}
