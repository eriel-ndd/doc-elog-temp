import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "teste/nddelog-core-service-api",
    },
    {
      type: "category",
      label: "Branch",
      items: [
        {
          type: "doc",
          id: "teste/listagem-de-filiais",
          label: "Listagem de filiais",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "teste/criacao-de-uma-nova-filial",
          label: "Criação de uma nova filial",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "teste/busca-filial-atraves-do-identificador",
          label: "Busca filial através do identificador",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "teste/remove-filial-atraves-do-identificador",
          label: "Remove filial através do identificador",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "teste/edicao-parcial-de-uma-filial-atraves-do-identificador",
          label: "Edição parcial de uma filial através do identificador",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Delivery",
      items: [
        {
          type: "doc",
          id: "teste/listagem-de-comprovantes-e-ocorrencias-de-entrega",
          label: "Listagem de comprovantes e ocorrências de entrega",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Driver",
      items: [
        {
          type: "doc",
          id: "teste/listagem-de-motoristas",
          label: "Listagem de motoristas",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "teste/criacao-de-um-novo-motorista",
          label: "Criação de um novo motorista",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "teste/busca-motorista-atraves-do-identificador",
          label: "Busca motorista através do identificador",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "teste/edicao-parcial-de-um-motorista-atraves-do-identificador",
          label: "Edição parcial de um motorista através do identificador",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "teste/remove-motorista-atraves-do-identificador",
          label: "Remove motorista através do identificador",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Invoice",
      items: [
        {
          type: "doc",
          id: "teste/listagem-de-faturas",
          label: "Listagem de faturas",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Owner",
      items: [
        {
          type: "doc",
          id: "teste/remove-proprietario-atraves-do-identificador",
          label: "Remove proprietário através do identificador",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "teste/busca-proprietario-atraves-do-identificador",
          label: "Busca proprietário através do identificador",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "teste/listagem-de-proprietarios",
          label: "Listagem de proprietários",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "teste/criacao-de-um-novo-proprietario",
          label: "Criação de um novo proprietário",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "teste/edicao-parcial-de-um-proprietario-atraves-do-identificador",
          label: "Edição parcial de um proprietário através do identificador",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Provider",
      items: [
        {
          type: "doc",
          id: "teste/criacao-de-um-novo-prestador",
          label: "Criação de um novo prestador",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "teste/listagem-de-prestadores",
          label: "Listagem de prestadores",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "teste/busca-prestador-atraves-do-identificador",
          label: "Busca prestador através do identificador",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "teste/remove-prestador-atraves-do-identificador",
          label: "Remove prestador através do identificador",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "teste/edicao-parcial-de-um-prestador-atraves-do-identificador",
          label: "Edição parcial de um prestador através do identificador",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Travel",
      items: [
        {
          type: "doc",
          id: "teste/criacao-de-um-nova-viagem",
          label: "Criação de um nova viagem",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "teste/cancela-uma-viagem-atraves-do-identificador",
          label: "Cancela uma viagem através do identificador",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "teste/edicao-parcial-de-uma-viagem-atraves-do-identificador",
          label: "Edição parcial de uma viagem através do identificador",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Vehicle",
      items: [
        {
          type: "doc",
          id: "teste/listagem-de-veiculos",
          label: "Listagem de veículos",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "teste/criacao-de-um-novo-veiculo",
          label: "Criação de um novo veículo",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "teste/busca-veiculo-atraves-do-identificador",
          label: "Busca veiculo através do identificador",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "teste/remove-veiculo-atraves-do-identificador",
          label: "Remove veículo através do identificador",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "teste/edicao-parcial-de-um-veiculo-atraves-do-identificador",
          label: "Edição parcial de um veículo através do identificador",
          className: "api-method patch",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
