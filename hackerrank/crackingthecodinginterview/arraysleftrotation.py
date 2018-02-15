def array_left_rotation(a, n, k):
    alist = list(a)
    b = alist[k:]+alist[:k]
    return b

n, k = map(int, input().strip().split(' '))
a = list(map(int, input().strip().split(' ')))
answer = array_left_rotation(a, n, k);
print(*answer, sep=' ')
