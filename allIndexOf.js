/**
 * Little helper function that finds all indexes containing a given boolean value.
 */
_.mixin({
  allIndexOf : function(array, boolean) {
        if (array === null) { return [-1]; }
        var i = _.indexOf(array, boolean);
        var n, indx = 0;
        var result = [];

  	 if (array.length === 0 || i === -1) { return [i]; }
        for (n = 0; n <= array.length; n++) {
            i = _.indexOf(array,boolean, indx);
            if (i !== -1) {
                indx = i + 1;
                result.push(i);
            } else {
                return result;
            }
        }
        return result;
}
});
