const numbers = [1763687364, 4763687363, 7867867862,' AAAA#####AAAA#87@768767382672', 4763687363];

const isPhoneNumber = (numbers) => {
    return typeof number === 'number' && number.toString().length === 10;
}

const actualPhoneNumbers = numbers.filter(isPhoneNumber);

