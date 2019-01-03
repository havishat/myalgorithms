import requests
import json

def  getMovieTitles(substr):
    totalMoviesurl = "https://jsonmock.hackerrank.com/api/movies/search/?Title=" + substr
    resp = requests.get(totalMoviesurl)
    if resp.status_code != 200:
        print "Error Response from Total Movies Url "+ totalMoviesurl
        return []
    data = json.loads(resp.text)
    print data
    totalpages = data["total_pages"]
    print "total "+ str(totalpages)
    totalNames = []
    for p in range(totalpages):
      pageUrl = "https://jsonmock.hackerrank.com/api/movies/search/?Title=" + substr + "&page=" + str(p)
      resp2 = requests.get(pageUrl)
      if resp2.status_code != 200:
        print "Error Response from Page Url "+ pageUrl
      pageData = json.loads(resp2.text)
      data = pageData["data"]
      for d in data:
        name = d["Title"]
        totalNames.append(name)
      print totalNames
      return sorted(totalNames)






#f = open(os.environ['OUTPUT_PATH'], 'w')
f = open("names.txt", 'w')
try:
    _substr = raw_input()
except:
    _substr = None

res = getMovieTitles(_substr)
for res_cur in res:
    f.write( str(res_cur) + "\n" )

f.close()