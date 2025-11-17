const form = document.getElementById("lead-form");
const cpfInput = document.getElementById("cpf");
const emailInput = document.getElementById("email");
const helperText = document.querySelector(".helper-text");

const cpfMask = (value) =>
  value
    .replace(/\D/g, "")
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

cpfInput.addEventListener("input", (event) => {
  event.target.value = cpfMask(event.target.value);
});

const isValidCPF = (value) => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value);

const setHelper = (message, isError = false) => {
  helperText.textContent = message;
  helperText.classList.toggle("error", isError);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cpf = cpfInput.value.trim();
  const email = emailInput.value.trim();

  if (!isValidCPF(cpf)) {
    setHelper("Informe um CPF válido no formato 000.000.000-00.", true);
    cpfInput.focus();
    return;
  }

  if (!emailInput.checkValidity()) {
    setHelper("Informe um e-mail válido.", true);
    emailInput.focus();
    return;
  }

  setHelper("Seus dados estão seguros. Clique em validar para continuar.");

  sessionStorage.setItem(
    "leadData",
    JSON.stringify({
      cpf,
      email,
      timestamp: new Date().toISOString(),
    })
  );

  window.location.href = "validacao.html";
});

