const http = require('http');
const port = 8000;
const host = 'localhost';

const databaseName = 'arclogs.sqlite3'

const sqlite3 = require('sqlite3');
let db = new sqlite3.Database(databaseName);

db.run(`
  CREATE TABLE IF NOT EXISTS arclogs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp TEXT,
    correlationId TEXT,
    functionId TEXT,
    lookupKey TEXT,
    message TEXT,
    req_params TEXT,
    req_headers TEXT,
    req_method TEXT,
    req_url TEXT,
    req_path TEXT,
    req_cookies TEXT,
    req_query TEXT,
    req_href TEXT,
    req_secure TEXT,
    req_ip TEXT,
    req_ips TEXT,
    req_body TEXT,
    res_header TEXT,
    res_viewData TEXT,
    res_viewName TEXT,
    res_body TEXT,
    res_status TEXT,
    res_message TEXT,
    res_length TEXT,
    res_type TEXT,
    baseUrl TEXT,
    basePciUrl TEXT,
    tenantPod TEXT,
    appClaims TEXT,
    appKey TEXT,
    tenantId TEXT,
    siteId TEXT,
    masterCatalogId TEXT,
    catalogId TEXT,
    currencyCode TEXT,
    previewDate TEXT,
    localeCode TEXT,
    isAuthorizedAsAdmin TEXT,
    userClaims TEXT,
    contextKeys TEXT,
    contextGet TEXT,
    contextExec TEXT
  )
`);

function insertData(jsonData) {
  const {
    timestamp,
    correlationId,
    functionId,
    lookupKey,
    message,
    req_params,
    req_headers,
    req_method,
    req_url,
    req_path,
    req_cookies,
    req_query,
    req_href,
    req_secure,
    req_ip,
    req_ips,
    req_body,
    res_header,
    res_viewData,
    res_viewName,
    res_body,
    res_status,
    res_message,
    res_length,
    res_type,
    baseUrl,
    basePciUrl,
    tenantPod,
    appClaims,
    appKey,
    tenantId,
    siteId,
    masterCatalogId,
    catalogId,
    currencyCode,
    previewDate,
    localeCode,
    isAuthorizedAsAdmin,
    userClaims,
    contextKeys,
    contextGet,
    contextExec,
  } = jsonData;


  const stmt = db.prepare(`
    INSERT INTO arclogs (
      timestamp,
      correlationId,
      functionId,
      lookupKey,
      message,
      req_params,
      req_headers,
      req_method,
      req_url,
      req_path,
      req_cookies,
      req_query,
      req_href,
      req_secure,
      req_ip,
      req_ips,
      req_body,
      res_header,
      res_viewData,
      res_viewName,
      res_body,
      res_status,
      res_message,
      res_length,
      res_type,
      baseUrl,
      basePciUrl,
      tenantPod,
      appClaims,
      appKey,
      tenantId,
      siteId,
      masterCatalogId,
      catalogId,
      currencyCode,
      previewDate,
      localeCode,
      isAuthorizedAsAdmin,
      userClaims,
      contextKeys,
      contextGet,
      contextExec
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  stmt.run(
    timestamp || (new Date()).toISOString(),
    correlationId,
    functionId,
    lookupKey,
    message,
    req_params,
    req_headers,
    req_method,
    req_url,
    req_path,
    req_cookies,
    req_query,
    req_href,
    req_secure,
    req_ip,
    req_ips,
    req_body,
    res_header,
    res_viewData,
    res_viewName,
    res_body,
    res_status,
    res_message,
    res_length,
    res_type,
    baseUrl,
    basePciUrl,
    tenantPod,
    appClaims,
    appKey,
    tenantId,
    siteId,
    masterCatalogId,
    catalogId,
    currencyCode,
    previewDate,
    localeCode,
    isAuthorizedAsAdmin,
    userClaims,
    contextKeys,
    contextGet,
    contextExec,
    (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Data inserted successfully');
      }
    }
  );

  stmt.finalize();
}


const server = http.createServer((req, res) => {
  let data = '';
  req.on('data', (chunk) => {data += chunk;});

  req.on('end', () => {
    const jsonData = JSON.parse(data);
    insertData(jsonData);
    res.end('Data added to the table');
  });
})

console.log("run in a separate terminal window:");
console.log("ngrok http 8000");
console.log("use this in your Arc:");
console.log("require('needle').post('', { message: {}}, { json: true });");
server.listen(port, host, function () {});