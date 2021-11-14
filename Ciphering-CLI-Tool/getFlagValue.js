const { argv, exit, stderr } = process;

let getFlagValue = function(flag) {
  const flagIndex = process.argv.indexOf(flag);
  if (flagIndex === -1) {
    stderr.write(`Попробуйте ещё раз запустить файл с флагом ${flag}`);
    exit();
  }
  if (!argv[flagIndex + 1]) {
    stderr.write(`После флага ${flag} дожно быть значение`);
    exit();
  }
  return process.argv[flagIndex + 1];
}


module.exports = { getFlagValue }