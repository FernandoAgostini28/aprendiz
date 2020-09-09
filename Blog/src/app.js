/*new Vue({
    el: '#app',
    data: {
     items:[{
      show: false,
      titulo: "",
      texto: " "
     }]
    }
  })*/

  new Vue({
    el: '#app',
    data: {
        titulo: 'Oi meu amor',
        newTodo: '',
        newArtigo:'',
        todos: []
    },
    methods:{
        addTodo() {
            this.todos.push({
                titulo: this.newTodo,
                artigo: this.newArtigo,
                show: false,
                
            });
            this.newTodo = '';
            this.newArtigo = '';
        },
        
          
            
        

        removeTodo(todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
        }

       
        
        
    }
  })