import random

rada = {
  0:"so",
  1:"na",
  2:"du",
  3:"tre",
  4:"ka",
  5:"go"
}

kwada = {
  0:"",
  1:"kilo", 
  2:"mega", 
  3:"giga", 
  4:"tera", 
  5:"peta", 
  6:"eksa", 
  7:"seta", 
  8:"iota", 
  10:"ses", 
  100:"kul"
}

kijeda = {
  "numeral":"",
  "ordinal":"ste",
}

def cambioBase(num10, base):
  if num10 < base:
    return num10
  power = []
  p = 1
  while p <= num10:
    power = [p] + power
    p *= base
  new_num = ""
  for p in power:
    new_num += str(num10 // p)
    num10 %= p
  return int(new_num)

def num_name(number):
  if number < 1000:
    return tri_digit_name(number)
  nnn = str(number)
  lnum = len(nnn)
  falta = (-lnum) % 3
  nnn = nnn.zfill(lnum + falta)
  largo = len(nnn) // 3
  counter = largo - 1
  s = ""
  for i in range(largo):
    tdn = tri_digit_name(int(nnn[i*3:(i+1)*3]))
    sufix = kwada[counter]
    if sufix != "":
      sufix = "-" + sufix
    if tdn != rada[0]:
      if len(s) != 0:
        s += " "
      s += tdn + sufix
    counter -= 1
  return s

def tri_digit_name(nnn):
  kulej = nnn // 100
  sesej = (nnn % 100) // 10
  naj = (nnn % 10)
  sep1, sep2 = "", ""
  if kulej == 0:
    kulej_word = kwada[0]
  else:
    kulej_word = rada[kulej] + kwada[100]

  if sesej == 0:
    sesej_word = kwada[0]
  else:
    sesej_word = rada[sesej] + kwada[10]

  if naj == 0 and (kulej != 0 or sesej != 0):
    naj_word = ""
  else:
    naj_word = rada[naj]

  if naj_word != "" and (kulej_word != "" or sesej_word != ""):
    sep2 = "-"
  if kulej_word != "" and sesej_word != "":
    sep1 = "-"

  return kulej_word + sep1 + sesej_word + sep2 + naj_word

for j in range(5):
  i = random.randint(0, 1000000)
  n = cambioBase(i, 6)
  print("\nDES("+str(i)+") = SES("+str(n)+"):", num_name(n),"\n")