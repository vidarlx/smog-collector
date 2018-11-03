const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const reader = require('./reader');
const validResponse = require('../test/fixtures/api/valid_response.json');

describe('reader', () => {
  it('should handle and parse values', () => {
    const record = reader(validResponse);

    expect(record).to.have.property('pm10');
    expect(record).to.have.property('pm25');
    expect(record.pm10).to.not.be.a('NaN');
    expect(record.pm25).to.not.be.a('NaN');
    expect(record.pm10).to.be.least(0);
    expect(record.pm25).to.be.least(0);
  });

  it('should return timestamp', () => {
    const record = reader(validResponse);

    expect(record).to.have.property('timestamp');
    expect(record.timestamp).to.not.be.a('NaN');
    expect(record.pm10).to.be.least(1);
  });

  it('should detect when invalid payload given', () => {
    const record = reader({});

    expect(record).to.equal(null);
    expect(() => reader({})).not.to.throw();
  });

});
