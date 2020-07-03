export function objectSize(obj) {
    var size = 0
    for(key in obj){
        size++
    }

    return size
}