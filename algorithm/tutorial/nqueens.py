def backtrack(i):
    global num 
    if i > N:
        num += 1
        print('解{:d}'.format(num)) #解の表示
        for y in range(1, N + 1):
            result = ''
            for x in range(1, N + 1):
                if queen[y] == x:
                    result += ' Q'
                else:
                    result += ' .'
            print(result)
    else:
         for j in range(1, N + 1):
             if column[j] == 1 and rup[i + j] == 1 and lup[i - j + N] ==1:
                 queen[i] = j #(i, j)が王妃の位置
                 column[j] = rup[i + j] = lup[i - j + N] = 0 #局面の変更
                 backtrack(i + 1)
                 column[j] = rup[i + j] = lup[i - j + N] = 1 #局面の戻し

N = 8
column = [1 for i in range(N + 1)] #同じ欄に王妃が置かれているかを表す
rup = [1 for i in range(2 * N + 1)] #右上がりの対角線に置かれているかを示す
lup = [1 for i in range(2 * N + 1)] #左上がりの対角線に置かれているかを示す
queen = [0 for i in range(N + 1)] #王妃の位置
num = 0

backtrack(1)
