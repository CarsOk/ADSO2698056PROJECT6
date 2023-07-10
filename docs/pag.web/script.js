// Función para manejar el evento de clic en el carrito de compras
function addToCart() {
    // Aquí puedes agregar la lógica para agregar un producto al carrito
    console.log('Producto agregado al carrito');
  }
  
  // Obtener referencia al elemento del carrito de compras
  var cartElement = document.querySelector('.cart');
  
  // Asignar el evento de clic al carrito de compras
  cartElement.addEventListener('click', addToCart);
  