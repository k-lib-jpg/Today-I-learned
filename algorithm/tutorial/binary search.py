a = [2, 3, 7, 31, 50, 55, 70, 77, 80]
N = len(a)
keydata = 55
flag = 0
low, high = 0, N - 1
while low <= high:
    mid = (low + high) // 2
    if a[mid] == keydata:
      print('{:d}は{:d}番目にありました'.format(a[mid], mid))
      flag = 1
      break
    if a[mid] < keydata:
        low = mid + 1
    else:
       high = mid - 1
if flag != 1:
   print('見つかりませんでした')
