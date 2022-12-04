const posts = [
  {
    title: "Post One",
    body: "This is Post One",
    createdAt: new Date().getTime(),
  },
  {
    title: "Post Two",
    body: "This is Post Two",
    createdAt: new Date().getTime(),
  },
];

const user = {
  username: "siraj",
  lastActivityTime: Date.now(),
};

function getPosts() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let output = "";
      posts.forEach((posts) => {
        output += `<li>${posts.title} - last updated ${
          Math.floor(new Date().getTime() - posts.createdAt) / 1000
        } Seconds ago</li>`;
      });
      document.body.innerHTML = output;
      res("All posts present are updated successfully");
    }, 1000);
  });
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ ...post, createdAt: new Date().getTime() });
      const error = false;
      // console.log("post created");
      if (!error) {
        resolve("All the posts created");
      } else {
        reject("Error : Something went wrong");
      }
    }, 1000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        resolve(posts.pop());
      } else {
        reject("Array is empty now");
      }
    }, 1000);
  });
}

function updateLastActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.lastActivityTime = new Date();
      resolve(user.lastActivityTime);
    }, 1000);
  });
}

async function userupdates() {
  try {
    let [createPostUpdate, updateuserActivityTime] = await Promise.all([
      createPost({
        title: "Post Three",
        body: "This is Post Three",
        createdAt: new Date(),
      }),
      updateLastActivityTime(),
    ]);

    console.log(`${createPostUpdate}`);
    console.log(`Last Activity time of User: ${updateuserActivityTime}`);

    let printPostOnScreen = await getPosts();
    console.log(printPostOnScreen);

    let delPost = await deletePost();
    console.log("Deleted one posts successfully");
    console.log(await getPosts());
  } catch (error) {
    console.log(error);
  }
}
userupdates();
