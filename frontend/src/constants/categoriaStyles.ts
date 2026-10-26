
export interface CategoriaStyle {
  icone: string;
  corFundo: string;
  corTexto: string;
}

const estilosPorCategoria: Record<string, CategoriaStyle> = {
  matematica: {
    icone: "/icons/disciplinas/icon-matematica-20px.svg",
    corFundo: "#FFD79A",
    corTexto: "#222222",
  },
  "ciencias da natureza": {
    icone: "/icons/disciplinas/icon-ciencias-natureza-20px.svg",
    corFundo: "#e4ccff",
    corTexto: "#222222",
  },
  "tecnologia e inovacao": {
    icone: "/icons/disciplinas/icon-tecnologia-20px.svg",
    corFundo: "#B3EBF2",
    corTexto: "#222222",
  },
};

const estiloPadrao: CategoriaStyle = {
  icone: "",
  corFundo: "#FFD79A",
  corTexto: "#222222",
};

export function obterEstiloCategoria(categoria: string): CategoriaStyle {
  const chave = categoria
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLocaleLowerCase("pt-BR");

  return estilosPorCategoria[chave] ?? estiloPadrao;
}
