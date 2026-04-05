import heapq
from collections import Counter, deque

def leastInterval(tasks, n):
    count = Counter(tasks)
    maxHeap = [-c for c in count.values()]
    heapq.heapify(maxHeap)

    time = 0
    queue = deque()  # (count, ready_time)

    while maxHeap or queue:
        time += 1

        if maxHeap:
            cnt = 1 + heapq.heappop(maxHeap)
            if cnt:
                queue.append((cnt, time + n))

        if queue and queue[0][1] == time:
            heapq.heappush(maxHeap, queue.popleft()[0])

    return time