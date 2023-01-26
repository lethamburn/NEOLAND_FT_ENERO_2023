let x = 10;

//INTENTA HACER ESTO
try {
  x = x + y;
  //SI NO PUEDES CATCHEA EL ERROR
} catch (error) {
  console.log("NO PUEDO", error.message);
  //Y FINALMENTE ->
} finally {
  console.log("TERMINÉ");
}
