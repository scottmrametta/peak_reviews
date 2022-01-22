def bottle_song(num_bottles):
    
    if(num_bottles == 1):
        objects = 'bottle'
        object_minus_one = 'bottle'
    elif(num_bottles == 2):
        objects = 'bottles'
        object_minus_one = ' bottle'
    else:
        objects = 'bottles'
        object_minus_one = 'bottles'
    
    if(num_bottles > 0):
        print(str(num_bottles) + " " + objects + " of beer on the wall, " + str(num_bottles) + " " + objects + " of beer.")
        print("Take one down and pass it around, " + str(num_bottles-1) + " " + object_minus_one + " of beer on the wall.")
        print(" ")
    elif(num_bottles == 0):
        print("No more bottles of beer on the wall, no more bottles of beer.")
        print("Go to the store and buy some beer, 99 bottles of beer on the wall.")
    else:
        print("Error: Wheres the booze?")

bottles = 99
    
while bottles >= 0:
    bottle_song(bottles)
    bottles -= 1
   
