// Opções de cores para personalização
const colors = {
    dark: {
        background: "#333333",
        text: "#ffffff",
        accent: "#ff6600"
    },
    light: {
        background: "#f5f5f5",
        text: "#333333",
        accent: "#ff6600"
    },
    blue: {
        background: "#054095",
        text: "#ffffff",
        accent: "#ffcc00"
    }
};

// Função para solicitar nome do usuário (executada quando o DOM estiver carregado)
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se o nome já está armazenado
    const storedName = localStorage.getItem('volleyball_username');
    
    if (!storedName) {
        // Se não houver nome armazenado, solicitar
        setTimeout(() => {
            const userName = prompt("Qual é o seu nome?");
            if (userName) {
                localStorage.setItem('volleyball_username', userName);
                showWelcomeMessage(userName);
            }
        }, 1000);
    } else {
        // Se já houver nome armazenado, mostrar mensagem de boas-vindas
        showWelcomeMessage(storedName);
    }
    
    // Verificar preferência de tema
    const storedTheme = localStorage.getItem('volleyball_theme');
    if (storedTheme) {
        applyTheme(storedTheme);
    }
    
    // Adicionar funcionalidades interativas
    addImageHoverEffects();
    setupThemeSwitcher();
    setupGalleryLightbox();
});

// Função para mostrar mensagem de boas-vindas
function showWelcomeMessage(name) {
    const welcomeMessage = document.createElement("div");
    welcomeMessage.className = "welcome-message";
    welcomeMessage.style.position = "fixed";
    welcomeMessage.style.top = "80px";
    welcomeMessage.style.right = "20px";
    welcomeMessage.style.background = colors.blue.background;
    welcomeMessage.style.color = "#fff";
    welcomeMessage.style.padding = "15px 20px";
    welcomeMessage.style.borderRadius = "5px";
    welcomeMessage.style.zIndex = "1000";
    welcomeMessage.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
    welcomeMessage.style.borderLeft = `4px solid ${colors.blue.accent}`;
    welcomeMessage.textContent = `Bem-vindo(a), ${name}!`;
    
    document.body.appendChild(welcomeMessage);
    
    // Remover após 5 segundos com animação
    setTimeout(() => {
        welcomeMessage.style.opacity = "0";
        welcomeMessage.style.transform = "translateX(50px)";
        welcomeMessage.style.transition = "opacity 1s ease, transform 1s ease";
        setTimeout(() => welcomeMessage.remove(), 1000);
    }, 5000);
}

// Função para aplicar tema
function applyTheme(themeName) {
    const theme = colors[themeName];
    if (!theme) return;
    
    document.documentElement.style.setProperty('--dark-bg', theme.background);
    document.documentElement.style.setProperty('--text-light', theme.text);
    document.documentElement.style.setProperty('--accent-color', theme.accent);
    
    localStorage.setItem('volleyball_theme', themeName);
}

// Função para adicionar controle de tema no rodapé
function setupThemeSwitcher() {
    const footer = document.querySelector('footer');
    
    const themeSwitcher = document.createElement('div');
    themeSwitcher.className = 'theme-switcher';
    themeSwitcher.style.marginTop = '15px';
    themeSwitcher.innerHTML = `
        <span style="margin-right: 10px;">Tema:</span>
        <button id="theme-dark" class="theme-button">Escuro</button>
        <button id="theme-light" class="theme-button">Claro</button>
        <button id="theme-blue" class="theme-button">Azul</button>
    `;
    
    footer.appendChild(themeSwitcher);
    
    // Estilizar botões
    const buttons = document.querySelectorAll('.theme-button');
    buttons.forEach(button => {
        button.style.background = 'rgba(255, 255, 255, 0.2)';
        button.style.border = 'none';
        button.style.color = '#fff';
        button.style.padding = '5px 10px';
        button.style.margin = '0 5px';
        button.style.cursor = 'pointer';
        button.style.borderRadius = '3px';
        
        button.addEventListener('mouseenter', function() {
            this.style.background = colors.blue.accent;
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255, 255, 255, 0.2)';
        });
        
        // Adicionar evento de clique
        button.addEventListener('click', function() {
            const theme = this.id.split('-')[1];
            applyTheme(theme);
        });
    });
}

// Função para melhorar efeitos de hover nas imagens
function addImageHoverEffects() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1.1)';
                img.style.transition = 'transform 0.5s ease';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1)';
                img.style.transition = 'transform 0.5s ease';
            }
        });
    });
}

// Função para configurar lightbox para galeria de imagens
function setupGalleryLightbox() {
    // Criar o elemento lightbox
    const lightbox = document.createElement('div');
    lightbox.id = 'gallery-lightbox';
    lightbox.style.display = 'none';
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    lightbox.style.zIndex = '9999';
    lightbox.style.display = 'flex';
    lightbox.style.justifyContent = 'center';
    lightbox.style.alignItems = 'center';
    lightbox.style.opacity = '0';
    lightbox.style.pointerEvents = 'none';
    lightbox.style.transition = 'opacity 0.3s ease';
    
    // Adicionar imagem ao lightbox
    const lightboxImg = document.createElement('img');
    lightboxImg.style.maxWidth = '90%';
    lightboxImg.style.maxHeight = '90%';
    lightboxImg.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.5)';
    lightbox.appendChild(lightboxImg);
    
    // Adicionar botão de fechar
    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '20px';
    closeButton.style.right = '20px';
    closeButton.style.background = 'transparent';
    closeButton.style.border = 'none';
    closeButton.style.color = 'white';
    closeButton.style.fontSize = '40px';
    closeButton.style.cursor = 'pointer';
    closeButton.onclick = function() {
        lightbox.style.opacity = '0';
        setTimeout(() => {
            lightbox.style.pointerEvents = 'none';
        }, 300);
    };
    lightbox.appendChild(closeButton);
    
    // Adicionar lightbox ao documento
    document.body.appendChild(lightbox);
    
    // Configurar cliques nas imagens da galeria
    const galleryImages = document.querySelectorAll('.gallery-item img');
    galleryImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            lightboxImg.src = this.src;
            lightbox.style.pointerEvents = 'auto';
            lightbox.style.opacity = '1';
        });
    });
    
    // Fechar lightbox ao clicar fora da imagem
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.opacity = '0';
            setTimeout(() => {
                lightbox.style.pointerEvents = 'none';
            }, 300);
        }
    });
}