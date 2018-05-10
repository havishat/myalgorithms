// balanced: "()", "(())", "()()"
// unbalanced: "(", "(()", ")("
// returns true if balanced, false if unbalanced
// for loop to iterate the string 
// if statement to check if occurance of "(" and ")"

// {<=>}, [<=>], (<=>)
// <>, ()

// str = "((())""
function balanceStr(str){
    // var stordict = {"(": 3, ")":2}
    
    // for(var i =0 ; i<str.length; i++){
    //     stordict[str[i]] = 1
    // }
    
    var storage = [];
    for(var i = 0; i<str.length;i++){
        if(str[i] == "("){
            storage.push("(")
        } else if(str[i] === ")"){
            if(storage[storage.length-1] !== "(") {
                return false
            }
            storage.pop()
        }else if(str[i] == "{"){
            storage.push("{")
        } else if(str[i] === "}"){
            if(storage[storage.length-1] !== "{") {
                return false
            }
            storage.pop()
        }else if(str[i] == "["){
            storage.push("[")
        } else if(str[i] === "]"){
            if(storage[storage.length-1] !== "[") {
                return false
            }
            storage.pop()
        }
        
    }
      
    if(storage.length){
        return false
    }
        
    return true
}