// A function that returns a Promise that resolves after a given time
function delayedOperation(delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolving the promise after 'delay' milliseconds
        resolve(`Operation completed after ${delay} milliseconds`);
      }, delay);
    });
  }
  
  // Using the delayedOperation function
  delayedOperation(2000)
    .then((message) => {
      // This will be executed after the promise is resolved
      console.log(message);
    })
    .catch((error) => {
      // This will be executed if the promise is rejected
      console.log(error);
    });
  