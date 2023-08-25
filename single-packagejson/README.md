# package.json único

Nesse exemplo, existe um único package.json que é compartilhado por todas as funções.

Existem 2 dependências instaladas, uuid e axios.

Todas as funções importam uuid.

Apenas stock-buyer importa axios.

Todas as funções estão configuradas para utilizar o esbuild, dessa forma, apesar de todas as funções compartilharem o mesmo package.json, apenas stock-buyer inclui o axios no seu bundle final.

Comandos:

`
    sam sync -u --base-dir .
`
