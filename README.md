---
descripcion: https://ull-esit-gradoii-pl.github.io/practicas/esprima-logging
alumno: "Nombre Apellidos  AluXXX"
---

# [Práctica Espree Logging](https://ull-esit-gradoii-pl.github.io/practicas/esprima-logging)

### Procesadores de lenguajes 2021-2022

#### Nombre Apellidos  AluXXX 

## Resumen de lo aprendido

Blah 


## El ejecutable

El ejecutable está en `bin/logging.js`

```
✗ bin/logging.js -h
Usage: jslogging [options] <filename>

Adds logs to javascript code

Arguments:
  filename                 file with the original code

Options:
  -V, --version            output the version number
  -o, --output <filename>  file in which to write the output (default: "output.js")
  -h, --help               display help for command
```

```
git:(main) ✗ cat test/test1.js 
function foo(a, b) {   
    var x = 'blah';   
    var y = (function () {
      return 3;
    })();
  }     
foo(1, 'wut', 3);
➜  git:(template) ✗ bin/logging.js test/test1.js -o salida.js
File read succesfully
Output written succesfully in salida.js
➜  git:(template) ✗ node salida.js
Entering foo(1, wut) at line 1
Entering <anonymous function>() at line 3
```

Blah 

## CLI con [Commander.js](https://www.npmjs.com/package/commander)

Blah

## Reto 1: Soportar funciones flecha

Blah

```javascript
...
```

## Reto 2: Añadir el número de línea

Blah 

```javascript
...
```

```javascript
...
```

## Tests

Blah

```
...
```