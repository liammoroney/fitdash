module.exports = {
    "extends": ["airbnb", "prettier", "prettier/react"],
    "parser": "babel-eslint",
    "rules": { 
        "react/jsx-filename-extension": [0],
        "react/destructuring-assignment": [0],
        "react/jsx-no-undef": [0],
        "linebreak-style": [0],
        "react/prop-types": [0],
        "react/forbid-prop-types": [0],
        "react-hooks/rules-of-hooks": "error"
    },
    "env": { 
        "browser": true,
        "jest": true,
        "es6": true,
        "node": true
    },
    "globals":{
        "require": true
    },
    "extends": [
        "airbnb",
        "prettier",
        "prettier/react"
    ],
    "plugins": [
        "prettier",
        "react-hooks"
    ]
};