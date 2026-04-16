a = [80, 50, 30, 51, 70]
N = len(a)
for i in range(N-1):
    Min = a[i]
    s = i
    for j in range(i+1, N):
        if a[j] < Min:
            Min = a[j]
            s = j
    a[i], a[s] = a[s], a[i]
print(a) 
