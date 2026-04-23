a = [35, 25, 56, 78, 43, 66, 71, 73, 80, 90, 0,73, 35, 65, 100, 78, 80, 85, 35, 50]
histo = [0 for i in range(11)]

for ai in a:
    rank = ai // 10
    if 0 <= rank <= 10:
        histo[rank] += 1
for i in range(0, 11):
    print('{:3d} - {:3d}'.format(i * 10, histo[i]))
