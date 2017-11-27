import assert from 'assert';
import expect from 'chai';
import should from 'chai';

import MyProject from './index.js';

describe('Arithmetic', () => {  
   it('should calculate 1 + 1 correctly', () => {
      assert.equal((new MyProject()).addTwo(1,1), 2);
   });
});
