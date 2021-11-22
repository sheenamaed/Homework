const participants = [
{ name: 'Abu', idNumber: 'S7282395H', gender: 'male' },
{ name: 'Mary', idNumber: 'T4689018Z', gender: 'female' },
{ name: 'Suzi', idNumber: 'G5512873T', gender: 'female' },
{ name: 'T Chakra', idNumber: 'T8198514B', gender: 'male' }
];

// TODO: assign idNumber of all participants to idNumbers 

const getIds = participants.map(participant =>  participant.idNumber);

console.log(getIds);
