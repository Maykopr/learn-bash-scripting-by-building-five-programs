const assert = require('assert');
const { getLastCommand, getDirectoryContents } = require('./utils');

describe('You', () => {
  it('should use the "touch" command to create the correct file', async () => {
    const directoryContents = await getDirectoryContents(`..`);
    const lastCommand = await getLastCommand();

    assert(directoryContents.includes('questionnaire.sh') && lastCommand[0] === 'touch' && /questionnaire\.sh/g.test(lastCommand[1]));
  });
});
