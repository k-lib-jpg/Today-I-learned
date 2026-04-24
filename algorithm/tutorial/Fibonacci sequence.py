def fib(n):
    if n == 1 or n ==2:
       return 1
    else:
       return fib(n-1) + fib(n-2)
for n in range(1, 21):
    print('{:3d}:{:5d}'.format(n, fib(n)))
