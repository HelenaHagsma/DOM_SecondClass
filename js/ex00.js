/*Exemplo 01 */
var elemento
elemento = document.getElementById("titulo")

/*Exemplo 02 */
function mudartitulo() {
    var titulo
    titulo = document.getElementById("titulo")
    titulo.innerHTML = "Alterando o título via JS"
}

/*Exemplo 03 */
function mudarestilo() {
    var titulo
    titulo = document.getElementById("titulo")
    titulo.style.color = "#900088"
    titulo.style.backgroundColor = "#d9ff00ff"
    titulo.style.fontSize = "68px"
    titulo.style.fontFamily = "Indie Flower, cursive"
}
/*Exemplo 04 */
function destacar()
{
    var titulo=document.getElementById("titulo")
    titulo.classList.add("destacado")
}
/*Exemplo 05 */
function remover()
{
    var titulo = document.getElementById("titulo")
    titulo.classList.remove("destacado")
}
/*Exemplo 06 */
function alternar()
{
    var titulo = document.getElementById("titulo")
    titulo.classList.toggle("destacado")
}
/*Exemplo 07*/

function adicionartexto()
{
    var novo
    novo=document.createElement("p")
    novo.id="paragrafo"
    novo.innerText="Novo parágrafo criado com JS"

    var div=document.getElementById("container")
    div.appendChild(novo)
}
/*Exemplo 08 */
function removertexto()
{
    var p=document.getElementById("paragrafo")
    if(p)
    {
        p.remove()
    }
    else
    {
        alert("Não há texto para remover!")
    }
}