const testName = filename => filename.replace(__dirname, '');

export const test = (filename, tests) => {
  const name = testName(filename);
  describe(name, tests);
};

export const testOnly = (filename, tests) => {
  const name = testName(filename);
  describe.only(name, tests);
};

export const testSkip = (filename, tests) => {
  const name = testName(filename);
  describe.skip(name, tests);
};
