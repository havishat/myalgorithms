var isRectangleOverlap = function(x1,y1,w,h, point) {
    // 
    if(rec1.length != 4){
        return false
    }
    if((rec1[2] <= point[0] ||   // left
             rec1[3] <= rec2[1] ||   // bottom
             rec1[0] >= rec2[2] ||   // right
             rec1[1] >= rec2[3])) {
            return false
    }    // top

    return true
};