// const callback = function (elem) {
//   elem.style.backgroundColor = "red";
// };
// elemCreator("div", callback);
const elemCreator = function (element, cb) {
  const newElem = document.createElement(element);
  cb(newElem);
  document.body.append(newElem);
};
elemCreator("div", (elem) => {
  elem.style.backgroundColor = "blue";
  elem.style.width = "250px";
  elem.style.height = "250px";
});
