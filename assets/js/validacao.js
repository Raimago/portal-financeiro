const WEBHOOK_URL =
  "https://n8n.conhecimentointegrado.com.br/webhook/Portal-Financeiro";
const validationStatus = document.getElementById("validation-status");
const dataPreview = document.getElementById("data-preview");
const retryBtn = document.getElementById("retry-btn");

const leadData = sessionStorage.getItem("leadData");

if (!leadData) {
  window.location.replace("index.html");
}

const lead = JSON.parse(leadData);

dataPreview.innerHTML = `
  <strong>CPF:</strong> ${lead.cpf}<br />
  <strong>E-mail:</strong> ${lead.email}
`;

const updateStatus = (message, statusClass = "") => {
  validationStatus.innerHTML = `<p class="${statusClass}">${message}</p>`;
};

let redirectTimeout = null;

const redirectTo = (url) => {
  sessionStorage.removeItem("leadData");
  
  // Marca que tentou redirecionar
  sessionStorage.setItem("redirectAttempted", "true");
  sessionStorage.setItem("redirectUrl", url);
  
  // Tenta redirecionar imediatamente
  window.location.replace(url);
  
  // Se não redirecionar em 5 segundos, vai para página de erro
  redirectTimeout = setTimeout(() => {
    // Se ainda está na página de validação após 5 segundos, vai para erro
    if (window.location.pathname.includes("validacao.html")) {
      sessionStorage.setItem("redirectError", "true");
      window.location.replace("sucesso.html");
    }
  }, 5000);
};

const redirectToSuccess = () => {
  sessionStorage.setItem("redirectError", "true");
  sessionStorage.removeItem("leadData");
  window.location.replace("sucesso.html");
};

const sendToWebhook = async () => {
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        document: lead.cpf.replace(/\D/g, ""),
        email: lead.email,
      }),
    });

    if (!response.ok) {
      throw new Error(`Status ${response.status}`);
    }

    let payload = {};

    try {
      payload = await response.json();
    } catch (jsonError) {
      console.warn("Resposta sem JSON. Usando fallback.", jsonError);
    }

    const redirectUrl = payload?.redirectUrl;

    if (redirectUrl) {
      updateStatus("Dados confirmados. Redirecionando...", "success");
      redirectTo(redirectUrl);
      return;
    }

    // Se não tem redirectUrl, vai direto para página de erro
    updateStatus("Verificando dados...", "");
    redirectToSuccess();
  } catch (error) {
    console.error(error);
    updateStatus(
      "Não foi possível validar os dados. Tente novamente em instantes.",
      "error"
    );
    retryBtn.hidden = false;
  }
};

retryBtn.addEventListener("click", () => {
  window.location.replace("index.html");
});

sendToWebhook();

