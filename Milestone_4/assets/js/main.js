const app = new Vue ({

    el:"#app",

    data:{

        counter:0,

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
        ],

        newMessage:"",

        contactModel:"",

    },

    methods:{
        
        selectContact(indice){
            console.log(indice)
            this.counter=indice;
            return this.counter;
        },

        sentMessage(){
            const liveDate = dayjs().format('DD/MM/YYYY HH:mm:ss');
            console.log(liveDate);
            if(this.newMessage.length > 0) {
                document.getElementById("elenco_messaggi").insertAdjacentHTML('beforeend',
                `<div class="d-flex flex-column messaggio col-6 m-1 rounded sent_message"><p>${this.newMessage}</p><p class="data_ora align-self-end">${liveDate}</p></div>
                `)
                this.newMessage="";
            }
            setTimeout(function(){
                
                let answerMessage="Ehi amico, certo ! Questa è la mia risposta dopo un solo secondo !!";
                document.getElementById("elenco_messaggi").insertAdjacentHTML('beforeend',
                `<div class="d-flex flex-column messaggio col-6 m-1 rounded received_message"><p>${answerMessage}</p><p class="data_ora align-self-end">${liveDate}</p></div>
                `)
            },1000)
        },

        searchContact(){
            this.contacts.forEach(element => {
                if(element.name.toLowerCase().includes(this.contactModel.toLowerCase())){
                    element.visible = true ;
                } else {
                    element.visible = false ;
                }
            })
           
        }
}})