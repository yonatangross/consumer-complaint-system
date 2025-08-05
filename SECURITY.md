# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please follow these steps:

1. **Do NOT** create a public GitHub issue
2. Email security concerns to: yonatan2gross@gmail.com
3. Include a detailed description of the vulnerability
4. Provide steps to reproduce if applicable

We will:
- Acknowledge receipt within 48 hours
- Provide an initial assessment within 5 business days
- Work with you to understand and resolve the issue
- Credit you in our security acknowledgments (if desired)

## Security Best Practices

- Never commit `.env` files or API keys to version control
- Use environment variables for all sensitive configuration
- Regularly update dependencies to patch security vulnerabilities
- Run security scans in CI/CD pipeline
- Use HTTPS in production environments
- Implement proper authentication and authorization
