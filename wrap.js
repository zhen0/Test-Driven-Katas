const wrap = (line, maxLen) => {
  if (line.length <= maxLen) {
    return line;
  }

  const indexOfBlank = line.lastIndexOf(" ", maxLen);
  let split;
  let offSet;
  if (indexOfBlank > -1) {
    split = indexOfBlank;
    offSet = 1;
  } else {
    split = maxLen;
    offSet = 0;
  }
  return (
    line.substring(0, split) +
    "/n" +
    wrap(line.substring(split + offSet), maxLen)
  );
};
//   let i = line[maxLen - 1]
//   if (i === ' ') {
//       line.split('i')
//   }
//   let newLine = line.split(" ");
//   //   console.log(newLine);
//   //   return;
// };

module.exports = wrap;
