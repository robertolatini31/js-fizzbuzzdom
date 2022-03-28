// collego la mia riga html
const RowElement = document.querySelector('.row');
 
// Scrivi un programma che stampi in console i numeri da 1 a 100

for (let i = 1 ; i <= 100 ; i++) {

    // Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz
    if ( ((i % 3) == 0) && ((i % 5) == 0) ) {
        console.log('FizzBuzz');
        // stampo elementi fizzbuzz
        let FizzBuzz = ` <div class="col">
        <div class="mycard bg_danger d-flex align-items-center justify-content-center">
            FizzBuzz
        </div>
        <!-- /.mycard -->
    </div>
    <!-- /.cols -->`;
        RowElement.insertAdjacentHTML('beforeend', FizzBuzz);
    }
    // Per i multipli di 3 stampi “Fizz” al posto del numero
    else if ((i % 3) == 0) {
        console.log('Fizz');
        // stampo elementi fizz
        let Fizz = ` <div class="col">
        <div class="mycard bg_success d-flex align-items-center justify-content-center">
            Fizz
        </div>
        <!-- /.mycard -->
    </div>
    <!-- /.cols -->`;
        RowElement.insertAdjacentHTML('beforeend', Fizz);
    }
    // Per i multipli di 5 stampi Buzz.
    else if ((i % 5) == 0) {
        console.log('Buzz');
        // stampo elementi buzz
        let Buzz = ` <div class="col">
        <div class="mycard bg_warning d-flex align-items-center justify-content-center">
            Buzz
        </div>
        <!-- /.mycard -->
    </div>
    <!-- /.cols -->`;
        RowElement.insertAdjacentHTML('beforeend', Buzz);
    }
    else {
        console.log(i);
        // stampo elementi i
        let html_i = ` <div class="col">
        <div class="mycard bg_secondary d-flex align-items-center justify-content-center">
            ${i}
        </div>
        <!-- /.mycard -->
    </div>
    <!-- /.cols -->`;
        RowElement.insertAdjacentHTML('beforeend', html_i);
        
    }
    
}

