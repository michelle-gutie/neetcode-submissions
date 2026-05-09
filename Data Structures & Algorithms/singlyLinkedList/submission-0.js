class ListNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        //dummy node: facilita las operaciones 
      this.head = new ListNode(-1);
      this.tail= this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) { 
        /*empezamos con la cabeza, pero sabemos que tenemos un dummy node
        al inicio, por eso pasamos al siguiente despues de la cabeza, this.head.next*/
        let actual = this.head.next;
        let i = 0;
        while(actual){
            if(i===index){
                return actual.val;
            }
            i++;
            actual = actual.next;
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const node = new ListNode(val);
        node.next = this.head.next;
        this.head.next = node;

        if(!node.next){
            this.tail=node;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        //funciona tanto si la lista esta vacia o no
        const nodeCola = new ListNode(val);
        this.tail.next = nodeCola;
        this.tail = this.tail.next;
        
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let i=0;
        let actual = this.head;
        while (i < index && actual) {
            /*queremos que 'actual' apunte al 
            nodo antes del que vamos a eliminar*/
            i++;
            actual = actual.next;
        }
        /*evaluamos que actual no sea null, o sea que existe el 
        nodo antes del objetivo a borrar y tambien
        existe el objetivo a borrar*/ 
        if (actual && actual.next) {
            /*aca evaluamos el caso de que el nodo a borrar es
            la cola, en ese caso declaramos el valor('actual') a 
            la cola*/
            if (actual.next === this.tail) {
                this.tail = actual;
            }

            actual.next = actual.next.next;
            return true;
        }
        return false;
       
        
        
    }

    /**
     * @return {number[]}
     */
    getValues() {
        //empezamos sin incluir el dummy node:
        let actual = this.head.next;
        const valores = [];
        while (actual) {
            valores.push(actual.val);
            actual = actual.next;
        }
        return valores;
        
    }
}
