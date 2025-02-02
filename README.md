# FAQ Management System Frontend

A React-based FAQ management system that supports multiple languages and provides an admin interface for managing FAQs.

## Features

- 📝 Create and manage FAQs
- 🌐 Multi-language support
- 📱 Responsive design
- 🖊️ Rich text editor for FAQ answers
- ⚡ Built with React and Vite
- 🚀 Docker support

## Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)
- Docker and Docker Compose (optional, for containerized setup)

## Local Setup

### Installation

1. Clone the repository
```bash
git clone https://github.com/Yugalsaini123/Frontend.git
cd faq-frontend
```

2. Install dependencies
```bash
npm install
```

3. Create environment file
```bash
cp .env.example .env
```

4. Update the `.env` file with your API URL
```
VITE_API_URL=http://localhost:5000/api
```

### Running Locally

1. Start development server
```bash
npm run dev
```

2. Build for production
```bash
npm run build
```

3. Preview production build
```bash
npm run preview
```

## Docker Setup

### Using Docker Compose (Recommended)

1. Build and start the container
```bash
docker compose up --build
```

2. Access the application at `http://localhost:3000`

3. Stop the container
```bash
docker compose down
```

### Manual Docker Commands

1. Build the Docker image
```bash
docker build -t faq-frontend .
```

2. Run the container
```bash
docker run -p 3000:3000 -d faq-frontend
```


## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| VITE_API_URL | Backend API URL | http://localhost:5000/api |

## Supported Languages

- English (en)
- Hindi (hi)
- Bengali (bn)
- Spanish (es)
- French (fr)
- German (de)
- Japanese (ja)
- Arabic (ar)
- Portuguese (pt)
- Russian (ru)
- Chinese (zh)

## Development

### Adding New Features

1. Create a new branch
```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit
```bash
git add .
git commit -m "Add your feature description"
```

3. Push changes and create a pull request
```bash
git push origin feature/your-feature-name
```

### Code Style

- Follow the ESLint configuration
- Use functional components with hooks
- Follow React best practices
- Write meaningful commit messages

## Production Deployment

### Build for Production

```bash
# Local build
npm run build

# Docker build
docker compose -f docker-compose.prod.yml up --build
```

### Deployment Considerations

1. Set appropriate environment variables
2. Enable HTTPS
3. Configure CORS properly
4. Set up monitoring and logging
5. Configure proper caching headers

## Troubleshooting

### Common Issues

1. **API Connection Failed**
   - Check if the API server is running
   - Verify VITE_API_URL in .env
   - Check CORS configuration

2. **Build Failed**
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules: `rm -rf node_modules`
   - Reinstall dependencies: `npm install`

3. **Docker Issues**
   - Check Docker logs: `docker compose logs`
   - Verify port mapping
   - Ensure Docker daemon is running

### Getting Help

- Check existing issues on the repository
- Create a new issue with:
  - Description of the problem
  - Steps to reproduce
  - Expected vs actual behavior
  - Environment details


## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request