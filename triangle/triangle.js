var triangle = {
    isEquilateral : function(a,b,c) {
    	    if(a!=b) return false ; 
    	    if(b!=c) return false ;
    	    if(a<=0) return false ;
    		return true ;
    },
    isIsosceles : function(a,b,c) {
	if(a<=0 || b<=0 || c<=0) return false;
	if(a==b)
	{
    if (a + b >c) return true;
	return false ;
	}
    if(a==c) {
    if (a + c >b) return true;
	return false ;
	}
	if(b==c) {
    if (c + b >a) return true;
	return false ;
	}
	return false ;
    },
	isScalene : function(a,b,c) {
	if(a<=0 || b<=0 || c<=0) return false;
    	    if (a + b < c) return false ; 
    	    if(a + c < b) return false ;
    	    if(b + c < a) return false ;
    		return true ;
    }
};

