# The project is an **electronics e-commerce store** with a product catalog, shopping cart, favorites, and detailed product pages.

  - [DEMO LINK](https://kravets111.github.io/portfolio_phone_catalog/)
  - [Phone Catalog Rounded Blue](https://www.figma.com/design/FRxncC4lfyhs6og1L6FGEU/Phone-catalog--V2--Rounded-Style-2?node-id=0-1&t=k42EKFBQolhmMUGi-0)


## Frontend Frameworks & Libraries:

* **React 18** – the main framework for building the user interface
* **TypeScript** – for type safety
* **React Router DOM** – for routing (`HashRouter`, `Routes`, `Route`, `NavLink`, `Link`)

## Styling:

* **SCSS/Sass** – CSS preprocessor with:

  * Mixins for responsive design
  * Variables for color palette and sizing
  * Modular style architecture

## State Management:

* **React Context API** – for global state:

  * `FavoritesContext` – managing favorite products
  * `CartContext` – managing the shopping cart
  * `CarouselContext` – carousel state
* **React Hooks** – `useState`, `useEffect`, `useContext`, `useRef`, `useMemo`

## Utility Libraries:

* **classNames** – for conditional CSS class application

## Build & Development Tools:

* **Vite** – bundler and dev server (uses `import.meta.env`)

## Architectural Approaches:

* **Component-based architecture**
* **Custom Hooks** – for reusable logic
* **Context Providers** – for global state
* **TypeScript types** – for data typing

## Responsive Design:

* **Mobile-first approach** with breakpoints:

  * Tablet: 640px+
  * Laptop: 740px+
  * Desktop: 1200px+
  * Big Desktop: 1400px+

## API & Data:

* **Fetch API** – for HTTP requests
* **JSON** – data format
* **localStorage** – storing cart and favorite items state

## Getting start project:

* **Clone the repository:**
* git clone https://github.com/kravets111/portfolio_phone_catalog.git
* git cd portfolio_phone_catalog

* **Install dependencies:**
* npm install

* **Run the project locally:**
* npm start

