[Lecture Code](https://github.com/johannkerr/web-062617)

## Rails Forms


## Objectives
* Make a Rails App that lets you work with a single resources


### Students should know
* How to make a basic Rails App i.e `rails new`
* How to make a model i.e `rails g model Drink name price:integer`
* Restful routes


|ACTION|METHOD|PATH|
|-|-|-|
|INDEX|GET|'/drinks'|
|SHOW |GET|'/drinks/:id'|
|NEW| GET |'/drinks/new'|
|Create| POST |'/drinks'|
|EDIT| GET | '/drinks/:id/edit'|
|UPDATE| PATCH | '/drinks/:id'|
|DESTROY| DELETE | '/drinks/:id'

* Add `resources :drinks` to your `config/routes.rb` file to get all 7 actions


### form_tag

```

<%= form_tag drinks_path do %>
  <%= label_tag :name %>
  <%= text_field_tag :'drinks[:name]' %>
  <%= label_tag :price %>
  <%= text_field_tag :'drinks[:price]' %>
  <%= submit_tag "Create Drink" %>
<% end %>

```


**Note**
The drinks_path method simply returns the string '/drinks' which is used in the form as part of the action. When the form is submitted a POST request is sent to '/drinks'


### Form_For

We use the `form_for` instead of the form_tag when the form can be created via a model. In some cases there is no model to use with the form_for and therefore form_tag can be used for eg a Login Screen. If we were to include a field not found within the drink model the form would through an error. For example
`<%= f.text_field beef %>` would fail.


```
<%= form_for @drink do |f| %>
  <%= f.label :name  %>
  <%= f.text_field :name %>
  <%= f.label :price %>
  <%= f.text_field :price %>
  <%= f.submit %>
<% end %>
```
**Note**
The form_for includes `@drink`. We must therefore pass this instance variable from the controller actions


In `app/controllers/drinks_controller.rb` include the following:

```
  # GET '/drinks/new'
  def new
    @drink = Drink.new
  end

  # GET '/drinks/:id/edit'
  def edit
    @drink = Drink.find(params[:id])
  end
```

Once the new form is submitted a POST request is made to '/drinks'. Therefore, we must also include a create action.


```
  def create
    @drink = Drink.create(user_params)
  end
```

Due to the mass assignment check with rails we must use strong params. Strong params indicates to rails what we are allowing to be used to create our object.


Below your actions include the following

```

  private
    def drink_params
      params.require(:drink).permit(:name, :price)
      #Note that the only things we permit from params are the attributes we would like to include
    end
```
*****

### TODO:

* Finish building out this application. The update, index, show actions are incomplete but following the same patterns we have been working on before.
