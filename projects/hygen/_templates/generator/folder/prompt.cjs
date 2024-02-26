module.exports = {
  prompt: ({ prompter }) =>
    prompter
      .prompt({
        type: 'input',
        name: 'name',
        message: '폴더 이름을 공백없이 소문자로 입력하세요.',
      })
      .then(({ name }) => {
        if (!name) {
          throw new Error('컴포넌트 이름을 입력하세요!');
        }
        if (!/^[a-z]+$/.test(name)) {
          throw new Error('컴포넌트 이름은 영어 소문자만 포함해야 합니다.');
        }
        return { name: name };
      }),
};
