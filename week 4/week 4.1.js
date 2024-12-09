//arrow functiond

const add = (a, b) => a + b;
function fetchData(callback) {
// Simulate a data fetch
setTimeout(() => {
const data = { temperature: 25 };
callback(data);
}, 1000);
}
fetchData((data) => {
console.log(data.temperature); // 25
});