class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        if(capacity >0){
        this.capacity = capacity;
        this.length = 0;
        this.array = new Array(this.capacity);
        }

    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
       let elemento = this.array[i];
       return elemento 
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.array[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
    if(this.length >= this.capacity){
        this.capacity *=2;
    }
      this.array[this.length] = n;
      this.length ++;  
        
    }

    /**
     * @returns {number}
     */
    popback() {
        this.length --;
        return this.array[this.length];
    }

    /**
     * @returns {void}
     */
    resize() {
        let newCap = this.capacity * 2;
        this.capacity = newCap;

    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.length;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
