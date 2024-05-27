`use strict`
// aggiungo una variabile
const { createApp } = Vue
createApp({
    data() {
        return {
            // aggiungo un array (todos) con text e done
            todos: [
                { 
                    text: 'Quarterly Newsletter', 
                    done: true 
                },
                { 
                    text: 'Recruiting blog post', 
                    done: true 
                },
                { 
                    text: 'Mobile app luanunch', 
                    done: true 
                },
                { 
                    text: 'Interview John H.', 
                    done: false 
                },
                { 
                    text: 'Summit update to mobile storefronts', 
                    done: true 
                },
                { 
                    text: 'Schedule meeting with Alex', 
                    done: false 
                },
                { 
                    text: 'Homepage refresh', 
                    done: true 
                },
                { 
                    text: 'Onboard new Sales team members', 
                    done: true 
                },
                { 
                    text: 'Review editorial calendar', 
                    done: true 
                },
            ],
            newTodoText: '',
            
        };
    },
    methods: {
        // funzione per un elemento alla lista
        addTask() {
            if (this.newTodoText.trim() !== '') {
                this.todos.push({ text: this.newTodoText, done: false });
                this.newTodoText = '';
            }
        },
        // funzione per il buttone "x" per removere elemento della lista
        removeTask(index) {
            this.todos.splice(index, 1);
        },
        // funzione per il per cambiare il (todos.done) se era uaguale a false, impostare true e viceversa  
        toggleDone(index) {
            this.todos[index].done = !this.todos[index].done;
        }
    }, 

}).mount(`main`)

