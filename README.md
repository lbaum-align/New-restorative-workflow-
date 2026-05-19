# Dental Scanning App - iTero Restorative Workflow

A React + Vite dental scanning prototype application for the iTero restorative workflow. This app enables digital dental scanning with multi-layer scan capture, flexible treatment planning, and interactive 3D guidance systems for proper scanning technique.

## 🦷 Features

- **Interactive 3D Guidance**: Real-time scanning guidance with coverage tracking and directional hints
- **Multi-Layer Scan Capture**: Support for treatment, bite, and pre-treatment scans
- **Prep Analysis Copilot**: AI-powered preparation analysis with heatmaps and reduction detection
- **Treatment Planning**: Flexible tooth selection and specification management
- **3D Model Rendering**: Three.js-powered visualization of dental models (.ply, .glb, .gltf, .stl)
- **Responsive Design**: Modern UI with Tailwind CSS and Radix UI components

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment

This app is configured for easy deployment on **Netlify** with:
- Automatic build detection via `netlify.toml`
- SPA routing support
- Optimized caching for 3D models
- Environment variable support

See `DEPLOYMENT.md` for detailed deployment instructions.

## 🏗️ Technology Stack

- **Core**: React 18.3 + TypeScript 6.0 + Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.12 with custom design tokens
- **3D Graphics**: Three.js 0.170 + @react-three/fiber + @react-three/drei
- **UI Components**: Radix UI (comprehensive primitive library)
- **Forms**: React Hook Form 7.55
- **Motion**: Framer Motion
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── scan-guidance/   # 3D scanning guidance system
│   ├── prep-copilot/    # AI prep analysis features
│   └── ...
├── flow/                # Main workflow screens
├── design-system/       # Design tokens and system components
├── assets/              # Static assets and 3D models
└── imports/             # Figma-generated components
```

## 🎯 Key Components

- **Scan Guidance System**: Interactive 3D guidance with real-time feedback
- **Prep Copilot**: AI-powered preparation analysis and recommendations
- **Multi-Layer Scanning**: Advanced scan capture and review workflows
- **Treatment Planning**: Comprehensive tooth treatment specification

## 🔧 Configuration

- **Figma Assets**: Custom Vite plugin resolves `figma:asset/` imports
- **Design System**: Centralized design tokens in `src/design-system/tokens.ts`
- **3D Models**: Support for .ply, .stl, .glb, .gltf, .hdr files

## 📖 Documentation

- `DEPLOYMENT.md` - Comprehensive deployment guide
- `CLAUDE.md` - Development guidelines and architecture overview

## 🤝 Contributing

This project uses modern React patterns and TypeScript. Follow the existing code style and use the design system tokens for consistency.

## 📄 License

Private prototype application for iTero restorative workflow development.

---

*Originally generated from Figma design: [New Resto workflow](https://www.figma.com/design/1jwtPtdMrPCADSOOaRgEuD/New-Resto-workflow---Figma-make)*
