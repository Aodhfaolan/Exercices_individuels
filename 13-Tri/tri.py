#def qui se déplace dans le tableau toute la longueur du tableau
def bubbleSort(array):
    for i in range(len(array)):
        #fonction range(start, stop,[,step])
        for j in range(0, len(array)-i-1):
            if array[j] > array[j+1]:
                array[j], array[j+1] = array[j+1], array[j]
array = [8,-2, 2, 1, 0, 9, 6]
bubbleSort(array)
print("Le bon ordre est:", array)