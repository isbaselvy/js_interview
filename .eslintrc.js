module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "standard",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        'BigInt': true
    },
    "parserOptions": {
        "ecmaVersion": 2019
    },
    "rules": {
        // "semi": ["error", "always"],
        'indent': 'off',
        "space-before-function-paren": 0,
        "eqeqeq": ["off"]
    }
};