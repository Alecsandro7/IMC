const button = document.getElementById("calculate")

function imc() {
  const name = document.getElementById("name").value
  const age = document.getElementById("age").value
  const height = document.getElementById("height").value
  const weight = document.getElementById("weight").value

  const result = document.getElementById("result")

  // validaçao se os campos estao preenchidos
  if (name !== "" && age !== "" && height !== "" && weight !== "") {
    const valueImc = (weight / (height * height)).toFixed(1)

    let classification = ""

    if (valueImc < 18.5) {
      classification = "Baixo peso"
    } else if ((valueImc < 24, 99)) {
      classification = "Normal"
    } else if (valueImc < 30.1) {
      classification = "Sobrepeso"
    } else if (valueImc > 30) {
      classification = "Obesidade"
    }

    result.textContent = `${name} seu IMC é de ${valueImc} (${classification}) `
  } else {
    result.textContent = "Preencha todos os campos!"
  }
}
button.addEventListener("click", imc)
