// Promises
const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("*");
	}, 1000);
});

const twoStars = (star) => {
	return star + star;
};

const oneDot = (star) => {
	return star + ".";
};

const print = (val) => {
	console.log(val);
};

// Chaining them all together
promise.then(twoStars).then(oneDot).then(print);

const promise = new Promise((resolve) =>
	setTimeout(() => resolve("dAlan"), 100)
);

promise
	.then((res) => {
		return res === "Alan"
			? Promise.resolve("Hey Alan!")
			: Promise.reject("Who are you?");
	})
	.then(
		(res) => {
			console.log(res);
		},
		(err) => {
			console.log(err);
		}
	);

const promise = new Promise((resolve, reject) => {
	setTimeout(reject, 2000, "Hellow Worlds");
});

promise.then(
	(res) => {
		console.log(res);
	},
	(err) => {
		console.log(err);
	}
);

const promise1 = new Promise((resolve, reject) => {
	setTimeout(resolve, 300, 3);
});
const promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 200, 2);
});

Promise.all([promise1, promise2]).then((res) => {
	console.log(res[0]);
	console.log(res[1]);
});

const http = require("http");
const PORT = 8080;

// a function which handles requests and sends response
const requestHandler = function (request, response) {
	response.end(
		`Requested Path: ${request.url}\nRequest Method: ${request.method}`
	);
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
	console.log(`Server listening on: http://localhost:${PORT}`);
});
