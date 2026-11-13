(() => {
  const links = document.querySelectorAll('.contact-icons a[href^="mailto:"]');
  if (!links.length) return;
  const status = document.createElement("div");
  status.id = "contact-email-status";
  status.setAttribute("role", "status");
  status.setAttribute("aria-live", "polite");
  document.body.appendChild(status);
  let messageTimer;

  const notify = (message) => {
    clearTimeout(messageTimer);
    status.textContent = message;
    status.classList.add("is-visible");
    messageTimer = setTimeout(() => status.classList.remove("is-visible"), 3000);
  };

  const copyEmail = async (email) => {
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error("Clipboard API unavailable");
      await navigator.clipboard.writeText(email);
      notify("Email copied.");
    } catch {
      const field = document.createElement("textarea");
      field.value = email;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      const focusedElement = document.activeElement;
      document.body.appendChild(field);
      field.select();
      const copied = document.execCommand("copy");
      field.remove();
      focusedElement?.focus();
      notify(copied ? "Email copied." : `Copy this address: ${email}`);
    }
  };

  links.forEach((link) => {
    const email = decodeURIComponent(link.getAttribute("href").slice(7).split("?")[0]);
    link.setAttribute("href", "#");
    link.removeAttribute("target");
    link.setAttribute("role", "button");
    link.setAttribute("aria-label", "Copy email");
    link.setAttribute("title", "Copy email");
    link.addEventListener("click", (event) => {
      event.preventDefault();
      copyEmail(email);
    });
    link.addEventListener("keydown", (event) => {
      if (event.key !== " ") return;
      event.preventDefault();
      copyEmail(email);
    });
  });
})();
