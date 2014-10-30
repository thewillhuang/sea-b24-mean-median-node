var MeanMedianMode = function() {
  this.mean = function (array){
    sum = 0;
    for (var i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum/array.length;
  };
  this.median = function(a,b,c){
    var args = Array.prototype.slice.call(arguments);
    args = args.sort();
    var middle = Math.floor(args.length/2);
    return args[middle];
  };
  this.mode = function(a,b,c,d){
    var args = Array.prototype.slice.call(arguments);
    var modeMap = {};
    var maxEl = args[0];
    var maxCount = 1;
    for(var i = 0; i < args.length; i++)
    {
      var el = args[i];
      if(modeMap[el] === null) {
        modeMap[el] = 1;
      } else {
        modeMap[el]++;
      }

      if(modeMap[el] > maxCount)
      {
        maxEl = el;
        maxCount = modeMap[el];
      }
    }
    return maxEl;
  };
};

var mmm = new MeanMedianMode();
module.exports = mmm;
