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
                    done: true
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
            
        }
    }
)