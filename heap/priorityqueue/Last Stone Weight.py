// You are given stones with weights. Each turn:

// Smash the two largest stones
// If equal → both destroyed
// Else → push difference back

// Return the last stone weight.

import heapq

def lastStoneWeight(stones):
    stones = [-s for s in stones]
    heapq.heapify(stones)

    while len(stones) > 1:
        y = -heapq.heappop(stones)
        x = -heapq.heappop(stones)

        if x != y:
            heapq.heappush(stones, -(y - x))

    return -stones[0] if stones else 0