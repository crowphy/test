let str = '123'

function transform(str) {
  console.log(typeof Number(str))
  console.log(typeof parseInt(str))
  console.log(typeof parseFloat(str))
  console.log(+str, typeof (+str))
  console.log(str - 0, typeof (str - 0))
  console.log(str / 1, typeof (str / 1))
  console.log(str * 1, typeof (str * 1))
  console.log(~~str, typeof (~~str))
}
transform(str)