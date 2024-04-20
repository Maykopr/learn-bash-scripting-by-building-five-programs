const assert = require('assert');
const { getLastCommand } = require('./utils');

describe('You', () => {
  it('should enter the suggested command in the terminal', async () => {
    const lastCommand = await getLastCommand(0, false);

    assert(/^\s*echo\s+\$\(\(\s*\$?J\s*\*\s*5\s*\+\s*25\s*\)\)\s*;?\s*$/.test(lastCommand));
  });
});
