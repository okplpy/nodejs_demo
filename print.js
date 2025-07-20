// 读取一个 JSON 文件并输出内容
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.json');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('读取文件出错:', err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    console.log('文件内容:', jsonData);
  } catch (parseErr) {
    console.error('JSON解析出错:', parseErr);
  }
});
