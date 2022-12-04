console.log("person1: shows ticket");
console.log("person2: shows ticket");

const preMovie = async () => {
  const promiseWifeBringingTics = new Promise((resolve, reject) => {
    setTimeout(() => resolve("ticket"), 1000);
  });

  const getPopcorn = new Promise((res, rej) => res("popcorn"));
  const addButter = new Promise((res, rej) => res("butter"));
  const getColdDrinks = new Promise((res, rej) => res("Cold Drinks"));
  const getCandy = new Promise((res, rej) => res("Candy"));

  let ticket = await promiseWifeBringingTics;

  let [popcorn, butter, ColdDrinks, Candy] = await Promise.all([
    getPopcorn,
    addButter,
    getColdDrinks,
    getCandy,
  ]);

  console.log(`${popcorn}, ${butter}, ${ColdDrinks}, ${Candy}`);

  return ticket;
};
preMovie().then((m) => console.log(`person3: shows ${m}`));
console.log("person4: shows ticket");
console.log("person5: shows ticket");
