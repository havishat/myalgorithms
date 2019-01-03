


def readLogFile(filename):
    #f = open(filename,"r")
    dict = {}
    try:
        with open(filename,"r") as f:
            logs = f.readlines()
            lines = [x.strip() for x in logs]
            for a in lines:
                lineentries =  a.split(" ")
                if len(lineentries) > 0:
                    hostname = lineentries[0]
                    if hostname in dict.keys():
                        dict[hostname] = dict[hostname] + 1
                    else:
                        dict[hostname] = 1
        namefile = "records_" + filename
        with open(namefile, "w") as nf:
            for k,v in sorted(dict.items()):
                print k + " " + str(v)
                nf.write(k + " " + str(v))
    except Exception as e:
        print "Error handling file "+ e

        
filename = raw_input()
readLogFile(filename)