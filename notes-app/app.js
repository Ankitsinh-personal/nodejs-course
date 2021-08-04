const yargs = require('yargs');
const notes = require('./notes')

//yargs  npm pkg
//create command


yargs.command({
    
    command : 'add',
    describe : 'add note',
    //create option  ex.  --help
    builder:{
        title:{
            describe : 'note title',
            demandOption: true,
            type : 'string'
        },
        body:{
            describe : 'note body',
            demandOption: true,
            type : 'string'
        }
    },
    handler : function (argv){
        // console.log("add new notes !!!!!");
        // console.log('title is:'+ argv.title);
        // console.log('body is:'+ argv.body);
        notes.addNotes(argv.title, argv.body);

    }
})

yargs.command({
    command : 'remove',
    describe : 'remove note',
    builder: {
        title : {
            describe: 'remove notes',
            demandOption: true,
            type : 'string'
        }
    },
    handler : function (argv){
        // console.log("remove notes !!!!!");
        notes.removeNotes(argv.title);
    }
})

yargs.command({
    command : 'list',
    describe : 'list note',
    handler : function (){
        console.log("lists notes !!!!!");
    }
})

yargs.parse();
// console.log(yargs.argv);
