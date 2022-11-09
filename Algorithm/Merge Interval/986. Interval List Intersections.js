var intervalIntersection = function(firstList, secondList) {
    let A = 0, B =0;

    let res = [];

    while (A < firstList.length && B <secondList.length) {
        let maxStart = Math.max(firstList[A][0], secondList[B][0]);
        let minEnd = Math.min(firstList[A][1], secondList[B][1]);

        if(maxStart <= minEnd) res.push([maxStart, minEnd]);

        if(firstList[A][1] < secondList[B][1]) A++;
        else B++;
    }
    return res;

}