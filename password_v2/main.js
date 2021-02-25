const app = new Vue({
    
    el: '#app',
    methods: {
    },
    mounted() {
      this.$refs.pin.focus()
    },
    methods: {
      looper(arr,n){                                     //use this to return value from array after looping through it n times
        let index = 0 
        while (n != 0){

          if (index == arr.length-1){

            index = 0 
            
          }
          index++
          n--
        }

        return arr[index]
      },
      copyText() {

        document.getElementById("password").select();
        document.getElementById("password").setSelectionRange(0, 99999); // For mobile devices
        document.execCommand("copy");

      },
      textBoxEntered(hide,show){
        if ( this.checkInput(hide) == true ){
          this.hideInput(hide)
          this.showInput(show)
          this.focusInput(show)
        }

      },
      hideInput(ref){                                            //hide the input
        this.hide[ref] = true
      },
      showInput(ref){                                           //show the input
        this.hide[ref] = false
      },
      focusInput(ref){                                          //focus the input
        const self = this
        self.$nextTick(() => self.$refs[ref].focus() ) 
      },
      getCharCode(char){                                        //returns charcode of character
        return char.charCodeAt(0);                               
      },
      stringToCharCodeArray(string){                            //returns all char codes of string
        let array = []
        for (char of string){
          array.push( this.getCharCode(char) )
        }
       return array                                             
      },
      reducer(accumulator, currentValue){
       return Number(accumulator) + Number(currentValue)                        //reducer for higher order reduce function
      },
      numberToArray(value){
        return value.split('')
      },
      checkInput(value){
        switch (value){
          case 'pin':
            if (this.pin == ""){
              return false
            }
          break
          case 'word':
            if (this.word == ""){
              return false
            }
          break
          case 'length':
            if (this.attribute.length == ""){
              return false
            }
          break
        }
        return true
      },
      attributesSelected(){
        let value = 0
        if ( this.attribute.uppercase == true) { value++ } 
        if ( this.attribute.lowercase == true) { value++ } 
        if ( this.attribute.number == true) { value++ } 
        if ( this.attribute.special == true) { value++ } 
        return value
      },
      generateCharacterTypeArray(){

        let characterTypeArray = []
        let mutatedCharacterTypeArray = []

        //for the amount of character selections push each type to the characterTypeArray
        for (let i = 0; i < Math.floor( this.attribute.length / this.attributesSelected() ) ; i++){ 
    

          if(this.attribute.uppercase == true){
            characterTypeArray.push('uppercase')
          }
          if(this.attribute.lowercase == true){
            characterTypeArray.push('lowercase')
          }
          if(this.attribute.special == true){
            characterTypeArray.push('special')
          }
          if(this.attribute.number == true){
            characterTypeArray.push('number')
          }
    
        }

        // get the reamainder and push the remainder to the characterTypeArray
        let remainder = this.attribute.length - ( this.attributesSelected() * Math.floor( this.attribute.length / this.attributesSelected() ) )

        if ( remainder != 0  ){
          for (let i = 0; i < remainder ; i++){ 
            if(this.attribute.uppercase == true){
              characterTypeArray.push('uppercase')
            }
            else if(this.attribute.lowercase == true){
              characterTypeArray.push('lowercase')
            }
            else if(this.attribute.special == true){
              characterTypeArray.push('special')
            }
            else{
              characterTypeArray.push('number')
            }

          }
        }
        // mutate characters based on the remainder of the array position from the pin
        while ( characterTypeArray.length  > 0 ){ 

          mutatedCharacterTypeArray.push( characterTypeArray[ this.pin % characterTypeArray.length ] )
          characterTypeArray.splice( this.pin % characterTypeArray.length  , 1)

        }

        return mutatedCharacterTypeArray
      },
      generatePassword(){
         
        let characters = 'abcdefghijklmnopqrstuvwxyz'
        let numbers = '0123456789'
        let special = `!@#$%^&*()_+-={}[]:"|;<>?,./`
        let passwordArray = []
        
        for (let i = 0 ; i < this.attribute.length; i++){
          switch ( this.generateCharacterTypeArray()[i] ){
              case 'uppercase':
                passwordArray.push( characters[ this.stringToCharCodeArray(this.word).join('') * i % characters.length ].toUpperCase() )
              break
              case 'lowercase':
                passwordArray.push( characters[ this.stringToCharCodeArray(this.word).join('') * i  % characters.length ].toLowerCase() )
              break
              case 'special':
                passwordArray.push( special[ this.stringToCharCodeArray(this.word).join('') * i  % special.length ] )
              break
              case 'number':
                passwordArray.push( numbers[ this.stringToCharCodeArray(this.word).join('') * i  % numbers.length ] )
              break
          }

        }

        this.password = passwordArray.join("")

      },
    },
    data: {
      pin: '',
      word : '',
      password : 'secret',
      message : "",
      hide : {
        pin : false,
        word : true,
        length : true,
        uppercase : true,
        lowercase : true,
        number : true,
        special : true,
        password : true
      },
      attribute : {
        length : 16,
        uppercase : true,
        lowercase : true,
        special : true,
        number : true,
      },
    }

  })