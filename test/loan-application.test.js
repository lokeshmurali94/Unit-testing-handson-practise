import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';

describe('LoanApplication', () => {
  // Write test cases inside this block
  it('should test the increment',async()=>{
    const el = await fixture(html`  <LoanApplication></LoanApplication>`);
  const des=Sinon.spy(el,'_increment').returns(true);
  //LoanApplication._increment();
  expect(des.calledOnce).to.be.true;
  });
});
