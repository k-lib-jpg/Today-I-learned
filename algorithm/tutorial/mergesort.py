a = [2, 4, 5, 7, 8, 10, 15, 20, 30, 40]
b = [6, 11, 25, 33, 35]
M, N = len(a), len(b)
c = [0 for i in range(M + N)]

i=j=p=0
while i < M and j < N:
    if a[i] <= b[j]:
      c[p] = a[i]
      i += 1
      p += 1
    else:
      c[p] = b[j]
      j += 1
      p += 1
while i < M:
      c[p] = a[i]
      i += 1
      p += 1
while j < N:
      c[p] = b[j]
      j += 1
      p += 1
print(c)
    
