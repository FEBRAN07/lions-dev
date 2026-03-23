let entradaUsuario = "";

process.stdin.on("data", function (data) {
  entradaUsuario = data.toString();

  process.stdout.write("Você digitou: " + entradaUsuario);

  process.exit();
});
