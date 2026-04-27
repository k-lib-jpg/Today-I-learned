N = 8
a = [[0,0,0,0,0,0,0,0,0],
     [0,0,1,0,0,0,0,0,0],
     [0,1,0,1,1,1,0,0,0],
     [0,0,1,0,0,0,0,1,0],
     [0,0,1,0,0,0,0,0,0],
     [0,0,1,0,0,0,1,0,0],
     [0,0,0,0,0,1,0,1,1],
     [0,0,0,1,0,0,1,0,1],
     [0,0,0,0,0,0,1,1,0],]

v = [0 for i in range(N + 1)]
queue = [0 for i in range(100)]
head = 0
tail = 0
queue[tail], v[1] = 1, 1
tail += 1
result = ''
while head != tail:
    i = queue[head]
    head += 1
    for j in range(1, N + 1):
        if a[i][j] == 1 and v[j] == 0:
            result += '{:d}->{:d}  '.format(i, j)
            queue[tail] = j
            tail += 1
            v[j] = 1
print(result)
