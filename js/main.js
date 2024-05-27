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
        
        // funzione per il buttone "x" per removere elemento della lista
        removeTask(index) {
            this.todos.splice(index, 1);
        },
        
    }, 

}).mount(`main`)

