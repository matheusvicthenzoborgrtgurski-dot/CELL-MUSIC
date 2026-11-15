# CELL MUSIC — Native PS3 Edition

Esta pasta inicia a edição nativa do CELL MUSIC para PlayStation 3.

## Objetivo

Criar um aplicativo homebrew independente do navegador, com interface própria para o XMB, navegação pelo DualShock 3 e reprodução de MP3.

## Estado real do projeto

- [x] Pasta separada criada para a edição nativa.
- [x] Plano técnico documentado.
- [ ] Toolchain PS3DEV/PSL1GHT validado.
- [ ] Primeiro programa mínimo compilado.
- [ ] Navegação pelo controle implementada.
- [ ] Acesso à biblioteca de músicas implementado.
- [ ] Reprodução nativa de MP3 implementada.
- [ ] PKG gerado, instalado e testado no PS3 com HEN.

**Ainda não existe um PKG nesta etapa.** Estes arquivos são a base documental; não substituem uma compilação nem são instaláveis no console.

## SDK escolhido

O caminho de desenvolvimento é PS3DEV + PSL1GHT. O repositório PSL1GHT informa que o ambiente PS3DEV reúne o toolchain e as bibliotecas necessárias e que aplicações usam Makefiles; exemplos podem gerar `.elf` e `.self`, e alguns incluem alvo `make pkg`.

Referências oficiais do projeto:
- https://github.com/ps3dev/ps3dev
- https://github.com/ps3dev/PSL1GHT

## Arquitetura planejada

1. Aplicação nativa para GameOS/XMB.
2. Interface gráfica com tema preto e vermelho.
3. Entrada pelo controle DualShock 3.
4. Camada de biblioteca para listar MP3 no armazenamento do console.
5. Camada de áudio usando uma biblioteca/API compatível com o SDK validado.
6. Empacotamento PKG e teste no hardware real.

A pasta `/dev_hdd0/music/` foi identificada no console, mas a leitura direta por um aplicativo nativo ainda precisa ser implementada e validada. FTP/webMAN MOD não significa que o app já tenha acesso automático aos arquivos.

## Preservação

Não apagar nem substituir `web/` ou `backup/`. A edição web deve continuar funcionando enquanto a edição nativa é desenvolvida separadamente.
