class MobileNavbarserv {
    constructor(mobileMenuserv, navListserv, navLinksserv) {
      this.mobileMenuserv = document.querySelector(mobileMenuserv);
      this.navListserv = document.querySelector(navListserv);
      this.navLinksserv = document.querySelectorAll(navLinksserv);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    // Anima os links com delay escalonado
    animateLinks() {
      this.navLinksserv.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
      });
    }
  
    // Lida com clique no botão do menu
    handleClick() {
      this.navListserv.classList.toggle(this.activeClass);
      this.mobileMenuserv.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    // Adiciona o evento de clique ao menu mobile
    addClickEvent() {
      this.mobileMenuserv.addEventListener("click", this.handleClick);
    }
  
    // Inicializa o menu mobile
    init() {
      if (this.mobileMenuserv) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  // Instância e inicialização do menu mobile
  const mobileNavbarserv = new MobileNavbarserv(
    ".mobile-menuserv",
    ".nav-listserv",
    ".nav-listserv li"
  );
  mobileNavbarserv.init();


