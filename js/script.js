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
            newTodo: '',
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
            },
            addNewTodo: function(newTodo, todoList) {
                newTodo.trim;
                const newTodoItem = {
                    text: newTodo,
                    done: false
                };
                if (newTodo.length > 3) {
                    todoList.push(newTodoItem)
                }
            }
        }
    }
)