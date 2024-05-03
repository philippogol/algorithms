console.log("binary search algorithm: recursive");

function binarySearchRecursive(nums, left, right, target){
    if(left > right){
        return -1;
    }

    mid = Math.floor((left + right) / 2);
    //mid = left + (right - left) / 2

    if(target === nums[mid]){
        return mid;

    }else if(target < nums[mid]){
        return binarySearchRecursive(nums, left, mid - 1, target);

    //}else if(target > nums[mid]){
    }else{
        return binarySearchRecursive(nums, mid + 1, right, target);
    }

}

var nums = [1,2,4,5,7,8,9,10,11,15,19,22,27,29];
var target = 11;

var left = 0;
var right = nums.length-1;

index = binarySearchRecursive(nums, left, right, target);

if(index != -1){
    console.log('Element found at index: ' + index);
}else{
    console.log('Element found not in the list')
}