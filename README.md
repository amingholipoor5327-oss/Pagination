# Next.js Pagination Project

## Overview

This project demonstrates how to implement server-side pagination in Next.js using the App Router.

Data is fetched from an external API and displayed in a paginated list. Users can navigate between pages using Next and Prev buttons.

## Features

* Next.js App Router
* Server Components
* Data Fetching with Fetch API
* Dynamic Pagination
* Query Parameters (`?page=1`)
* Responsive UI
* Navigation with Next.js Link

## Technologies Used

* Next.js
* React
* JavaScript
* CSS

## Project Structure

```bash
src/
├── app/
│   ├── page.js
│   ├── pageination/
│   │   ├── page.js
│   │   └── pageination.css
```

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/nextjs-pagination-project.git
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## How Pagination Works

* Data is fetched from an API.
* Items are divided into pages.
* The current page is read from the URL query parameter.
* Only a subset of items is displayed per page.
* Users can navigate using Previous and Next buttons.

## Learning Goals

This project was built to practice:

* Server Components
* Data Fetching
* Pagination Logic
* Query Parameters
* Next.js Routing
* UI Styling

## Author

Developed as a learning project using Next.js and React.
