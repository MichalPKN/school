const g = [
    /*     0  1  2  3  4  5  6  7  8*/
    /*0*/
    [0, 1, 0, 0, 3, 0, 0, 0, 0],
    /*1*/
    [1, 0, 4, 0, 2, 2, 0, 0, 0],
    /*2*/
    [0, 4, 0, 0, 0, 1, 0, 0, 0],
    /*3*/
    [0, 0, 0, 0, 2, 0, 0, 0, 0],
    /*4*/
    [3, 2, 0, 2, 0, 0, 0, 3, 0],
    /*5*/
    [0, 2, 1, 0, 0, 0, 0, 2, 0],
    /*6*/
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    /*7*/
    [0, 0, 0, 0, 3, 2, 0, 0, 1],
    /*8*/
    [0, 0, 0, 0, 0, 0, 0, 1, 0],
];
console.log(pathExists(2, 8));

function pathExists(start, end) {
    const toVisit = [];
    const visited = [];
    const dist = [];
    const prev = [];
    //set shortest known distance to Infinity for every node
    for (let node = 0; node < g[0].length; node++) {
        dist.push(Infinity);
    }
    dist[start] = 0;
    toVisit.push(start);
    //until the shortest path to destination is found
    while (!visited.includes(end)) {
        //find least-valued unexplored vertex
        let max = null;
        for (let value = 0; value < dist.length; value++) {
            if (max == null) {
                if (!visited.includes(value)) {
                    max = value;
                }
            } else {
                if (dist[value] < dist[max] && !visited.includes(value)) {
                    max = value;
                }
            }
        }
        let actual = max;
        for (let node = 0; node < g[actual].length; node++) {
            if (!g[actual][node]) {
                continue;
            }
            //set shortest known distance to each neighbor node if its smaller than previous and remember current(actual) node
            if (dist[actual] + g[actual][node] < dist[node]) {
                dist[node] = dist[actual] + g[actual][node];
                prev[node] = actual;

            }
            if (!toVisit.includes(node) && !visited.includes(node)) {
                toVisit.push(node);
            }
        }
        visited.push(actual);
    }
    let path = [end];
    let current = end;
    while (current != start) {
        current = prev[current];
        path.unshift(current);
    }
    return path;
}