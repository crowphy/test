function render(str, data) {
  var tpl = str.replace(/<%=([\s\S]+?)%>/g, function(match, code) {
    return "' + obj." + code + " + '"
  })
  console.log(tpl)
  tpl = "var tpl = '" + tpl + "'\nreturn tpl"
  var cl = new Function('obj', tpl)
  return cl(data)
}
var tpl = 'Hello <%=username%>'
console.log(render(tpl, {username: 'world'}))