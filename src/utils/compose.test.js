import chai, { expect } from 'chai';
import { sandbox } from 'sinon';
import sinonChai from 'sinon-chai';
import { test } from '../.test-context';
import compose from './compose';

chai.use(sinonChai);


test(__filename, () => {
  let sinonSandbox;

  before(() => {
    sinonSandbox = sandbox.create();
  });

  afterEach(() => {
    sinonSandbox.restore();
  });


  it('accepts one function and initial value', () => {
    const initialValue = 'initialValue';
    const function1Output = 'function1Output';
    const function1 = sinonSandbox.stub().returns(function1Output);

    const result = compose(function1)(initialValue);

    expect(function1).to.have.been.calledOnce
      .and.to.have.been.calledWithExactly(initialValue);
    expect(result).to.equal(function1Output);
  });


  it('accepts multiple functions and initial value', () => {
    const initialValue = 'initialValue';
    const function1Output = 'function1Output';
    const function2Output = 'function2Output';
    const function1 = sinonSandbox.stub().returns(function1Output);
    const function2 = sinonSandbox.stub().returns(function2Output);

    const result = compose(function1, function2)(initialValue);

    expect(function1).to.have.been.calledOnce
      .and.to.have.been.calledWithExactly(initialValue);
    expect(function2).to.have.been.calledOnce
      .and.to.have.been.calledAfter(function1)
      .and.to.have.been.calledWithExactly(function1Output);
    expect(result).to.equal(function2Output);
  });
});
