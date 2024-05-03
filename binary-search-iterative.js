console.log("binary search algorithm: iterative");

function binarySearchIterative(nums, target){
    var left = 0;
    var right = nums.length-1;
    
    while(left <= right){
        
        const mid = Math.floor((left + right) / 2);

        //target found
        if(target==nums[mid]){
            return mid;
        //discard all elements in the right search space, including the middle element 
        }else if(target < nums[mid]){
            right = mid - 1;

        //discard all elements in the left search space, including the middle element
        }else{
            left = mid + 1;
        }
    }

    return -1;
}

nums = [2, 5, 6, 8, 9, 10];
target = 5;

index = binarySearchIterative(nums, target);

if(index != -1){
    console.log('Element found at index: ' + index);
}else{
    console.log('Element found not in the list')
}
    
