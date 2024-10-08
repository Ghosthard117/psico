# Psicomente Landing Page

The project is a web application designed to showcase various features and functionalities. It includes a smooth scroll feature for enhanced user experience and provides detailed instructions on how to clone the repository and run the application locally. The application aims to demonstrate best practices in web development and serve as a learning resource for developers.

## Tech Stack

- React
- Typescript
- Prismic CMS
- GSAP
- Tailwind CSS
- Lenis
- Clsx
- Million JS
- Next JS

## Screenshots

![Landing Page](image.png)

## Project Structure

- **src/**: Contains the source code for the project.
- **.next/**: Contains build files generated by Next.js.
- **prismicio-types.d.ts**: TypeScript definitions for Prismic content types.
- **package.json**: Lists project dependencies and scripts.

## Slices and Components

### About Slice

- **Location**: src/slices/About
- **Description**: Contains information about the team.
- **Primary Fields**:
  - **Heading**: Title field for the About section.

### Hero Slice

- **Location**: src/slices/Hero
- **Description**: Represents the hero section of the website.
- **Dependencies**:
  - @gsap/react: Used for animations.
  - @prismicio/client: Used for fetching content from Prismic.

### Services Slice

- **Location**: src/slices/Services
- **Description**: Displays services offered.
- **Dependencies**:
  - @gsap/react: Used for animations.
  - @prismicio/client: Used for fetching content from Prismic.

### Team Slice

- **Location**: src/slices/Team
- **Description**: Displays team members.
- **Dependencies**:
  - @gsap/react: Used for animations.
  - @prismicio/client: Used for fetching content from Prismic.

### Location Slice

- **Location**: src/slices/Location
- **Description**: Provides location information.
- **Dependencies**:
  - @gsap/react: Used for animations.
  - @prismicio/client: Used for fetching content from Prismic.

## Getting Started

To run the project locally, follow these steps:

- Clone the repository to your local machine.
- Install dependencies using `npm install`.
- Start the development server with `npm run dev`.
- Open your browser and navigate to `http://localhost:3000` to view the project.

## Authors

- [@Miguel Alvarez](https://www.github.com/ghosthard117)

## Deploy on Vercel

- [Link Here](https://)
