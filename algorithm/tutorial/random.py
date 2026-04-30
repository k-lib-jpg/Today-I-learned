rndnum = 12
def irnd():
    global rndnum
    rndnum = (rndnum*109 + 1021) % 32768
    return rndnum

result = ''
for i in range(100):
    result += '{:6d}'.format(irnd())
    if (i + 1) % 10 == 0:
       print(result)
       result = ''
print(result)
