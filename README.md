# 📈 Stock Screener

A full-stack web-based **Stock Screener and Portfolio Management System** designed to help users search, filter, explore, and organize stock market information through a simple and user-friendly interface.

The application provides users with a centralized platform to explore companies, analyze financial information, screen stocks using selected parameters, maintain a personal watchlist, manage portfolio information, and visualize stock-related data.

---

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Problem Statement](#-problem-statement)
- [Objectives](#-objectives)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Database Design](#-database-design)
- [Project Structure](#-project-structure)
- [Application Workflow](#-application-workflow)
- [Installation and Setup](#-installation-and-setup)
- [How to Run](#-how-to-run)
- [Use Cases](#-use-cases)
- [Key Benefits](#-key-benefits)
- [Future Enhancements](#-future-enhancements)
- [Project Status](#-project-status)
- [Learning Outcomes](#-learning-outcomes)
- [Conclusion](#-conclusion)
- [Developer](#-developer)
- [Disclaimer](#-disclaimer)

---

## 📖 About the Project

Stock Screener is a web application developed to simplify the process of exploring and analyzing stock market information.

Stock investors and learners often need to look at multiple sources to compare companies, check financial metrics, and monitor selected stocks. This project aims to bring these activities together into a single platform.

The system allows users to search and filter stocks, view company and financial information, maintain a watchlist, manage portfolio information, and visualize stock-related data through charts.

The application follows a full-stack architecture using **HTML, CSS, JavaScript, Python Flask, MySQL, and Chart.js**.

---

## ❗ Problem Statement

Analyzing stocks manually can require users to visit multiple platforms and compare large amounts of information.

Some common challenges include:

- Difficulty in finding relevant stocks quickly
- Need to check information from multiple sources
- Difficulty comparing financial parameters
- Lack of a personalized stock tracking system
- Managing watchlists and portfolio information separately
- Understanding financial information through raw data

The Stock Screener aims to provide a centralized and easy-to-use platform that addresses these challenges.

---

## 🎯 Objectives

The main objectives of the project are:

- To create a centralized stock screening platform.
- To allow users to search and filter stocks easily.
- To display company and financial information in an organized manner.
- To provide personalized watchlist functionality.
- To provide portfolio management functionality.
- To visualize stock-related information using charts.
- To create a structured database for stock and financial data.
- To provide a simple and user-friendly interface.
- To provide a foundation for future AI and real-time market features.

---

# 🚀 Features

## 🔐 1. User Authentication

The application provides user authentication functionality.

Users can:

- Create an account
- Log in to the application
- Access personalized features
- Manage their stock-related information

---

## 📊 2. Dashboard

The dashboard acts as the central area of the application.

It provides access to:

- Stock information
- Company information
- Financial metrics
- Stock performance
- Watchlist
- Portfolio
- Other application features

---

## 🔎 3. Stock Screener

The Stock Screener is the core feature of the application.

Users can:

- Search for companies
- Search using stock symbols
- Apply financial filters
- Find stocks matching selected criteria
- View relevant stock information
- Compare available financial metrics

The screener helps reduce the time required to manually search through large amounts of stock information.

---

## 🏢 4. Company Information

The system provides information about companies such as:

- Company name
- Stock symbol
- Sector
- Industry
- Company description
- Related stock information

---

## 💰 5. Financial Information

Users can explore important financial metrics such as:

- Revenue
- Profit
- Earnings Per Share (EPS)
- Price-to-Earnings (P/E) ratio
- Market capitalization
- Other available financial indicators

These metrics help users understand the financial profile of a company.

---

## ⭐ 6. Watchlist

Users can create a personalized watchlist to keep track of selected stocks.

Features include:

- Add stocks to watchlist
- View saved stocks
- Remove stocks from watchlist
- Quickly access selected stocks

---

## 💼 7. Portfolio Management

The portfolio module allows users to maintain information about selected investments.

Users can:

- Add stocks to their portfolio
- View portfolio holdings
- Store quantity and purchase information
- Manage selected investments

---

## 📈 8. Data Visualization

The application uses charts and graphical representations to make stock-related information easier to understand.

Chart.js can be used to display:

- Stock performance
- Financial trends
- Comparative information
- Other numerical data

---

## 🔔 9. Alerts

The system can provide stock-related alerts for selected stocks.

Users can configure alerts based on supported stock conditions and monitor important changes.

---

# 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Web page structure |
| **CSS3** | Styling and user interface |
| **JavaScript** | Frontend interactions and dynamic functionality |
| **Python** | Backend development and data processing |
| **Flask** | Web application framework |
| **MySQL** | Relational database management |
| **Chart.js** | Charts and data visualization |
| **Git** | Version control |
| **GitHub** | Source code management |
| **Visual Studio Code** | Development environment |

---

# 🏗️ System Architecture

The application follows a basic full-stack architecture:

```text
                         ┌─────────────────┐
                         │      USER       │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │    FRONTEND     │
                         │ HTML / CSS / JS │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │  FLASK BACKEND  │
                         │     PYTHON      │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │     MYSQL       │
                         │    DATABASE     │
                         └────────┬────────┘
                                  │
          ┌───────────────────────┼───────────────────────┐
          │                       │                       │
          ▼                       ▼                       ▼
    ┌───────────┐          ┌────────────┐          ┌───────────┐
    │ Companies │          │ Financials │          │  Stocks   │
    └───────────┘          └────────────┘          └───────────┘
          │                       │                       │
          └───────────────────────┼───────────────────────┘
                                  │
                    ┌─────────────┼─────────────┐
                    ▼             ▼             ▼
                ┌────────┐   ┌──────────┐   ┌──────────┐
                │ Users  │   │ Watchlist│   │ Portfolio│
                └────────┘   └──────────┘   └──────────┘
