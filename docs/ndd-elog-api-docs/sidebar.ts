import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "ndd-elog-api-/projeto-de-integracao-ndd",
    },
    {
      type: "category",
      label: "Gerenciamento de viagem",
      items: [
        {
          type: "doc",
          id: "ndd-elog-api-/cria-uma-nova-viagem",
          label: "Cria uma nova viagem",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ndd-elog-api-/cancelamento-de-uma-viagem",
          label: "Cancelamento de uma viagem",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "ndd-elog-api-/atualizacao-parcial-dos-dados-de-uma-viagem",
          label: "Atualização parcial dos dados de uma viagem",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Gerenciamento de filiais",
      items: [
        {
          type: "doc",
          id: "ndd-elog-api-/listagem-de-filiais",
          label: "Listagem de filiais",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ndd-elog-api-/criacao-de-uma-nova-filial",
          label: "Criação de uma nova filial",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ndd-elog-api-/busca-de-filial-por-identificador",
          label: "Busca de filial por identificador",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ndd-elog-api-/remocao-de-uma-filial",
          label: "Remoção de uma filial",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "ndd-elog-api-/edicao-parcial-de-uma-filial",
          label: "Edição parcial de uma filial",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Gerenciamento de veículos",
      items: [
        {
          type: "doc",
          id: "ndd-elog-api-/listagem-de-veiculos",
          label: "Listagem de veículos",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ndd-elog-api-/criacao-de-um-novo-veiculo",
          label: "Criação de um novo veículo",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ndd-elog-api-/busca-de-veiculo-por-identificador",
          label: "Busca de veículo por identificador",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ndd-elog-api-/remocao-de-um-veiculo",
          label: "Remoção de um veículo",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "ndd-elog-api-/edicao-parcial-de-um-veiculo",
          label: "Edição parcial de um veículo",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Gerenciamento de proprietários de Veículos",
      items: [
        {
          type: "doc",
          id: "ndd-elog-api-/listagem-de-proprietarios-de-veiculos",
          label: "Listagem de proprietários de veículos",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ndd-elog-api-/criacao-de-um-novo-proprietario-de-veiculo",
          label: "Criação de um novo proprietário de veículo",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ndd-elog-api-/busca-de-proprietario-de-veiculo-por-identificador",
          label: "Busca de proprietário de veículo por identificador",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ndd-elog-api-/remocao-de-um-proprietario-de-veiculo",
          label: "Remoção de um proprietário de veículo",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "ndd-elog-api-/edicao-parcial-de-um-proprietario-de-veiculo",
          label: "Edição parcial de um proprietário de veículo",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Gerenciamento de condutores",
      items: [
        {
          type: "doc",
          id: "ndd-elog-api-/listagem-de-condutores",
          label: "Listagem de condutores",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ndd-elog-api-/criacao-de-um-novo-condutor",
          label: "Criação de um novo condutor",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ndd-elog-api-/busca-de-condutor-por-identificador",
          label: "Busca de condutor por identificador",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ndd-elog-api-/remocao-de-um-condutor",
          label: "Remoção de um condutor",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "ndd-elog-api-/edicao-parcial-de-um-condutor",
          label: "Edição parcial de um condutor",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Gerenciamento de prestadores de serviço",
      items: [
        {
          type: "doc",
          id: "ndd-elog-api-/listagem-de-prestadores-de-servico",
          label: "Listagem de prestadores de serviço",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ndd-elog-api-/criacao-de-um-novo-prestador-de-servico",
          label: "Criação de um novo prestador de serviço",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "ndd-elog-api-/busca-de-prestador-de-servico-por-identificador",
          label: "Busca de prestador de serviço por identificador",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "ndd-elog-api-/remocao-de-um-prestador-de-servico",
          label: "Remoção de um prestador de serviço",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "ndd-elog-api-/edicao-parcial-de-um-prestador-de-servico",
          label: "Edição parcial de um prestador de serviço",
          className: "api-method patch",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
