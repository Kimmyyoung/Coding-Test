/*
    You will need to iterate over the nums starting from 0 to the last, and keep updating max to record how far you can jump so far

    But we still can add a bit of optimization by checking an early exit condition when there is no way to move forward
    If a current value is 0, you cannot jump to the next But there might be a way to jump farther from the previous step
    max again! max > idx then we can conclude we can go further from the previous step Otherwise, It is impossible


*/

const canJump = (nums)=> {
    let idx = 0;
    let max = 0;
    let target = nums.length -1;

    while (idx < nums.length) {
        max = Math.max(max, idx+nums[idx]);
        if(max >= target) {
            return true;
        }

        if(max <= idx && nums[idx] === 0) {
            return false;
        }

        idx++;
    }

    return false;
}