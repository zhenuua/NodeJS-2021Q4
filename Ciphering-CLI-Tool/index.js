const { pipeline } = require("stream");

const readStream = process.stdin
const writeStream = process.stdout


pipeline(
  readStream,
  writeStream,
  err => {
    // handler err
  }
)

const transformStreams = [
  stream1,
  stream2,
  streamN
]

pipeline(
  readStream,
  ...transformStreams,
  writeStream,
  err => {
    // handler err
  }
)
// https://www.youtube.com/watch?v=NzhTW_U4qTA&t=2s&ab_channel=RollingScopesSchool
// функция парсит конфик,
// смоотрит какой класс всзять экзэмпляр какого класса создать
// упокаовать по очередно в колекцию и засунуть в пайплайн