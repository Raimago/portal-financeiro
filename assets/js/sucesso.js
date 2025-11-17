// Verifica se veio de um erro de redirecionamento
const redirectError = sessionStorage.getItem("redirectError");

if (redirectError) {
  // Limpa o flag de erro
  sessionStorage.removeItem("redirectError");
  sessionStorage.removeItem("leadData");
} else {
  // Se não veio de erro, redireciona de volta para index
  window.location.replace("index.html");
}

