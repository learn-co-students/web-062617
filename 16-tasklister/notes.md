* If you're selecting a certain item, what can you do to that item?
  * What needs to be interacted with on the page?
  * How do we know that on submit is on the form or on click of the button?
    * Why do we preventDefault there and not in other places?

* Cleanest way to do nested divs? – Semantic HTML
  * List can be a <ul>
  * Task can be an <li>
  * Look more into HTML elements and semantic HTML

* Attributes, elements, nodes (<a href="google.com">Google</a>)
  * Attribute
    * a.getAttribute("href")
  * Element & Node

* What's the best way to select elements?
  * document.getElementById('id') // one element
  * document.getElementsByClassName('class') // multiple
  * document.getElementsByTagName('p') // multiple
  * document.querySelector('#id') // one
  * document.querySelectorAll('.class') // multiple

* Is there a way to not have HTML string in your JavaScript - Handlebars
  * <script id="task-template" type="handlebars-template">
      <li id={{ task.id }}>
        {{ task.description }}
      </li>
    </script>

   * return '<li id="' + task.id + '">' + task.description + '</li>'
   * document.createElement('li')
      li.id = task.id
      li.innerText = task.description
      ulParent.appendChild(li)

    * getting template string > ulParent.innerHTML = liTemplate

    * ListComponent
        render() {
          return `<li id=${task.id}>${task.description}</li>`
        }


* Organizing code
  * h1 (title)
  * form (list)
    * input (list-title)
    * button[type="submit"] (list-create) [event]
      * render the task form
      * render created list
  * form (task)
    * select options (task-list)
    * input (task-description)
    * input (task-priority)
    * button[type="submit"] (task-create) [event]
      * create new task with those properties
  * ul (lists)
    * li ul (list)
    * Be able to delete it

      * li (task)
        * Show title
        * Be able to delete a task
