# South Africa ID Validator

## South African ID validation rules

http://geekswithblogs.net/willemf/archive/2005/10/30/58561.aspx

## Usage

```js
import validate from 'validate-id-za';

const idNumber = '8001015009087';

validate(idNumber);
```

## Contribute

### Global dependencies

- NodeJS 6+ (https://nodejs.org/en/)
- yarn (https://yarnpkg.com/) - `npm install -g yarn`

### Testing

#### Tools

- Framework - Mocha
- Assertion Library - Chai (using expect)
- Spies, Stubs, Mocks, etc - Sinon
- Linting - ESLint

#### Commands

| Command            | Description                        |
|--------------------|------------------------------------|
| `yarn test`        | run linter + unit tests            |
| `yarn test:lint`   | run linter                         |
| `yarn test:runner` | run unit tests                     |
| `yarn test:watch`  | run unit tests + watch for changes |
