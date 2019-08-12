"use strict";

/* global module */
module.exports = {
  settings: {
    react: {
      version: "16.8.4",
    },
  },
  plugins: ["react", "import", "eslint-plugin-prettier"],
  extends: [
    "eslint-config-prettier",
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    "accessor-pairs": "error",
    "array-bracket-spacing": ["error", "never"],
    "arrow-body-style": 0, // error ?
    "arrow-parens": 0,
    "arrow-spacing": ["error", { before: true, after: true }],
    "brace-style": "error",
    camelcase: 0,
    "class-methods-use-this": 0,
    "consistent-return": "warn",
    "constructor-super": "error",
    curly: ["error", "all"],
    "default-case": [
      "error",
      {
        commentPattern: "^default\\sis\\sredundant",
      },
    ],
    "dot-notation": [
      "error",
      {
        allowKeywords: true,
      },
    ],
    eqeqeq: ["error", "smart"],
    "guard-for-in": "error",
    "import/export": "error",
    "import/exports-last": "warn", // error
    "import/extensions": [
      "warn",
      {
        js: "never",
        jsx: "never",
        json: "always",
      },
    ],
    "import/max-dependencies": 0, // ["warn", { max: 10 }],
    "import/named": "warn", // ?
    "import/namespace": "error",
    "import/newline-after-import": "error",
    "import/no-absolute-path": "error",
    "import/no-anonymous-default-export": [
      "warn", // error
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true,
        allowLiteral: false,
        allowObject: false,
      },
    ],
    "import/no-cycle": "error",
    "import/no-duplicates": "error",
    "import/no-extraneous-dependencies": 0, // warn
    "import/no-mutable-exports": "error",
    "import/no-named-as-default-member": "warn",
    "import/no-named-default": "error",
    "import/no-named-export": "error",
    "import/no-namespace": 0, // warn
    "import/no-self-import": "error",
    "import/no-unresolved": 0,
    "import/no-useless-path-segments": [
      "error",
      {
        noUselessIndex: true, // ?
      },
    ],
    "import/order": [
      "error",
      {
        groups: [["builtin", "external", "internal"]],
      },
    ],
    "import/prefer-default-export": 0,

    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "key-spacing": "error",
    "keyword-spacing": [
      "error",
      {
        before: true,
        after: true,
      },
    ],
    "linebreak-style": "error",
    "lines-around-comment": [
      "error",
      {
        beforeBlockComment: true,
        afterBlockComment: false,
        allowBlockStart: true,
        allowObjectStart: true,
        allowArrayStart: true,
      },
    ],
    "max-len": 0,
    "new-cap": 0, // error
    "newline-after-var": "error",
    "newline-before-return": "error",
    "no-array-constructor": "error",
    "no-class-assign": "error",
    "no-console": "warn",
    "no-const-assign": "error",
    "no-constant-condition": "error",
    "no-continue": 0,
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-else-return": [
      "error",
      {
        allowElseIf: true,
      },
    ],
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-empty-pattern": "error",
    "no-ex-assign": "error",
    "no-extend-native": "error",
    "no-extra-boolean-cast": "error",
    "no-func-assign": "error",
    "no-inner-declarations": 0,
    "no-invalid-regexp": "error",
    "no-lonely-if": "error",
    "no-native-reassign": "error",
    "no-negated-in-lhs": "error",
    "no-nested-ternary": 0,
    "no-new": 0,
    "no-new-object": "error",
    "no-new-symbol": "error",
    "no-param-reassign": 0,
    "no-path-concat": "error",
    "no-plusplus": [
      "warn",
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    "no-redeclare": "error",
    "no-regex-spaces": "error",
    "no-restricted-syntax": [
      "error",
      {
        selector: "LabeledStatement",
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
    ],
    "no-return-assign": ["warn", "always"],
    "no-sequences": "error",
    "no-shadow": "warn",
    "no-shadow-restricted-names": "error",
    "no-tabs": "error",
    "no-this-before-super": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef": 0,
    "no-underscore-dangle": 0,
    "no-unneeded-ternary": 0,
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unused-expressions": 0,
    "no-unused-vars": [
      "warn", // error
      {
        vars: "all",
        args: "none",
      },
    ],
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": 0,
    "no-useless-rename": "error",
    "no-var": "error",
    "no-void": "error",
    "no-with": "error",
    "object-curly-spacing": 0,
    "object-shorthand": ["error", "always"],
    "one-var": ["warn", "never"],
    "padded-blocks": ["error", "never"],
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "return",
      },
      {
        blankLine: "always",
        prev: "multiline-expression",
        next: "*",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "multiline-expression",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "multiline-expression",
      },
      {
        blankLine: "any",
        prev: "empty",
        next: "multiline-expression",
      },
      {
        blankLine: "always",
        prev: "multiline-block-like",
        next: "*",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "multiline-block-like",
      },
      {
        blankLine: "always",
        prev: "*",
        next: "multiline-block-like",
      },
      {
        blankLine: "any",
        prev: "case",
        next: "case",
      },
    ],
    "prefer-arrow-callback": "error",
    "prefer-const": [
      "warn",
      {
        destructuring: "all",
        ignoreReadBeforeAssign: true,
      },
    ],

    "prefer-destructuring": ["warn", { object: true, array: true }],
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "prettier/prettier": "error",
    radix: 0,
    "react/boolean-prop-naming": [
      "warn", // error
      { rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+" },
    ],
    "react/button-has-type": ["warn", { reset: false }],
    "react/default-props-match-prop-types": [
      "warn",
      {
        allowRequiredDefaults: true,
      },
    ],
    "react/destructuring-assignment": 0,
    "react/display-name": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-boolean-value": "error",
    "react/jsx-child-element-spacing": 0,
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-curly-spacing": "error",
    "react/jsx-equals-spacing": "error",

    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
    "react/jsx-fragments": "error",
    "react/jsx-handler-names": [
      "warn", // error
      {
        eventHandlerPrefix: "_on",
        eventHandlerPropPrefix: "(on|ref|inner)",
      },
    ],
    "react/jsx-key": "error",

    "react/jsx-max-depth": ["warn", { max: 3 }],
    "react/jsx-no-bind": "warn", // error
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-target-blank": "error",
    "react/jsx-no-undef": ["error", { allowGlobals: true }],
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-pascal-case": "error",
    "react/jsx-props-no-multi-spaces": "error",
    "react/jsx-props-no-spreading": 0,

    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,

        ignoreCase: true,
        noSortAlphabetically: true,
        reservedFirst: ["key"],
      },
    ],
    "react/jsx-tag-spacing": [
      "error",
      {
        closingSlash: "never",
        beforeSelfClosing: "always",
        afterOpening: "never",
        beforeClosing: "allow",
      },
    ],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-wrap-multilines": "error",

    "react/no-access-state-in-setstate": "warn", // error
    "react/no-array-index-key": 0,
    "react/no-children-prop": "error",
    "react/no-deprecated": "warn", // error
    "react/no-did-mount-set-state": "warn", // error
    "react/no-did-update-set-state": "error",
    "react/no-find-dom-node": "warn", // error
    "react/no-direct-mutation-state": "error",
    "react/no-multi-comp": "warn", // error
    "react/no-redundant-should-component-update": "error",
    "react/no-render-return-value": "error",
    "react/no-string-refs": "error",
    "react/no-unescaped-entities": "warn",
    "react/no-unknown-property": "error",
    "react/no-unsafe": "error",
    "react/no-unused-prop-types": "warn",
    "react/no-unused-state": "warn", // error
    "react/no-will-update-set-state": ["error", "disallow-in-func"],
    "react/prefer-es6-class": ["error", "always"],
    "react/prefer-read-only-props": "error",
    "react/prefer-stateless-function": 0,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": "error",
    "react/require-default-props": 0,
    "react/require-optimization": "warn",
    "react/require-render-return": "error",
    "react/self-closing-comp": "error",
    "react/sort-comp": [
      "warn", // error
      {
        order: [
          "static-methods",
          "lifecycle",
          "everything-else",
          "private",
          "listeners",
          "rendering",
        ],
        groups: {
          lifecycle: [
            "displayName",
            "propTypes",
            "defaultProps",
            "contextTypes",
            "childContextTypes",
            "mixins",
            "statics",
            "state",
            "getDefaultProps",
            "getDerivedStateFromProps",
            "getInitialState",
            "constructor",
            "getChildContext",
            "componentWillMount",
            "UNSAFE_componentWillMount",
            "componentDidMount",
            "componentWillReceiveProps",
            "UNSAFE_componentWillReceiveProps",
            "shouldComponentUpdate",
            "componentWillUpdate",
            "UNSAFE_componentWillUpdate",
            "getSnapshotBeforeUpdate",
            "componentDidUpdate",
            "componentDidCatch",
            "componentWillUnmount",
          ],
          rendering: ["/^render.+$/", "render"],
          listeners: ["/^_on[A-Z]\\w*$/", "/^_onRef[A-Z]\\w*$/"],
          private: ["/^_\\w+"],
        },
      },
    ],
    "react/sort-prop-types": "error",
    "react/state-in-constructor": ["warn", "never"],
    "react/style-prop-object": "error",
    "require-atomic-updates": "warn", // error
    "rest-spread-spacing": ["error", "never"],
    "spaced-comment": ["error", "always"],
    "use-isnan": "error",
    "valid-typeof": "error",
    "yield-star-spacing": ["error", "after"],
    yoda: ["error", "never"],
  },
};
