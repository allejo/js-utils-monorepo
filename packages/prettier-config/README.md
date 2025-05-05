# @allejo/prettier-config

## Usage

```bash
npm install --save-dev prettier @allejo/prettier-config
```

```js
// package.json
{
    // ...
    "prettier": "@allejo/prettier-config"
}
```

## Testing

To run the unit tests, you need to install peer dependencies when setting up this project.

```bash
npm install --legacy-peer-deps
```

If you don't install peer dependencies, you will get an error when running the tests.

```
  Expected Prettier output
    1) should order imports correctly


  0 passing (660ms)
  1 failing

  1) Expected Prettier output
       should order imports correctly:
     Error: Cannot find package 'prettier-plugin-tailwindcss' imported from js-utils-monorepo/packages/prettier-config/noop.js
```
