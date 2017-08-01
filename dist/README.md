# How to install

- with npm: `npm i -S shut-down`
- with yarn: `yarn add shut-down`

# How to import

### Plain NodeJS

```javascript
var shutDown = require('shut-down');
```

### NodeJS + transpiler (i.e. Babel)

```javascript
import shutDown from 'shut-down';
```

# Example

### Promise

```javascript
shutDown()
  .then(() => {
    console.log('ok');
  })
  .catch((err) => {
    console.error('err', err);
  });
```

### Async / Await

```javascript
try {
  await shutDown();
  console.log('ok');
} catch (err) {
  console.error('err', err);
}
```
