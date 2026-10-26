
export interface Curso {
  id: number
  nomeCompleto: string
  nomeBreve: string
  descricao: string
  categoria: string
  modalidade: string
  status: string
  cargaHorariaHoras: number
  imagemUrl: string | null
}

export interface OpcaoFiltro {
  id: number
  nome: string
  descricao: string | null
}

export interface Aula {
  id: number
  nome: string
  descricao: string
  ordem: number
}

export interface Modulo {
  id: number
  nome: string
  descricao: string | null
  ordem: number
  aulas: Aula[]
}

export interface CursoDetalhe extends Curso {
  modulos: Modulo[]
}

export interface FiltrosCursos {
  nome?: string
  categoriaId?: number
  modalidadeId?: number
  statusId?: number
}
