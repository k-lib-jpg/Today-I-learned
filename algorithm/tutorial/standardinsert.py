import random
N = 100
a = [random.randint(1, 1000) for i in range(N)]

for i in range(1, N):
    for j in range(i - 1, -1, -1):
        if a[j] > a[j + 1]:
          a[j], a[j+1] = a[j + 1], a[j]
        else:
          break
print(a)
