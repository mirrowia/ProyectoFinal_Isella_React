# MirrowIA E-Commerce

## INSTALACION

Se debe clonar el repositorio en un directorio local. Una vez hecho esto se debe dirigir a la carpeta raiz del proyecto y desde una terminal ejecutar **npm install**.

## USO

Una vez instalado se debe ejecutar con el comando **npm start** y automáticamente se debería abrir el navegador predeterminado con nuestra tienda. De no ser así dirigirse a la siguiente ruta desde nuestro navegador de preferencia **http://localhost:3000**

## DETALLES

Es una tienda online con una base de datos en Firestore, se pueden seleccionar los productos deseados y agregar a un carro para luego proceder a una orden de compra que se indica que se enviará por correo.

La tienda cuenta con un control de stock que se actualiza a medida que el usuario va incorporando productos al carro. Si el usuario los elimina del mismo la cantidad de productos volverá a la que fué inicialmente.

Los productos se pueden filtrar por categoría no así por nombre ya que el buscador es una incorporación a futuro, mismo como el botón de usuario.

### Categorias

![Categories](https://github.com/mirrowia/ProyectoFinal_Isella_React/blob/main/preview/Categories.gif)

### Stock

![Stock](https://github.com/mirrowia/ProyectoFinal_Isella_React/blob/main/preview/Stock.gif)

### Carro

![Cart](https://github.com/mirrowia/ProyectoFinal_Isella_React/blob/main/preview/Cart.gif)

### Checkout

![Checkout](https://github.com/mirrowia/ProyectoFinal_Isella_React/blob/main/preview/Checkout.gif)

## A TENER EN CUENTA

El único problema que **pude detectar** es al momento de refrescar la página del carrito no trae los items del localstore. Por lo que se debe acceder desde el ícono del carrito.
