const add = (a, b) => a + b;
console.log("Sum:", add(5, 10)); // Output: Sum: 15


//callbacks
function fetchData(callback) {
    setTimeout(() => {
      const data = { temperature: 25 };
      callback(data);
    }, 1000);
  }
  
  fetchData((data) => {
    console.log("Callback Temperature:", data.temperature); // Output: 25
  });
  

  //promises
  const fetchDataPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ temperature: 25 });
      }, 1000);
    });
  };
  
  fetchDataPromise()
    .then(data => console.log("Promise Temperature:", data.temperature)) // Output: 25
    .catch(error => console.error(error));

    
    //async/await
    const fetchDataAsync = async () => {
        const data = await new Promise(resolve => {
          setTimeout(() => resolve({ temperature: 25 }), 1000);
        });
        console.log("Async/Await Temperature:", data.temperature); // Output: 25
      };
      
      fetchDataAsync();
      