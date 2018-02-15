
// Quadtree.js usage looks like:
var markers = []; // some array of google map markers 
quadTree = new QuadTree(markers);
console.log("Built quadtree with size "+markers.length);
var bounds = map.getBounds();
console.log("New Bounds"+bounds.toString());
// find all points within the viewport bounding rectangle,
// or whatever rectangle you supply
var foundPoints = quadTree.queryRectangle(bounds);

/**
 * Constructs a Quadtree from the points in the arraylist Should construct
 * the tree in a balanced fashion. ie, its maximum depth is minimised and
 * the number of subdivisions at each level is maximised.
 * 
 * @param points
 *            the list of points to add
 */
function QuadTree (points) {
    this.root = null;
    this.size = 0;
    if(points == null || points.length == 0)
        return;
    points.sort(function(p,q) {
        if(p.getPosition().lat() < q.getPosition().lat()) return -1;
        if(p.getPosition().lat() > q.getPosition().lat()) return  1;
        if(p.getPosition().lng() > q.getPosition().lng()) return -1;
        if(p.getPosition().lng() < q.getPosition().lng()) return 1;
        return 0;
    }); 
    var depth = 0;
    while(this.bstIterate(points, 0, points.length, depth)) 
    	depth++;
    
}

QuadTree.prototype.bstIterate = function(points, start, end, depth) {
	if(end <= start)
		return false;
	else {
		var mid = start + Math.floor((end-start)/2);
		if(depth == 0) {
			this.add(points[mid]);
			return true;
		} else {
			var res1 = this.bstIterate(points, start, mid, depth-1);
			var res2 = this.bstIterate(points, mid+1, end, depth-1);
			return res1 || res2;
		}
	}
};
/**
 * Inserts the point p into the Quadtree. The very first inserted node
 * becomes the root node because no balancing is performed.
 * 
 * @param p
 *            the point to insert
 */
QuadTree.prototype.add = function(p) {
	this.size++;
   // console.log("adding node"+p.getPosition());
    this.root = this.insert(this.root,p);
};


QuadTree.prototype.allPoints = function() {
    var points = [];
    this.allPoints_(this.root,points);
    return points;
};
QuadTree.prototype.allPoints_ = function(node,points) {
    if(node != null) {
    	for(var i = 0; i < node.value.length; i++)
    		points.push(node.value[i]);
        this.allPoints_(node.NE, points);
        this.allPoints_(node.NW, points);
        this.allPoints_(node.SE, points);
        this.allPoints_(node.SW, points);
    } else {
        return;
    }
};

/**
 * Recursively inserts to the point p into the current QuadTreeNode, if the
 * node is null, the point is inserted and becomes a new leaf node,
 * otherwise the point is inserted into a child quadrant of the current
 * node.
 * 
 * @param h
 * @param p
 * @return
 */
QuadTree.prototype.insert = function insert(h, p) {
	
    if(h== null) return new QuadTreeNode(p);
    else if ( eq(p,h)) h.value.push(p);
    else if ( lessX(p,h) &&  lessY(p,h)) h.SW = this.insert(h.SW, p);
    else if ( lessX(p,h) && !lessY(p,h)) h.NW = this.insert(h.NW, p);
    else if (!lessX(p,h) &&  lessY(p,h)) h.SE = this.insert(h.SE, p);
    else if (!lessX(p,h) && !lessY(p,h)) h.NE = this.insert(h.NE, p);
    return h;
};
/**
 * @param p
 * @param q
 * @return
 */
function  lessX( p,  h) {
    return p.getPosition().lat() < h.x;
}
/**
 * @param p
 * @param q
 * @return
 */
function  lessY( p,  h) {
    return p.getPosition().lng() < h.y;
}
function eq( p,  h) {
    return p.getPosition().lat() == h.x && p.getPosition().lng() == h.y;
}

QuadTree.prototype.getAll = function() {
	var points = [];
	this.queryAll(this.root,points);
	return points;
};
QuadTree.prototype.queryAll = function(h,points) {
	if(h==null) return;
	for(var i = 0; i < h.value.length; i++) {
		var p = h.value[i];
		points.push(p);
	}
	var nodes = [h.NW,h.NE,h.SW,h.SE];
	for(var i =0; i < nodes.length; i++)
		this.queryAll(nodes[i],points);
};
QuadTree.prototype.queryRectangle = function(bounds) {
	var points = [];
	//console.log("Root"+this.root.value[0].getPosition());
    this.query2D(this.root, bounds, points);
    return points;
    
};
function withinBounds(p, r) {
	return  p.x > r.x1 && p.x < r.x2 && p.y > r.y1 && p.y < r.y2;
}
/**
 * @param h
 * @param p
 * @param r
 * @param neighbours
 */
QuadTree.prototype.query2D = function( h,  r, points) {
    if(h==null) return;
    var ne = r.getNorthEast();
    var sw = r.getSouthWest();

    var xmin = sw.lng();
    var xmax = ne.lng();
    var ymax = ne.lat();
    var ymin = sw.lat();

    var rect = {x1: xmin, x2: xmax, y1: ymin, y2: ymax};
    if(withinBounds(h, rect)) {
    	console.log("Found "+h.x+" "+h.y);
        for(var i = 0; i < h.value.length; i++) {
        	var p = h.value[i];
        	points.push(p);
        }
	}
    if ( (xmin < h.x) &&  (ymin < h.y)){this.query2D(h.SW, r, points);};
    if ( (xmin < h.x) && !(ymax < h.y)){ this.query2D(h.NW, r, points);};
    if (!(xmax < h.x) &&  (ymin < h.y)){ this.query2D(h.SE, r, points);};
    if (!(xmax < h.x) && !(ymax < h.y)){this.query2D(h.NE, r, points);};
};


/**
 * A node in the QuadTree, has 4 subregions that are axis aligned.
 * 
 * @author Jonathan
 * 
 */
function QuadTreeNode(point) {
    this.value = [point];
    this.NW = null;
    this.NE = null;
    this.SW = null;
    this.SE = null;
    this.y = point.getPosition().lat();
    this.x = point.getPosition().lng();
}