from linear_search import linear_search
from binary_search import binary_search
from selection_sort import selection_sort

arr = [64, 34, 25, 12, 22, 11, 90]

# Linear Search
target = 22
index = linear_search(arr, target)
print("Linear Search:", index)

# Binary Search
arr = selection_sort(arr)
target = 22
index = binary_search(arr, target)
print("Binary Search:", index)

# Selection Sort
arr = [64, 34, 25, 12, 22, 11, 90]
arr = selection_sort(arr)
print("Selection Sort:", arr)