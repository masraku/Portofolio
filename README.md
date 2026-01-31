# Raku's Portfolio

A modern, animated personal portfolio built with Next.js, featuring a dark theme with purple/cyan gradients and glassmorphism design.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer)

## ✨ Features

- **Modern Dark Theme** - Premium purple/cyan gradient aesthetics
- **Smooth Animations** - Powered by Framer Motion
- **Responsive Design** - Mobile-first approach
- **Project Showcases** - Interactive project cards with live demos
- **Contact Form** - Direct email integration
- **Demo Projects** - Live clones of real-world applications

## 🚀 Tech Stack

| Technology    | Purpose                         |
| ------------- | ------------------------------- |
| Next.js 16    | React framework with App Router |
| React 19      | UI library                      |
| Tailwind CSS  | Styling                         |
| Framer Motion | Animations                      |
| Prisma        | Database ORM                    |
| PostgreSQL    | Database                        |
| Lucide React  | Icons                           |
| React Icons   | Brand logos                     |

## 📁 Project Structure

```
├── app/
│   ├── page.jsx          # Home page
│   ├── about/            # About & Education
│   ├── contact/          # Contact form
│   ├── experience/       # Work experience
│   ├── projects/         # All projects
│   └── demo/             # Demo projects
│       ├── jobs/         # Job portal demo
│       └── complaints/   # Complaint system demo
├── components/
│   ├── Hero.jsx          # Hero section
│   ├── Navbar.jsx        # Navigation
│   ├── ProjectCard.jsx   # Project cards
│   └── ui/               # Reusable UI components
├── data/
│   └── projects.js       # Projects data
├── lib/
│   └── utils.js          # Utilities
└── public/
    └── assets/           # Images & media
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL (for demo features)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Navigate to directory
cd portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your database URL

# Generate Prisma client
npx prisma generate

# Run database migrations (optional, for demos)
npx prisma migrate dev

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 🌐 Environment Variables

```env
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio"
```

## 📄 Pages

| Route              | Description                      |
| ------------------ | -------------------------------- |
| `/`                | Home with hero & services        |
| `/about`           | About me, education & tech stack |
| `/projects`        | All project showcases            |
| `/experience`      | Work experience timeline         |
| `/contact`         | Contact form (mailto)            |
| `/demo/jobs`       | Job portal demo                  |
| `/demo/complaints` | Complaint system demo            |

## 🎨 Design System

- **Primary Colors**: Purple (#A855F7) & Cyan (#22D3EE)
- **Background**: Dark (#030014)
- **Cards**: Glassmorphism with white/5 opacity
- **Animations**: Fade-in, slide-up, hover scales

## 📧 Contact

- **Email**: masraku@masraku.dev
- **Portfolio**: https://masraku.dev/

## 📝 License

MIT License - feel free to use this as a template for your own portfolio!

---

Built with ❤️ by Raku
