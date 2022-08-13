const { createDevServer } = require('@layer0/core/dev')

module.exports = function () {
  return createDevServer({
    label: '[Dojo]',
    command: (port) => `npx dojo build --mode dev --watch --serve --port ${port}`,
    ready: [/output at:/i],
  })
}
