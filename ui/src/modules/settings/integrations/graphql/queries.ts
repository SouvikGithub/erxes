const users = `
  query users {
    users {
      _id
      details {
        avatar
        fullName
      }
    }
  }
`;

const brands = `
  query brands {
    brands {
      _id
      name
      code
      description
    }
  }
`;

const commonFields = `
  _id
  name
  brandId
  languageCode
  isActive
  channels {
    _id
    name
  }
`;

const integrationDetail = `
  query integrationDetail($_id: String!) {
    integrationDetail(_id: $_id) {
      ${commonFields}
      
      messengerData
      uiOptions
    }
  }
`;

const integrationTotalCount = `
  query totalIntegrationsCount {
    integrationsTotalCount {
      total
      byKind
    }
  }
`;

const commonParamsDef = `
  $channelId: String,
  $brandId: String,
  $kind: String,
  $perPage: Int,
  $page: Int,
  $searchValue: String
`;

const commonParams = `
  channelId: $channelId,
  brandId: $brandId,
  kind: $kind,
  perPage: $perPage,
  page: $page,
  searchValue: $searchValue
`;

const integrations = `
  query integrations(${commonParamsDef}) {
    integrations(${commonParams}) {
      ${commonFields}

      kind
      brand {
        _id
        name
        code
      }
      webhookData
      leadData
      formId
      tagIds
      tags {
        _id
        colorCode
        name
      }
      form {
        _id
        title
        code
      }
    }
  }
`;

const messengerApps = `
  query messengerApps($kind: String) {
    messengerApps(kind: $kind) {
      _id
      kind
      name
      showInInbox
    }
  }
`;

const messengerAppsCount = `
  query messengerAppsCount($kind: String) {
    messengerAppsCount(kind: $kind)
  }
`;

const engagesConfigDetail = `
  query engagesConfigDetail {
    engagesConfigDetail
  }
`;

const fetchApi = `
  query integrationsFetchApi($path: String!, $params: JSON!) {
    integrationsFetchApi(path: $path, params: $params)
  }
`;

const integrationGetLineWebhookUrl = `
  query integrationGetLineWebhookUrl($id: String!) {
    integrationGetLineWebhookUrl(_id: $id)
  }
`;

export default {
  fetchApi,
  users,
  brands,
  integrationDetail,
  integrationTotalCount,
  integrations,
  engagesConfigDetail,
  messengerApps,
  messengerAppsCount,
  integrationGetLineWebhookUrl
};
