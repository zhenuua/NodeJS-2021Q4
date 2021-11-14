// input.on("data", (chunk) => output.write((str += chunk)));

// let data = "";
// input.on("data", (chunk) => (data += chunk));

// input.on("encoding", () => enCoding(data));
// input.on("decoding", () => decoding(data));
// input.on("error", (error) => console.log("Error", error.message));
// input.emit("encoding");



// streamRead.on("data", (chunk) => (data += chunk));
// streamRead.on("end", () => enCoding(data));
// streamRead.on("error", (error) => console.log("Error", error.message));

function enCoding(data) {
  console.log("enCoding", data);
  // console.log(typeof data);
  let newData = data + "uhugfjfcuchcttuth";
  //console.log('End', newData)
  input.on("data", (chunk) => output.write((newData += chunk)));
  // input.on("error", (error) => console.log("Error", error.message));
}

function deCoding(data) {
  console.log("decoding", data);
}
process.on("exit", () => stdout.write("Удачи в изучении Node.js!"));

// const flag = argv[2];
// const allowedFlags = ['-c', '-s'];
// if (!allowedFlags.includes(flag)) {
//     stdout.write('Попробуйте ещё раз запустить файл с флагом -c или -m');
//     exit();
// }

// stdout.write(`\nВведите 2 числа\n`);

// stdin.on('data', data => {
//     const dataStringified = data.toString();
//     stdout.write('Cообщение в верхнем регистре: ');
//     stdout.write(dataStringified.toUpperCase());
// });

pipeline(input, output, (err) => {
  fs.readFile(input, (error, data) => {
    if (error) return console.error(error.message);
    const notes = JSON.parse(data);
    console.log(11, data);
    notes.push({ title, content });
    const json = JSON.stringify(notes);

    fs.writeFile(output, json, (error) => {
      if (error) return console.error(error.message);
      console.log("Заметка создана");
    });
  });
  if (err) {
    console.log(err.message);
  }
});
