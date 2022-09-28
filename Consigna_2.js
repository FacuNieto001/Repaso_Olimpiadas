/*
Consigna:
Armar el algoritmo para un cajero de banco. Este posee billetes de: 50, 20, 10, 5. Con esto el cajero debe:
- Aceptar un monto de entrada (int) que representa el monto a retirar.
- Calcular y mostrar billete de cada monto entrega en total.

$ python cajero.py
Monto a retirar: 221

Cantidad de billetes de 50: 4
Cantidad de billetes de 20: 1
Cantidad de billetes de 10: 0
Cantidad de billetes de 5: 0
Cantidad de billetes de 1: 1
*/

function Cajero(cantidad){

    let Billete50 = 50;
    let Billete20 = 20;
    let Billete10 = 10;
    let Billete5 = 5;
    let Billete1 = 1;

    Fraccionar50 = Math.floor(cantidad / Billete50);
    Resto50 = cantidad % Billete50;
    Fraccionar20 = Math.floor(Resto50 / Billete20);
    Resto20 = Resto50 % Billete20;
    Fraccionar10 = Math.floor(Resto20 / Billete10);
    Resto10 = Resto20 % Billete10;
    Fraccionar5 = Math.floor(Resto10 / Billete5);
    Resto5 = Resto10 % Billete5;
    Fraccionar1 = Math.floor(Resto5 / Billete1);
    Resto1 = Resto5 % Billete1;

    console.log("MONTO: " + cantidad)
    console.log("Cantidad de billetes de 50:" + Fraccionar50);
    console.log("Cantidad de billetes de 20:" + Fraccionar20);
    console.log("Cantidad de billetes de 10:" + Fraccionar10);
    console.log("Cantidad de billetes de 5:" + Fraccionar5);
    console.log("Cantidad de billetes de 1:" + Fraccionar1);
    console.log("-------------------------------------------");
}

Cajero (221);
Cajero (532);