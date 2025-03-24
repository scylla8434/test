# Angular User Dashboard

This is an Angular 19 application demonstrating:

- A user dashboard with data sourced from a local JSON file
- Searching and filtering of users
- Viewing user details in a modal
- A reactive form with validation
- A simple counter component (state management)
- Bootstrap and Font Awesome for styling and icons

## Prerequisites

- **Node.js** (>=14.x recommended)
- **Angular CLI** (>=14.x recommended) – install via `npm install -g @angular/cli`

## Installation

1. **Clone the Repository** (or download the ZIP):
   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```
2. **Navigate** into the project folder:
   ```bash
   cd your-repo
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```

## Running the Application

1. **Development Server**:
   ```bash
   ng serve
   ```
2. **Open Your Browser** at:
   ```
   http://localhost:4200
   ```

## Project Structure

- **`src/app`**  
  Contains all the Angular components (standalone components), services, and logic.
- **`src/assets/users.json`**  
  Local JSON file with mock user data.
- **`main.ts`**  
  The entry point that bootstraps the root component and sets up routes.
- **`index.html`**  
  Includes references to Bootstrap and Font Awesome for styling.

## Build for Production

To build the project for production, run:

```bash
ng build
```

The output files will be placed in the `dist/` folder. You can deploy this folder to any static hosting service.

## Additional Notes

- Ensure `assets/users.json` is present and properly referenced by the `UserService`.
- If you want to use a global import for `HttpClientModule`, add it via `importProvidersFrom(HttpClientModule)` in `main.ts`.
- Update the routes in `main.ts` if you change component paths.
