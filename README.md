# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Tailwind CSS

This project now includes Tailwind CSS configured for Vite.

Quick notes to use Tailwind locally:

- The Tailwind directives are in `src/index.css`:

	```css
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	```

- The Tailwind config file is `tailwind.config.cjs`. It already includes the `content` paths for `index.html` and `src/`.

- To run the dev server:

	```powershell
	npm install
	npm run dev
	```

- If you need to update Tailwind or adjust purge/safelist rules, edit `tailwind.config.cjs`.

Example usage (add in any component):

```jsx
<div className="p-6 bg-blue-600 text-white rounded">Un ejemplo con Tailwind</div>
```
