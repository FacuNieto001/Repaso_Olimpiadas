/*Cifrado
Diseñar un algoritmo que cifre un texto ingresado como input.

El programa debe:

Tomar como argumento para inicar el programa la key con la cual va a cifrar.
Imprimir el resultado cifrado.
Para cifrar el texto se hará de la siguente manera:
Abecedario Real                                Key
ABCDEFGHIJKLMNÑOPQRSTUVWXYZ      =>      VWBFJHARZQMOESTCKIPGNDNXUYL
  ^                                        ^
  2                                        2
Se sustituirá la letra a cifrar del Abecedario Real por la correspondiente en la Key, y para identificarla se usará la posición. En el caso de arriba, C (que corresponde a la posición 2) se cifrará como B y así sucesivamente.

Aclaraciones
El argumento (Key) se debe validar:
Largo (27 caracteres, ni mas ni menos).
Que sea alfabético (No pueden haber numeros ni signos).
Que no se repitan los caracteres.
NO se contemplará los casos que contengan acentos o diéresis. Directamente se asume que no se ingresarán textos con esos caracteres.
El resultado cifrado debe respetar los signos, los números, los espacios y las mayúsculas.

Ejemplo:
  Texto plano: Estimados alumnos! me comunico para acercarles la invitacion a la clase que se dictara por zoom el dia v
  Texto cifrado: Nudfwthbu tsmwnbu! wñ kbwmnfkb ztvt tkñvktvsñu st fnlfdtkfbn t st kstuñ cmñ uñ hfkdtvt zbv qbbw
*/