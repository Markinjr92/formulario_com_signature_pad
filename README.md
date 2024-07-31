# Formulário de Solicitação de Compras

Este repositório contém os arquivos relacionados ao formulário de controle de documentos, com assinaturas para . Abaixo, você encontrará a estrutura e descrição dos arquivos presentes, que ajudam na criação e manipulação de formulários e processos BPM no Fluig.

## Estrutura de Arquivos

### formulário_com_signature_pad.html

Este arquivo contém o HTML básico para o formulário de Controle de Documentos. Inclui os seguintes elementos:

- **Campos de Dados da Solicitação**: Informações básicas sobre a solicitação, como número, nome do solicitante e data de abertura.
- **Dados do Arquivo Solicitado**: Seção onde são especificados os detalhes do arquivo solicitado, como área, número de prontuário, convênio, nome do paciente, etc.
- **Entrega e Devolução de Documentos**: Inclui seções para assinatura digital usando Signature Pad, captura de dados de entrega e devolução de documentos.

### Uso de Signature Pad

O formulário inclui um modal para a captura de assinaturas digitais tanto na entrega quanto na devolução de documentos.

## Notas Importantes

1. **Remoção de Códigos Sensíveis**: Qualquer código que contenha informações sensíveis ou específicas de APIs foram removidos para garantir a segurança e privacidade dos dados.

2. **Fluig-Specific Code**: A implementação utiliza bibliotecas e componentes específicos do Fluig para criar uma experiência integrada e eficiente. A personalização pode ser necessária para atender às necessidades específicas do seu ambiente Fluig.

## Instruções para Uso

1. **Clone o Repositório**: Clone este repositório para sua máquina local para começar a trabalhar com o formulário.
2. **Customização**: Personalize o HTML e as funcionalidades JavaScript conforme necessário para atender aos requisitos específicos do seu processo.
3. **Publicação no Fluig**: Siga as instruções da sua equipe de TI para publicar e integrar o formulário no ambiente Fluig.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

## Licença

Este projeto é licenciado sob a [Licença MIT](LICENSE).