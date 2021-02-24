#example dicitonary
user_boxes = {'weight': [4,2,18,21,14,13],
              'box_name': ['box1','box2', 'box3', 'box4', 'box5', 'box6']
             }

def sort_boxes(list):
    w = list['weight']
    bn = list['box_name']
    for i in range(len(w)):
        for j in range(len(w)-1):
            if w[j] > w[j+1]:
                w[j], w[j+1] = w[j+1], w[j]
                bn[j], bn[j+1] = bn[j+1], bn[j]
    return bn

print(sort_boxes(user_boxes))
  