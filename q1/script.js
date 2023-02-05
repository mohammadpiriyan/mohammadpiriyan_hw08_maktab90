const uesr = {
  setterGenerator: function setterGenerator(params) {
    name: params;
    return this;
  },
};
const nameSetter = uesr.setterGenerator.call("jack");

console.log(nameSetter);
