
import type {
  Curso,
  CursoDetalhe,
  FiltrosCursos,
  OpcaoFiltro,
} from '../types/curso'

const API_BASE_URL = 'https://localhost:7241/api'

async function getJson<T>(url: string): Promise<T> {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Erro na API: HTTP ${response.status}`)
  }

  return response.json() as Promise<T>
}

export function listarCursos(
  filtros: FiltrosCursos = {},
): Promise<Curso[]> {
  const params = new URLSearchParams()

  if (filtros.nome?.trim()) {
    params.set('nome', filtros.nome.trim())
  }

  if (filtros.categoriaId !== undefined) {
    params.set('categoriaId', String(filtros.categoriaId))
  }

  if (filtros.modalidadeId !== undefined) {
    params.set('modalidadeId', String(filtros.modalidadeId))
  }

  if (filtros.statusId !== undefined) {
    params.set('statusId', String(filtros.statusId))
  }

  const query = params.toString()
  const url = `${API_BASE_URL}/cursos${query ? `?${query}` : ''}`

  return getJson<Curso[]>(url)
}

export function obterCurso(id: number): Promise<CursoDetalhe> {
  return getJson<CursoDetalhe>(`${API_BASE_URL}/cursos/${id}`)
}

export function listarCategorias(): Promise<OpcaoFiltro[]> {
  return getJson<OpcaoFiltro[]>(`${API_BASE_URL}/categorias`)
}

export function listarModalidades(): Promise<OpcaoFiltro[]> {
  return getJson<OpcaoFiltro[]>(`${API_BASE_URL}/modalidades`)
}

export function listarStatusCursos(): Promise<OpcaoFiltro[]> {
  return getJson<OpcaoFiltro[]>(`${API_BASE_URL}/status-cursos`)
}
