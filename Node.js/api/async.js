

async function isAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok');
    }, 2000);
  });
}

async function judge() {
  const res = await isAsync();
  console.log(Object.prototype.toString.call(isAsync) === '[object AsyncFunction]');
  console.log(res);
}

judge();