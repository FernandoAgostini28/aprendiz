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
  /* ciando e estanciando variaveis */
  new Vue({
    el: '#app',
    data: {
        titulo: '',
        newTitulo: '',
        newArtigo:'',
        artigoAberto: null,
        artigos: []
    },
    /*metodo adiciona novo artigo ao Array*/
    methods:{
        addArtigo() {
            this.artigos.push({
                titulo: this.newTitulo,
                artigo: this.newArtigo,
                show: false,
                
            });
            this.newTitulo = '';
            this.newArtigo = '';
        },
        /* metodo para comparar  abrir artigo*/
        exibirArtigo(index){
          this.artigoAberto = index;
        },
        
          
            
        
        /* metodo para remover artigo*/
        removeArt(art) {
            const todoIndex = this.artigos.indexOf(art);
            this.artigos.splice(todoIndex, 1);
        }

       
        
        
    }
  })