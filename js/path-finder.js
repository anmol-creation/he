class PathFinder {
    constructor(dataList) {
        this.dataList = dataList;
        this.adjList = new Map();
        this.buildAdjacencyList();
    }

    buildAdjacencyList() {
        this.dataList.forEach(node => {
            this.adjList.set(node.id, new Set());
        });

        this.dataList.forEach(node => {
            if (node.parent) this.addEdge(node.id, node.parent);
            if (node.mother) this.addEdge(node.id, node.mother);
            if (node.spouseOf) this.addEdge(node.id, node.spouseOf);

            // Siblings
            if (node.parent) {
                const siblings = this.dataList.filter(d => d.parent === node.parent && d.id !== node.id);
                siblings.forEach(s => this.addEdge(node.id, s.id));
            }
        });
    }

    addEdge(id1, id2) {
        if (this.adjList.has(id1) && this.adjList.has(id2)) {
            this.adjList.get(id1).add(id2);
            this.adjList.get(id2).add(id1);
        }
    }

    findShortestPath(startId, endId) {
        if (!this.adjList.has(startId) || !this.adjList.has(endId)) return null;
        if (startId === endId) return [startId];

        const queue = [[startId]];
        const visited = new Set([startId]);

        while (queue.length > 0) {
            const path = queue.shift();
            const current = path[path.length - 1];

            if (current === endId) return path;

            const neighbors = this.adjList.get(current);
            for (let neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push([...path, neighbor]);
                }
            }
        }
        return null;
    }
}
window.PathFinder = PathFinder;
