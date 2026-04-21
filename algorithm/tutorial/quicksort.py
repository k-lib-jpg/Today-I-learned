def quick(a, left, right):
    if left < right:
        s = a[left]
        i = left
        j = right + 1 
        while True:
            i += 1
            while a[i] < s:
                i += 1
            j -= 1
            while a[j] >s:
                j -= 1
            if i >= j:
                break
            a[i], a[j] = a[j], a[i]\
        
        a[left] = a[j]
        a[j] = s

        quick(a, left, j - 1)
        quick(a, j + 1, right)
a = [41, 24, 76, 45, 64, 21, 69, 19, 76]
N = len(a)
quick(a, 0, N - 1)

print(a)
