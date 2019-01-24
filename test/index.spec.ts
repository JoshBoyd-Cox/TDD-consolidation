import {NameCombiner } from '../src/index';
import {expect } from 'chai';

// describe('name combiner', () => {
//     it('should contain both names', () => {
//         let combiner = new NameCombiner();
//         combiner.combine('Josh', 'Boyd-Cox');
//         expect(combiner.name).to.equal('Josh Boyd-Cox');
        
//         combiner.combine('Ben', 'Tomaney');
//         expect(combiner.name).to.equal('Ben Tomaney');
        
//     })
// })

// describe('name splitter', () => {
//     it('should split names successfully when 2 names', () => {
//         let combiner = new NameCombiner();
//         combiner.split('Josh Boyd-Cox');
//         expect(combiner.firstName).to.equal('Josh');
//         expect(combiner.lastName).to.equal('Boyd-Cox');
//     })

//     it('should handle names with a a middleName', () => {
//         let combiner= new NameCombiner();
//         combiner.split('Mark de Cates');
//         expect(combiner.firstName).to.equal('Mark');
//         expect(combiner.middleName).to.equal('de');
//         expect(combiner.lastName).to.equal('Cates');

//         combiner.split('Virgil van Dijk');
//         expect(combiner.firstName).to.equal('Virgil');
//         expect(combiner.middleName).to.equal('van');
//         expect(combiner.lastName).to.equal('Dijk');
//     })

//     it('should contain capitalisation on the first letter of firstName and lastName', () => {
//         let combiner = new NameCombiner();
//         combiner.split('josh boyd-cox');
//         expect(combiner.firstName).to.equal('Josh');
//         expect(combiner.lastName).to.equal('Boyd-cox');
//     })

//     it('should contain capitalisation on the first letter of firstName and lastName, but not on the middle name', () => {
//         let combiner= new NameCombiner();
//         combiner.split('mark de cates');
//         expect(combiner.firstName).to.equal('Mark');
//         expect(combiner.middleName).to.equal('de');
//         expect(combiner.lastName).to.equal('Cates');
        
//         combiner.split('virgil van dijk');
//         expect(combiner.firstName).to.equal('Virgil');
//         expect(combiner.middleName).to.equal('van');
//         expect(combiner.lastName).to.equal('Dijk');
//     })
// })