console.log("person1: shows ticket");
console.log("person2: shows ticket");

const preMovie = async () => {
  const promiseWifeBringingTics = new Promise((resolve, reject) => {
    setTimeout(() => resolve("ticket"), 1000);
  });

  const getPopcorn = new Promise((res, rej) => res("popcorn"));
  const addButter = new Promise((res, rej) => res("butter"));
  const getColdDrinks = new Promise((res, rej) => res("Cold Drinks"));

  let ticket = await promiseWifeBringingTics;

  console.log(`wife: I have the ${ticket}`);
  console.log("husband: we should go in");
  console.log("wife: no I am hungry");

  let popcorn = await getPopcorn;

  console.log(`husband: I got some ${popcorn}`);
  console.log("husband: we should go in");
  console.log("wife: I need butter on my popcorn");

  let butter = await addButter;

  console.log(`husband: I got some ${butter} on popcorn`);
  console.log("husband: now we should go in");
  console.log("wife:  no I need cold drinks");

  let coldDrinks = await getColdDrinks;

  console.log(`husband: I got some ${coldDrinks}`);
  console.log("husband: anything else darling?");
  console.log("wife: lets go we are getting late");
  console.log("husband: Thank you for the remainder *grins*");

  return ticket;
};

preMovie().then((m) => console.log(`person3: shows ${m}`));
console.log("person4: shows ticket");
console.log("person5: shows ticket");
