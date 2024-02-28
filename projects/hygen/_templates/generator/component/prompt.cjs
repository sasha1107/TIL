const fs = require('fs');
const folder = 'src/';

module.exports = {
  prompt: ({ prompter }) =>
    prompter
      .select({
        type: 'input',
        name: 'directory',
        message: '폴더를 선택하세요.',
        choices: fs
          .readdirSync(folder)
          .filter((f) => fs.statSync(folder + f).isDirectory()),
      })
      .then((choice) => {
        // index.ts가 아닌 파일만 필터링
        // 파일명만 필요하므로 확장자 제외
        const files = fs
          .readdirSync(folder + choice)
          .filter((f) => f !== 'index.ts');
        return { directory: choice, files: files };
      }),
};
