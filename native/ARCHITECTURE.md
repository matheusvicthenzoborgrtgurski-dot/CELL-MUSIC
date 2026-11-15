# Arquitetura planejada

## Componentes

- `app/`: entrada e ciclo de vida do aplicativo nativo.
- `ui/`: tela inicial, biblioteca, reprodução e navegação pelo controle.
- `media/`: descoberta e leitura de metadados de MP3.
- `audio/`: inicialização, decodificação e saída de áudio.
- `platform/`: integração específica com PSL1GHT/GameOS.
- `assets/`: fontes, ícones e artes locais.

Essas pastas serão criadas quando a primeira compilação do SDK estiver validada.

## Requisitos funcionais

- Abrir como aplicativo próprio pelo XMB.
- Navegar sem teclado, usando o DualShock 3.
- Listar músicas de uma pasta escolhida no HD interno.
- Exibir nome do arquivo e, quando disponível, metadados.
- Reproduzir, pausar, avançar e voltar.
- Encerrar corretamente e retornar ao XMB.

## Requisitos de qualidade

- Não depender do navegador do PS3.
- Não depender de serviços externos para tocar MP3 local.
- Não modificar nem apagar arquivos da biblioteca do usuário.
- Manter a edição web existente intacta.
