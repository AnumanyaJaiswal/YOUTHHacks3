let counter = 100;
const generateComplaintId = () => {
  counter += 1;
  return `CMP${counter}`;
};
module.exports = generateComplaintId;
