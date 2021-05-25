const app = new Vue ({

    el:"#app",

    data:{

        counter:0,
        counterMessage:0,

        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },

            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Ginetto',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Franchina',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Valentino',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Daniele',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Geronimo',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },

        ],

        messageActive:{
            visible: false, 
            show: true
        },

        newMessage:"",

        contactModel:"",

        

    },

    methods:{
        /**
         * ### Increase counter 
         * il contatore che incrementa all'incrementare del'indice che viene passato come parametro 
         * @param {index} - indice 
         * @returns {counter} 
         */
        selectContact(indice){
            console.log(indice)
            this.counter=indice;
            return this.counter;
        },

        /**
         * ### Invia il messaggio + risposta automatica
         * 
         * La funzione permette di inviare un messaggio. Tramite v-model viene passato un value alla variabile @data-newMessage.
         * La funzione pusha nell'array di oggetti message un nuovo oggetto con : 
         * 
         * @date = {livedata}
         * @text = {newMessage}
         * @status = 'sent'
         * 
         * 
         * @ setTimeout(){ *codice*, 1000} che genera con metodo analogo una risposta automatica.
         */
        sentMessage(){
            //variabile data attuale
            const liveDate = dayjs().format('DD/MM/YYYY HH:mm:ss');

            this.contacts[this.counter].messages.push(
                {
                    date: liveDate,
                    text: this.newMessage,
                    status: 'sent'
                });
                this.newMessage = "";
                setTimeout(() => {
                console.log("banana");
                this.contacts[this.counter].messages.push(
                    {   
                        date:liveDate,
                        text:"Risposta dopo un solo secondo",
                        status:'received'
                    }
                )
            },1000)
        },

        /**
         * ### Filtra Contatti
         * 
         * La funzione cicla all'interno dell'array contacts.
         * Controlla, tramite condizionale if...else, che per ogni elemento ciclato, alla chiave nome, sia incluso il valore inserito tramite v-model.
         * 
         */
        searchContact(){
            this.contacts.forEach(element => {
                if(element.name.toLowerCase().includes(this.contactModel.toLowerCase())){
                    element.visible = true ;
                } else {
                    element.visible = false ;
                }
            })
           
        },

        openMenu(indiceMsg) {
            console.log(indiceMsg);
            console.log(this.messageActive.visible)
            console.log()
            if(this.contacts[this.counter].messages[this.indiceMsg] == false && messageActive.visible == false){
                messageActive.visible = true;
            }
            
        }
          
    
}})

