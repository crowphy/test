const os = require('os')

function memUse() {
  let mem = process.memoryUsage()
  let osMem = os.totalmem()
  console.log({
    mem,
    osMem
  })
}
memUse(0)