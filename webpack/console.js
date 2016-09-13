const error = console.error;

const blackList = [
    'Warning: [react-router] You cannot change <Router routes>; it will be ignored'
];

console.error = (...args) => {

    if (blackList.indexOf(args[0]) < 0) {

        error.apply(console, args);
    }
};
