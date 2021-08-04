const data = {
    name : 'Birthday party',
    guest: ['Ankitsinh','kd','mayur'],
    printList(){
        console.log('guest list for ',this.name);
        this.guest.forEach(((guest) => {
            console.log(guest + 'is attendig' + this.name);
        }))
    }
}

data.printList();
