// Async event callbacks

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
