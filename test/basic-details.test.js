import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/LoanBasicDetails/BasicDetails.js';

describe('Basic details', () => {
  // Write test cases inside this block
  // refer basic-details.js files


  it('style validation', async()=>{
    const style=await fixture(html `<basic-details></basic-details>`)
    const name=style.shadowRoot.querySelectorAll('lion-form');
    expect(name).to.be.accessible();
  });

});
