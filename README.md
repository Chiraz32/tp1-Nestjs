### Nest JS Lab Homework Repository

This repository showcases completed exercises focused on Node.js module and controller development.

#### Exercise 1: Premier Module

- Created `PremierModule` with `PremierController`.
- Implemented `GET`, `POST`, `DELETE`, `PUT`, and `PATCH` methods.
- Logged method calls and returned results effectively.

#### Exercise 2: Todo Module

- Developed `TodoModule` incorporating `TodoController`.
- Defined `TodoModel` with properties: `id`, `name`, `description`, `creation date`, and `status` (using enum: "Pending", "In Progress", "Completed").
- Implemented functionalities:
  - Retrieved all todos.
  - Added, retrieved by ID, deleted, and updated todos using DTOs for structured data handling.

#### Exercise 3: Todo Service

- Created `TodoService` to centralize and manage todo-related operations.
- Utilized `CommonModule` for essential utilities such as UUID generation to ensure unique identifiers for todos.
