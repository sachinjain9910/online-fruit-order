****** ONLINE FRUIT ORDERING SYSTEM ******

A microservices-based online fruit ordering system built using Node.js, Express, Docker, and GitHub Actions CI/CD.
The project demonstrates backend architecture concepts such as service isolation, event-driven communication, containerization, testing, and CI/CD pipelines.

****** PROJECT OVERVIEW ******

The system allows users to:

View products
Add items to cart
Apply pricing offers
Place orders
Pay using wallet
Receive notifications via events
Each responsibility is handled by an independent microservice.

****** MICROSERVICES ******

User Service – User registration & referral handling
Product Service – Product catalog & sorting
Cart Service – Cart management & pricing rules
Order Service – Order checkout & event publishing
Wallet Service – Wallet balance & referral credits
Notification Service – Event-based notifications

Each service:

Runs independently
Has its own APIs and Dockerfile
Can be scaled independently

****** EVENT-DRIVEN COMMUNICATION ******

Services communicate using a lightweight event bus abstraction.

Current implementation:

In-memory publish/subscribe
Console-based event logging
Designed for future Kafka / SNS / RabbitMQ integration

****** TECH STACK ******

Backend: Node.js, Express.js
Testing: Jest
Code Quality: ESLint
Containerization: Docker, Docker Compose
CI/CD: GitHub Actions, GitHub Container Registry

****** DOCKER SETUP ******

Each service has its own Dockerfile
All services are orchestrated using Docker Compose
Services communicate using Docker service names
Start all services: docker compose up --build

****** TESTING ******

Unit tests using Jest
External service calls are mocked
Covers: Pricing logic
        Wallet deduction
        Event publishing

Run tests: npm test

****** CI/CD PIPELINE (GitHub Actions) ******

The project uses GitHub Actions for CI and a mock CD pipeline.

Pipeline Stages

Test – Run Jest unit tests
Static Analysis – ESLint checks
Security Scan – npm audit
Docker Build – Build images for all services
Mock Deployment – Simulated AWS deployment (no AWS account required)
Pipeline triggers on:
Push to main
Pull requests to main

****** DEPLOYMENT NOTE ******

This project includes a mock deployment stage to demonstrate CD flow.
No real AWS resources are required.