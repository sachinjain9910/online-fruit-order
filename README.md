****** ONLINE FRUIT ORDERING SYSTEM ******

This project is a microservices-based online fruit ordering system built using Node.js, Express, Docker, and GitLab CI/CD.
It demonstrates real-world backend architecture concepts including service separation, event-driven communication, containerization, testing, and CI/CD pipelines.

****** PROJECT OVERVIEW ******

The system allows users to:

View available products
Add products to cart
Apply pricing offers
Place orders
Deduct wallet balance
Send notifications via events
Each responsibility is handled by an independent microservice.

****** MICROSERVICES ARCHITECTURE ******

The project consists of the following services:

User Service
Product Service
Cart Service
Order Service
Wallet Service
Notification Service

Each service:

Runs independently
Has its own APIs
Has its own Dockerfile
Can be scaled independently

****** SERVICE DETAILS ******

USER SERVICE :

Purpose: Manage user registration
Key Features: Emits UserRegistered event
              Supports referral codes

PRODUCT SERVICE :

Purpose: Provide product catalog
APIs: GET /products

Supports sorting by price or rating
Supports ascending and descending order

CART SERVICE :

Purpose: Manage shopping cart
         Calculate total price

APIs:
POST /cart/add
GET /cart/:userId
POST /cart/checkout

Pricing Rules:

Apple: Buy 1 Get 1 Free
Orange: Buy 2 Get 3 Offer
Supports mixed fruit calculations

ORDER SERVICE :

Purpose: Handle order checkout

Flow:
Fetch cart details
Deduct wallet balance (if payment is WALLET)
Publish OrderPlaced event

APIs: POST /orders/checkout

WALLET SERVICE :

Purpose: Manage wallet balance

Features: Deduct wallet balance
          Credit wallet on referral
          Listens to UserRegistered events

NOTIFICATION SERVICE :

Purpose: Send notifications

Features: Subscribes to events like OrderPlaced
          Logs notifications (email/SMS simulation)

****** EVENT-DRIVEN COMMUNICATION ******

The services communicate using a lightweight event bus abstraction.

Current implementation:

In-memory publish/subscribe
Console-based event logging

****** TECH STACK ******

Backend: Node.js, Express.js
Testing: Jest
Code Quality: ESLint
Containerization: Docker, Docker Compose
CI/CD: GitLab CI/CD, GitLab Container Registry


****** DOCKER SETUP ******

Each service has its own Dockerfile
All services are orchestrated using docker-compose
Services communicate using Docker service names

To start all services:
docker compose up --build

****** TESTING ******

Unit tests written using Jest
Each service has isolated tests
Mocking used for external service calls

Tests cover:

Pricing logic
Wallet deduction
Event publishing

To run tests: npm test

****** CI/CD PIPELINE ******

The project includes a full CI pipeline and a mock CD pipeline using GitLab CI.

Pipeline stages:

Test
Runs Jest unit tests
Static Code Analysis
Runs ESLint for code quality checks
Security Scan
Runs npm audit for dependency vulnerabilities
Docker Build & Push
Builds Docker image
Pushes image to GitLab Container Registry
Mock Deployment
Simulates deployment to AWS (no AWS account required)