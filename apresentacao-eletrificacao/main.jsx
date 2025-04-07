import React from "react";
import ReactDOM from "react-dom/client";

const slides = [
  {
    title: "Crise climática como ponto de partida",
    subtitle: "Aquecimento global, ação urgente e papel da eletrificação",
    bullets: [
      "Aquecimento já passou de 1,2ºC",
      "Precisamos agir nos grandes vetores: energia, transporte, uso do solo",
      "Eletrificação é caminho viável e imediato"
    ]
  },
  {
    title: "O peso invisível do diesel",
    subtitle: "Impactos na saúde, no clima e nas florestas",
    bullets: [
      "98% da frota de caminhões ainda usa diesel",
      "Poluição afeta saúde e mata silenciosamente",
      "Diesel alimenta desmatamento ilegal"
    ]
  },
  {
    title: "Eletrificar para descarbonizar",
    subtitle: "Caminhões elétricos e oportunidades",
    bullets: [
      "Prioridade para caminhões: alto impacto",
      "Idle Giants poluem mesmo parados",
      "Tecnologia já madura e crescente no Brasil"
    ]
  },
  {
    title: "Conexão com a floresta",
    subtitle: "Reduzindo pressão sobre biomas com eletrificação",
    bullets: [
      "Menor demanda por diesel na fronteira agrícola",
      "Interrompe logística da destruição",
      "Integra conservação e mobilidade"
    ]
  },
  {
    title: "Cidades que respiram",
    subtitle: "Transporte limpo como direito básico",
    bullets: [
      "Transporte público e de carga limpos = ar puro",
      "Zonas de emissão zero são possíveis",
      "Municípios podem liderar com compras e incentivos"
    ]
  },
  {
    title: "Justiça climática e trabalho",
    subtitle: "Transição com inclusão produtiva",
    bullets: [
      "Caminhoneiros apoiam mudanças com apoio",
      "Empregos verdes e capacitação",
      "Justiça climática exige participação econômica"
    ]
  },
  {
    title: "Mobilização e futuro",
    subtitle: "Conectando clima, saúde e cidades",
    bullets: [
      "Ação conjunta: cidades, ONGs, setor privado",
      "Bancadas temáticas impulsionam políticas",
      "Eletrificar é regenerar"
    ]
  }
];

function App() {
  return (
    <div style={{ fontFamily: 'Arial', padding: 24 }}>
      {slides.map((slide, idx) => (
        <div key={idx} style={{ marginBottom: 40 }}>
          <h1>{slide.title}</h1>
          <h3><em>{slide.subtitle}</em></h3>
          <ul>
            {slide.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
