const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')
const dotenv = require('dotenv')
dotenv.config()

//Creamos el almacen
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'demonslayer',
    allowedFormats: ['jpg', 'png', 'jpeg', 'gif'],
  },
})

//Creamos la función de subir imagenes
const upload = multer({ storage })

//Función de borrado de imagenes
const deleteImgCloudinary = (imgUrl) => {
  //----Con los siguientes métodos de JavaScript accederemos a la ruta de la imagen, su nombre, su carpeta y el id con el que se almacena en cloudinary para localizarlo nivel a nivel.
  const imgSplited = imgUrl.split('/')
  const nameSplited = imgSplited[imgSplited.length - 1].split('.')
  const folderSplited = imgSplited[imgSplited.length - 2]
  const public_id = `${folderSplited}/${nameSplited[0]}`

  //----Con el método destroy localizamos nuestro archivo e imprimimos por callback un console.log indicando que se ha podido destruir correctamente.
  cloudinary.uploader.destroy(public_id, () => {
    console.log('Image delete in cloudinary')
  })
}

//Configuramos Cloudinary para su conexión con nuestra cuenta
const configCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    api_key: process.env.CLOUDINARY_API_KEY,
  })
}

module.exports = { upload, deleteImgCloudinary, configCloudinary }
