export interface ProjectResponse {
  idProjeto: number;
  titulo: string;
  descricaoProjeto: string;
  meta: number;
  valorArrecadado: number;
  dataCriacao: string;
  status: string;
  tipoArte: string;
  nomeArtista: string;
  imagens:[{
    idImagem: number;
    dadosImagemBase64: string;
    descricao: string;
    tipoMime: string;
  }]
}
