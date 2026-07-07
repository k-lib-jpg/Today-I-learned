class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
a = [Person('Ann', 18), Person('Rolla', 19), Person('Nancy', 16), Person('Eluza', 17), Person('Juliet', 18), Person('Machida', 20), Person('Emy', 15), Person('Candy', 16), Person('Ema', 17)]

N = len(a)
keyname = 'Candy'
i = 0
while i < N and keyname != a[i].name:
    i += 1

if i < N:
    print('{:s} {:d}'.format(a[i].name, a[i].age))
else:
    print('見つかりませんでした')
