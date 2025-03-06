# Sowjanya Portfolio - Data Engineer

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases the professional experience, projects, skills, and education of a data engineer.

## Features

- Responsive design that works on all devices
- Smooth scroll animations
- Interactive UI elements
- Floating bubble background effects
- Contact form with validation
- Loading animations
- Semi-transparent section backgrounds

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Intersection Observer API
- React Hooks
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
```
git clone https://github.com/yourusername/sowjanya-portfolio.git
cd sowjanya-portfolio
```

2. Install dependencies:
```
npm install
# or
yarn install
```

3. Start the development server:
```
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173` to see the portfolio.

## Post-Clone Setup

After cloning the repository, follow these steps to customize the portfolio for your own use:

1. **Update personal information**:
   - Edit `src/components/Hero.tsx` to change the name, title, and introduction
   - Modify `src/components/About.tsx` to update the bio and personal details
   - Update `src/components/Experience.tsx` with your work history and education
   - Change `src/components/Projects.tsx` to showcase your own projects
   - Update `src/components/Skills.tsx` with your technical and soft skills
   - Edit `src/components/Contact.tsx` with your contact information

2. **Replace placeholder images**:
   - Replace the placeholder images with your own photos
   - For profile picture, replace the placeholder in `src/components/Hero.tsx` and `src/components/About.tsx`
   - For project images, update the image paths in `src/components/Projects.tsx`

3. **Customize colors and styling**:
   - The main color scheme can be adjusted in `tailwind.config.js`
   - To change the primary color, modify the primary, secondary, and accent color values
   - Background colors and transparency can be adjusted in each component file

4. **Configure the contact form**:
   - The current form is set up for demonstration purposes
   - To make it functional, you'll need to connect it to a backend service or email API
   - Update the form submission logic in `src/components/Contact.tsx`

5. **Update metadata**:
   - Edit `index.html` to change the title, description, and favicon
   - Update social media links in `src/components/Contact.tsx` and `src/components/Footer.tsx`

6. **Test on different devices**:
   - Use the browser's developer tools to test responsiveness on different screen sizes
   - Test on actual mobile devices if possible

7. **Build and deploy**:
   - Once you're satisfied with your changes, build the project using `npm run build`
   - Deploy to your preferred hosting platform like Vercel, Netlify, or GitHub Pages

## Customization

### Animation Settings

The portfolio uses custom animations based on the Intersection Observer API. You can customize the animation settings in the `src/components/AnimateOnScroll.tsx` component:

- Change animation types by modifying the `animation` prop
- Adjust animation timing by changing the `delay` prop
- Modify the animation threshold by updating the `threshold` prop

### Color Scheme

The color scheme is defined in the `tailwind.config.js` file. The main colors are:

- Primary: #ff7eb3 (Pink)
- Secondary: #7ec1ff (Blue)
- Accent: #b57eff (Purple)

You can change these colors to match your personal brand.

### Floating Bubbles

The floating bubble effect can be customized in the `src/components/FloatingBubbles.tsx` file:

- Add or remove bubbles by modifying the div elements
- Change bubble sizes, colors, and animation speeds
- Adjust bubble positions to create different visual effects
