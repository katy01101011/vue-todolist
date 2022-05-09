const app = new Vue(
    {
        el: '#root',
        data: {
            todoList: [
                {
                    text: 'Fare l\'esercizio del pomeriggio',
                    done: false
                },
                {
                    text: 'Controllare le mail',
                    done: false
                },
                {
                    text: 'Seguire il recap',
                    done: false
                },
                {
                    text: 'Tagliare l\'erba',
                    done: false
                },
                {
                    text: 'Aggiustare il computer',
                    done: false
                },
            ],
        },
        methods: {
            removeTodo: function(index) {
                event.preventDefault();
                this.todoList.splice(index, 1);
            },

            todoToggle: function(index) {
                const clickedTodo = this.todoList[index];
                clickedTodo.done = !clickedTodo.done
                console.log(clickedTodo.done);
            }
        }
    }
)