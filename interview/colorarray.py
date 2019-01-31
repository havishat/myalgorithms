# Compliance.ai
# 
# //  function input
# // a = [{'color': 'blue'}, {'color': 'blue'},  {'color': 'green'}, {'color': 'yellow'}];
# // b = [{'color': 'blue'}, {'color': 'brown'}, {'color': 'green'}];
# 
# 
# // expectedOutput = [{'color': 'blue'}, {'color': 'green'}]

def colors(a, b):
    
    c_dict = {}
    expectedOutput = []
    one_dict = {'color': 'blue'}
    one_dict['color'] =='blue' #True
             
    for i in range(len(a)):
        if i in c_dict : 
            continue
        else: 
            c_dict[a[i]['color']] = True
    
    # print(c_dict)
    # count = 0
    c2_dict ={}
    for i in range(len(b)):
        # print(c_dict[i])
        # print(b[i]['color'])
        if b[i]['color'] in c_dict: 
            c2_dict[b[i]['color']] = 1
        else:
            continue      
            # print(b[i]['color'])
                
    for i in c2_dict:
        # expectedOutput.append("{'color':" +  i +  "}")
        expectedOutput.append({'color': i})
            
    return expectedOutput

print(colors([{'color': 'blue'}, {'color': 'blue'},  {'color': 'green'}, {'color': 'yellow'}],[{'color': 'blue'}, {'color': 'brown'}, {'color': 'green'}, {'color': 'green'}]))





# 
# 
# 
# //  function input
# // a = [{'color': 'blue'}, {'color': 'blue'},  {'color': 'green'}, {'color': 'yellow'}];
# // b = [{'color': 'blue'}, {'color': 'brown'}, {'color': 'green'}];
# 
# 
# // expectedOutput = [{'color': 'blue'}, {'color': 'green'}]

def colors(a, b):
    
    c_dict = {}
    expectedOutput = []
    one_dict = {'color': 'blue'}
    one_dict['color'] =='blue' #True
             
    for i in range(len(a)):
        if i in c_dict : 
            continue
        else: 
            c_dict[a[i]['color']] = 1
    
    # print(c_dict)
    # count = 0
    c2_dict ={}
    for i in range(len(b)):
        # print(c_dict[i])
        # print(b[i]['color'])
        
        if b[i]['color'] in c_dict: 
            if c_dict[b[i]['color']] != 0 :
                c_dict[b[i]['color']] = 0
                expectedOutput.append({'color': b[i]['color']})
        else:
            continue      
                # print(b[i]['color'])

                
    # for i in c_dict:
    #     # expectedOutput.append("{'color':" +  i +  "}")
    #     expectedOutput.append({'color': i})
            
    return expectedOutput
            
            
    # c_dict = {{'color : blue"} : True , 

print(colors([{'color': 'blue'}, {'color': 'blue'},  {'color': 'green'}, {'color': 'yellow'}],[{'color': 'blue'}, {'color': 'brown'}, {'color': 'green'}, {'color': 'green'}]))