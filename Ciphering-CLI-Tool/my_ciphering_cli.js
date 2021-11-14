// node my_ciphering_cli -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"
const fs = require("fs");
const { pipeline } = require("stream");

const { caesar } = require("./caesarCipher");
const { atbash } = require("./atbashCipher");
const { getFlagValue } = require("./getFlagValue");

const { stdin, stdout, argv, exit, stderr } = process;

const messageFlagConfig = getFlagValue("-c");
const messageFlagInput = getFlagValue("-i");
const messageFlagOutput = getFlagValue("-o");

const input = fs.createReadStream(messageFlagInput, "utf-8");
const output = fs.createWriteStream(messageFlagOutput);


pipeline(input, output, (err) => {
  fs.readFile(messageFlagInput, (error, data) => {
    //if (error) return console.error(error.message);
    const notes = JSON.parse(data);
    notes.push({ title, content });
    const json = JSON.stringify(notes);

    fs.writeFile(messageFlagOutput, json, (error) => {
      if (error) return console.error(error.message);

      const commandArr = messageFlagConfig.split("-");

      for (command of commandArr){
        if (command === 'A'){
          json = atbash(json);
        }
        else if (command === 'C1'){
          json = caesar(json, 1);
        }
        else if (command === 'C0'){
          json = caesar(json, -1);
        }
        else if (command === 'R1'){
          json = caesar(json, 8);
        }
        else if (command === 'R0'){
          json =caesar(json, -8);
        } else {
          stderr.write(`неверная каманда, каманды должны быть записаны через "-";
          список доступных каманд: A, R1, R0, C1, C0;
          пример записи аргумента:
          "A-R1-R0-C1-C0" `);
          exit()
        }
      };

    });
  });
  if (err) {
    console.log(err.message);
  }
});

