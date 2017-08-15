// XHR Requests
// XHR: XMLHttpRequest
// To make requests to the server, XML:
//  <Person name="Tim" age="26">
//      <Apartment city="New York" ... />
//  </Person>

// JSON: JavaScript Object Notation
//  Data Types: Number, Strings, Boolean, Array, Object, Null

// Request-response lifecycle
//  Send a request, the requested server does some work, we get a response
//  Typing address/URL and pressing enter > Loading Spinner > The HTML
//  Create an XHR Request > Wait for the response > We'll do something with response

// Policies
//  Security for the server, security in the browser
//  Cross-origin resource sharing (CORS)
//    Origin: The domain that we're requesting from (buzzfeed.com)
//    Cross-origin: From one origin to another (mywebsite.com > buzzfeed.com)
//    Resource: Some data that we make available from the server
//    Sharing: caring
// ? Does GitHub permit CORS? Idk.

// Questions
//    What's the Ruby equivalent?
//      In Ruby, it's synchronous, but we have HTTParty to make requests
//    How do we determine if a site shares resources?
//      Look for API / Developers on site
//      Search for <website name> API

// Synchronous
//    Procedural order of events
//    Not convenient for making requests
//    Single-threaded
//      let x = 3
//      x++
//      console.log(x)
// Andrew's example:
//    waking up in the morning (sync)
//    making coffee (sync)
//    waiting for coffee to finish (sync)
//    brushing your teeth (sync)
//    drink coffee

// Asynchronous
//  Some code to execute not immediately, but soon
//  Program to itself: Go do some operation while I continue executing
//    What if something you want to load now depends
// Andrew's example:
//    waking up in the morning (sync)
//    putting coffee to brew (sync > async)
//      brushing your teeth (async)
//      drinking coffee (async)

const syncVersusAsync = `
    -
    | < synchronous (program starts)
    |
    |
    |\
    | \
    |  \
    |   \
    |    | < asynchronous (e.g., AJAX request based on user clicking button)
    |    |
    |    | < asynchronous complete (e.g., save response / update view)
    |    -
    |
    |
    | < synchronous complete (program ends)
    -
`

function xhrRequest() {
  // Asynchronous requests in JavaScript
  const req = new XMLHttpRequest()
  req.open('GET', 'http://ron-swanson-quotes.herokuapp.com/v2/quotes/5')
  // req.setRequestHeader('header_name', 'header_value')
  req.send()
  req.addEventListener('load', function() {
    // console.log('arguments', arguments)
    // console.log('this', this)
    // console.log('event', event)
    // debugger

    // What do I want to do?
    const quotes = JSON.parse(this.responseText)
    const quoteLIs = quotes.map(quote => `<li>${quote}</li>`).join('')
    const template = `
    <ul>
    ${quoteLIs}
    </ul>
    `

    document.body.innerHTML = template
  })
}

function ajaxRequest() {
  $.ajax({
  	url: 'http://ron-swanson-quotes.herokuapp.com/v2/quotes/5',
  	method: 'GET',
  	// headers: {}
  	success: function(quotes) {
  		  const quoteLIs = quotes.map(quote => `<li>${quote}</li>`).join('')
        const template = `
          <ul>
          ${quoteLIs}
          </ul>
          `
  			document.body.innerHTML = template
  	},
  	error: function(error) { console.log(error) }
  })
}

function ajaxRequestOnClickEvent() {
  document.body.innerHTML = '<button id="load-quotes">Load Quotes</button>'

  // AJAX
  $('#load-quotes').on('click', function() {
    $.ajax({
      url: 'http://ron-swanson-quotes.herokuapp.com/v2/quotes/5',
      method: 'GET',
      // headers: {}
      success: function(quotes) {
        const quoteLIs = quotes.map(quote => `<li>${quote}</li>`).join('')
        const template = `
        <ul>
        ${quoteLIs}
        </ul>
        `
        document.body.innerHTML = template
      },
      error: function(error) { console.log(error) }
    })
  })
}
