# Sobre o Image-Flow
## Objetivo
O projeto imageFlow tem a finalidade de demonstrar meus conhecimentos adquiridos ao longo dos meus cursos realizados (HTML, CSS e JavaScript ), bem como meu curso técnico em informática, no qual aprimorei minhas habilidades em PHP, desenvolvimento de projetos e competências técnicas. 

Atualmente, este projeto está sendo desenvolvido em [Next.js](https://nextjs.org/) e hospedado na [Vercel](https://vercel.com/), sua desenvolvedora.

## Objetivos Gerais
O projeto deve ser capaz de armazenar imagens e vídeos dos usuários. Contempla os seguintes formatos, sujeito a implementações futuras:
- Imagens: 
  - `.PNG`
  - `.JPG`, `JPEG`
  - `.SVG`
- Vídeos:
  - `MP4`
  - `.WMV`


## Objetivos Específicos
O projeto deverá ser capaz de realizar as seguintes operações:
1. Manter cadastro de usuários:

| Usuario |
|---------|
| Id | int |
| Nome | String |
| Username | String |
| Avatar_url | String |
| Senha | String `criptografada` |
| Email | String |
| Data de Nascimento | Date |


2. Manter registro de imagens dos usuários

| Imagem |
|---------|
| Id | int |
| Blob_imagem | blob |
| Nome | string |
| Tags | array[ String ] |
| Data e hora de upload | Date |
| Tamanho da Imagem | int `em BYTES`| 
| Caminho Relativo | String |

3. Manter registro de vídeos dos usuários
| Vídeo |
|-------|
| Id | int |
| Blob_video | blob |
| Nome | string |
| Tags | array[ String ] |
| Data e hora de upload | Date |
| Tamanho da Imagem | int `em BYTES`| 
| Caminho Relativo | String |

4. Realizar `Download` e `Upload` de documentos nos seguintes formatos
- Imagem:
    - `PNG`
    - `JPEG`, `JPG`
    - `SVG`
- Vídeos
    - `MP4`
	- `WMV`

5. Organização em pastas
- Recentes
- Coleções
- Compartilhados Comigo (Implementação futura)
