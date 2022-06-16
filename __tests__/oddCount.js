function oddCount(n) {
return Math.floor(n/2);
}



describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
     expect(oddCount(15)).toBe (7);
     expect(oddCount(15023)).toBe (7511);
   });
 });
 