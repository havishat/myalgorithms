#  dynamic programing 
# memoized solution 
def fib(n, memo):
    if memo[n] != null:
        return memo[n]
    if n == 1 or n == 2: 
        result = 1
    else: 
        result = fib(n-1) + fib(n-2)
    memo[n] = result
    return result

# bootom-up approch

def fib_bottom_up(n):
    if n == 1 or n == 2:
        return 1
    bootom_up = new int[n + 1]
    bootom_up[1] = 1
    bootom_up[2] = 1

    for i from 3 upto n: 
        bootom_up[i] = bootom_up[i-1] + bootom_up[i-2]
    return bootom_up[n]
