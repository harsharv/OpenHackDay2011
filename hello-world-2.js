
/* Print world every two seconds. */
setInterval(function () 
{
    console.log("World");
}, 2000);


/* On INT signal, say bye and exit. */
process.on('SIGINT', function () {
    console.log('Bye!');
    process.exit(0);
});

/* Print "Hello" */
console.log("Hello");
