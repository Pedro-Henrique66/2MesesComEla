// Array de emojis para cair
const emojis = ["🌹", "🧸", "💕", "💖", "🌸", "🧸", "🌹", "💗"]

// Função para criar um emoji caindo
function createFallingEmoji() {
  const emojiElement = document.createElement("div")
  emojiElement.classList.add("emoji")

  // Seleciona um emoji aleatório
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]
  emojiElement.textContent = randomEmoji

  // Posição horizontal aleatória
  emojiElement.style.left = Math.random() * 100 + "%"

  // Duração da animação aleatória (entre 5 e 10 segundos)
  const duration = Math.random() * 5 + 5
  emojiElement.style.animationDuration = duration + "s"

  // Delay aleatório
  emojiElement.style.animationDelay = Math.random() * 2 + "s"

  // Tamanho aleatório
  const size = Math.random() * 20 + 20
  emojiElement.style.fontSize = size + "px"

  // Adiciona ao container
  document.getElementById("fallingEmojis").appendChild(emojiElement)

  // Remove o elemento após a animação
  setTimeout(
    () => {
      emojiElement.remove()
    },
    (duration + 2) * 1000,
  )
}

// Cria emojis continuamente
function startFallingEmojis() {
  // Cria emojis iniciais
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      createFallingEmoji()
    }, i * 300)
  }

  // Continua criando emojis a cada 800ms
  setInterval(() => {
    createFallingEmoji()
  }, 800)
}

// Inicia quando a página carregar
window.addEventListener("load", () => {
  startFallingEmojis()
})

// Adiciona efeito de brilho ao passar o mouse no coração
const heart = document.querySelector(".heart")
if (heart) {
  heart.addEventListener("mouseenter", () => {
    heart.style.transform = "scale(1.2)"
    heart.style.transition = "transform 0.3s ease"
  })

  heart.addEventListener("mouseleave", () => {
    heart.style.transform = "scale(1)"
  })
}
