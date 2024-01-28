function convertir() {
  const montoInput = document.getElementById('monto');
  const monedaSelect = document.getElementById('moneda');
  const resultadoDiv = document.getElementById('resultado');

  const monto = montoInput.value;
  const moneda = monedaSelect.value;

  if (monto === '' || isNaN(monto) || monto <= 0) {
    alert('Por favor, ingrese un monto válido.');
    return;
  }

  fetch('https://mindicador.cl/api')
    .then(response => response.json())
    .then(data => {
      const tipoCambio = data[moneda.toLowerCase()].valor;
      const resultado = monto / tipoCambio;

      resultadoDiv.innerHTML = `${resultado.toFixed(2)} ${moneda}`;
    })
    .catch(error => {
      console.error('Error al obtener los tipos de cambio:', error);
      resultadoDiv.innerHTML = 'Error al obtener los tipos de cambio. Por favor, inténtelo de nuevo más tarde.';
    });
}