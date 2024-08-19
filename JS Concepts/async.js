// Nested Calbacks
// referred as Callback Hell

// async functions we don't we it will complete

getUser("facebook/Tamil", (user, error) => {
  if (error) {
    throw error;
  }

  const userId = user.id;

  getFriends(userId, (friends, error) => {
    if (error) {
      throw error;
    }

    const tamil = friends.find();

    getPosts(tamil, (posts, error) => {
      if (error) {
        throw error;
      }

      const recentPost = posts[0];

      getCommentsForPost(recentPost, (comments, error) => {
        if (error) {
          throw error;
        }

        displayComments(comments);
      });
    });
  });
});

// Promises

const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I have succeeded");
  }, 1000);
});

myPromise1.then((value) => console.log(value));

// benefit of using promises

// by having reject we can able to control the seperation of successful api callback from an unsuccessfull api callback

// what we want to do async events if they succeed or not
// success in then
// failure in catch

// address issues -> server down, mistake in parameters

const myPromise2 = new Promise((resolve, reject) => {
  // some conditon
  if (false) {
    setTimeout(() => {
      resolve("I have succeeded");
    }, 1000);
  } else {
    reject("I have failed");
  }
});

// there is no reason reject when using setTimeout, so no need to call reject

myPromise2
  .then((value) => console.log(value))
  .catch((rejectValue) => console.log(rejectValue));

// what we want to do async events if they succeed or not

const myPromise3 = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      resolve("I have succeeded");
    }, 1000);
  } else {
    reject("I have failed");
  }
});

// chained then

myPromise3
  .then((value) => value + "!!!!") // each then wrapping return value on a resolved promise
  .then((newValue) => console.log(newValue))
  .catch((rejectValue) => console.log(rejectValue));

// Handling Async event callbacks

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const firstUser = users[0];
    console.log(firstUser);
    return fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=" + firstUser.id
    );
  })
  .then((response) => response.json())
  .then((posts) => console.log(posts));

// Handling Async event callbacks

const myAsyncFunction = async () => {
  try {
    const usersResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const users = await usersResponse.json();

    const firstUser = users[0];

    console.log(firstUser);

    const postsResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=" + firstUser.id
    );

    const posts = await postsResponse.json();

    console.log(posts);
  } catch (error) {
    console.log("There was an error!!!");
  }
};
