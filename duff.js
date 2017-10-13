const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let ite = Math.ceil(a.length / 8)
let startAt = a.length % 8
let i = 0

do {
  switch(startAt) {
    case 0: console.log(a[i++])
    case 7: console.log(a[i++])
    case 6: console.log(a[i++])
    case 5: console.log(a[i++])
    case 4: console.log(a[i++])
    case 3: console.log(a[i++])
    case 2: console.log(a[i++])
    case 1: console.log(a[i++])
  }
  startAt = 0
} while (--ite > 0)