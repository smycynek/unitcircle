const roundTwo = (num) => Math.round((num + Number.EPSILON) * 100) / 100;


export default roundTwo;