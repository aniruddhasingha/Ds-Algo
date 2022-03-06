const nums = [ -2, -3, 4, -1, -2, 1, 5, -3 ];
       function maxSubArraySum(a, size)
{
    var maxint = Math.min()
    var max_so_far = -maxint - 1
    var max_ending_here = 0
      
    for (var i = 0; i < size; i++)
    {
        max_ending_here = max_ending_here + nums[i]
      console.log( max_ending_here )
      console.log(max_so_far)
      console.log(max_so_far < max_ending_here ? true :false)
        if (max_so_far < max_ending_here)
            max_so_far = max_ending_here
 
        if (max_ending_here < 0)
            max_ending_here = 0
    }
  console.log(max_so_far)
    return max_so_far
}

maxSubArraySum(nums,nums.length);