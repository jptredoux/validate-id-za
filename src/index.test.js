import { expect } from 'chai';
import { test } from './.test-context';
import validate from './index';


test(__filename, () => {
  it('validate', () => {
    expect(validate()).to.equal(false);
    expect(validate(8001015009087)).to.equal(true);
    expect(validate('8001015009087')).to.equal(true);
  });
});
