import ProductManager from './ProductManager.js';
import Product from './Product.js';
import path from 'path';

//Creacion de instancia de la clase ProductManager
const productManager = new ProductManager();
productManager.customConstructor(path.resolve() + "\\products.json");

//Creacion del producto de prueba, de la clase Product
const miProducto1 = new Product('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);

(async () => {
  //Imprimimos el resultado de getProducts con la instancia recien creada.
  console.log(`Instancia de productManager recien creada, con lista de productos = ${JSON.stringify(await productManager.getProducts())}`);

  // Agregamos el producto con los campos a testear, e imprimimos nuevamente la lista de productos para comprobar que se haya generado correctamente el id
  await productManager.addProduct(miProducto1);
  console.log(`Agregamos el producto a nuestra lista de productos = ${JSON.stringify(await productManager.getProducts())}`);

  //Imprimimos el producto con id 0
  console.log(`El producto con id 0 es: ${JSON.stringify(await productManager.getProductById(0))}`);

  //Creamos nuevo producto para hacer el update del id 0
  const miProductoUpdate = new Product('producto prueba', 'Este es un producto actualizado', 100, 'Sin imagen', 'abc123', 40);
  await productManager.updateProduct(0, miProductoUpdate);
  console.log(`Lista de productos luego de hacer el update: ${JSON.stringify(await productManager.getProducts())}`);

  //Borramos el producto con id 0
  await productManager.deleteProduct(0);
  console.log(`Lista de productos luego de hacer el delete: ${JSON.stringify(await productManager.getProducts())}`);
})();