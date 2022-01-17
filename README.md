# persistent-state
Persistent state for react and next js application with client and server side rendering capabilities

## Setup

### Installation
In your terminal type.
```
npm i @adil-01/persistent-state
```
In your package.json file you can view the new added package **[@adil-01/persistent-state](https://www.npmjs.com/package/@adil-01/persistent-state)**

### Usage

**```usePersistServer``` takes 3 arguements.**
- **key :** name of the state in your project must be a uniquie key.
- **dafaultVal :** Intial value or default value where ```usePersistServer``` falls down if state is not persisted yet.
- **duration :** Expiry in minutes upto which ```usePersistServer``` state is persisted.

In your react or next js project import the custom persistent hook
```javascript
import { usePersistServer } from '@adil-01/persistent-state';
```

Calling the persistent state hook in your required file
```javascript
const [persistedState, setPersistedState] = usePersistServer('my_string', '', 5); 
```
```persistedState``` with name **my_string** can store **string** as we given default value as empty string and it will persist for **5 minutes**

Updating new value is same as using normal **useState** in react
```javascript
setPersistedState('new_string');
```

## Examples

### Datatype - Number
```javascript
const [persistedState, setPersistedState] = usePersistServer('my_number', 100, 7); 
```
```persistedState``` with name **my_number** can store **number** as we given default value as 100 and it will persist for **7 minutes**

### Datatype - Array
```javascript
const [persistedState, setPersistedState] = usePersistServer('my_array', [], 15); 
```
```persistedState``` with name **my_array** can store **array** as we given default value as [] and it will persist for **15 minutes**

___

> JavaScript objects are not supported for ```usePersistServer``` as a state in current version, will be supported in newer versions
