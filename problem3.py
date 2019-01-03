def superStack(operations):
    s = Stack()
    for oper in operations:
        values = oper.split(" ")
        if len(values) > 0:
            if values[0] == "push":
                s.push(int(values[1]))
                if s.len > 0:
                    print s.top.val
                else:
                    print "EMPTY"
            elif values[0] == "pop":
                s.pop()
                if s.len > 0:
                    print s.top.val
                else:
                    print "EMPTY"
            elif values[0] == "inc":
                s.inc(int(values[1]), int(values[2]))
                if s.len > 0:
                    print s.top.val
                else:
                    print "EMPTY"
            else:
                print "invalid operation "+ values

            print "Stack Length "+ str(s.len)

class StackNode():
    def __init__(self, n):
        self.val = n
        self.next = None

class Stack():
    def __init__(self):
        self.top = None
        self.len = 0
    
    def push(self, val):
        s = StackNode(val)
        if self.top is not None:
            s.next = self.top
        self.top = s
        self.len = self.len + 1
        #print self.top.val

    def pop(self):
        if self.top is None:
            return None
        v = self.top
        self.top = v.next
        self.len = self.len - 1
        return v.val

    def inc(self, b, val):
        print "current len " + str(self.len)
        a = []
        while self.len != 0:
            a.append(self.pop())
        i = len(a) -1
        while i >= 0:
            tot = 0
            if tot < b-1:
                newval = a[i] + val
                self.push(newval)
                tot = tot + 1
            else:
                self.push(a[i])
            i = i -1
            




if __name__ == "__main__":
    # s2 = Stack()
    # s2.push(2)
    # s2.push(3)
    # print s2.pop()
    operations_cnt = 0
    operations_cnt = int(raw_input())
    operations_i = 0
    operations = []
    while operations_i < operations_cnt:
        try:
            operations_item = raw_input()
        except:
            operations_item = None
        operations.append(operations_item)
        operations_i += 1


    res = superStack(operations)
    

