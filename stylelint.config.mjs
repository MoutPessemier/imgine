const stylelintConfig = {
  extends: ["stylelint-config-standard"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["apply", "variants", "responsive", "screen"],
      },
    ],
  },
};

export default stylelintConfig;
