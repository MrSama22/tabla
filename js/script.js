let numero = 0
let cantidad = document.getElementsByClassName(numero).innerHTML

const agregar = () => {
    let nuevaFila = document.createElement("tr");
    let texto = `
    <td><input type="text" placeholder="pagina"></td>
    <td><input type="text" placeholder="palabra"></td>
    <td><input type="text" placeholder="pronunciacion"></td>
    <td><input type="text" placeholder="significado"></td>
    <td><textarea placeholder="definicion"></textarea></td>
    <td><textarea placeholder="ejemplo"></textarea></td>
    <button onclick="eliminarFila(this)" class="eliminar_btn">
    <ion-icon name="close-circle-outline" id = "${numero}"></ion-icon>
  </button>
    `;

    nuevaFila.innerHTML = texto;
    document.querySelector("table").appendChild(nuevaFila);

    numero++
    console.log(numero)
    return;



}
const eliminarFila = (boton) => {
    let fila = boton.closest("tr");
    fila.remove();
}
