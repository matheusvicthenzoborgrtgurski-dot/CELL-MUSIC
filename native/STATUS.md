# CELL MUSIC Native — Status

## Marco 0: preparação

Status: documentação inicial criada; compilação ainda não validada.

### Próximas tarefas

1. Preparar um ambiente PS3DEV/PSL1GHT reproduzível no CI.
2. Compilar um exemplo mínimo oficial do SDK sem modificar o código.
3. Registrar o resultado do build e identificar os artefatos reais.
4. Só então iniciar o código do CELL MUSIC.

### Critérios de aprovação

- O ambiente encontra `ppu-gcc` e as ferramentas PSL1GHT.
- Um exemplo mínimo compila com sucesso.
- O artefato ELF/SELF é gerado e identificado.
- O PKG só será considerado pronto após empacotamento, instalação e teste no PS3.

Não marcar etapas como concluídas sem logs de compilação e teste real.
