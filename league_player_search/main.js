const app = new Vue({
    
    el: '#app',

    methods: {
      mainFunction(){
        this.getPlayers()
        this.searchForPlayers()
      },
      getPlayers(){
        this.initialInput = this.initialInput.replace(/\n/g, '')
        this.players = this.initialInput.split(' joined the lobby').slice(0,5)
        this.initialInput = ''
      },
      searchForPlayers(){
        for (player of this.players){
         this.playersOPGG.push(`https://euw.op.gg/summoner/userName=${player}`)
        }
        
      },
      openPlayersOPGG(){
        for (OPGG of this.playersOPGG){
          window.open("https://www.w3schools.com", 'blank'); 
        }
      }
    },
    data: {
      playersOPGG : [],
      players : [],
      initialInput: ''
    }

  })