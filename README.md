# aistoryfrontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Components

#### *contentComponents/subContentComponents*

##### TextView

A component which either takes in an text prop or child component text:

````javascript
<TextView text="This text will be shown"/>
````

````javascript
<TextView>This Text will be shown</TextView>
````

````javascript
<TextView text="This text will be shown">This Text won't be shown</TextView>
````