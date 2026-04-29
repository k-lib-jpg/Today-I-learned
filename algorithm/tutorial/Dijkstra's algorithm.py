N = 8
M = 9999
a = [[0,0,0,0,0,0,0,0,0],
     [0,0,1,7,2,M,M,M,M],
     [0,1,0,M,M,2,4,M,M],
     [0,7,M,0,M,M,2,3,M],
     [0,2,M,M,0,M,M,5,M],
     [0,M,2,M,M,0,1,M,M],
     [0,M,4,2,M,1,0,M,6],
     [0,M,M,3,5,M,M,0,2],
     [0,M,M,M,M,M,6,2,0],]

leng = [0 for i in range(N + 1)]
v = [0 for i in range(N + 1)]

start = 1
print('始点{:2d}'.format(start))
for k in range(1, N + 1):
    leng[k] = M
    v[k] = 0
leng[start] = 0

flag = True
for j in range(1, N + 1):
    Min = M
    for k in range(1, N + 1):
        if v[k] == 0 and leng[k] < Min:
            p = k
            Min = leng[k]
    v[p] = 1

    if (Min == M):
        flag = False
        break
    for k in range(1, N + 1):
        if leng[p] + a[p][k] < leng[k]:
            leng[k] = leng[p] + a[p][k]
if flag:
    for j in range(1, N + 1):
        print('{:2d} ->{:2d}'.format(start, j, leng[j]))
else:
    print('グラフは連結しない')
