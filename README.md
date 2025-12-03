# MB Dev Academy Platform

## Overview

This repository contains the source code for an educational platform interface ("MB Dev Academy"). The project demonstrates modern web development practices, focusing on component-based architecture, strict typing, and cloud backend integration.

**Live Deployment:** [https://edu-app-tsu.vercel.app](https://edu-app-tsu.vercel.app)

---

## Architectural Status: Hybrid

This application operates on a **hybrid architecture**:

1.  **Content Delivery:** Course data and instructor profiles are currently served via static local data structures to ensure instant rendering performance for demonstration purposes.
2.  **Data Persistence (Backend):** User registration and form submissions are integrated with a live **Supabase (PostgreSQL)** database.

**Note:** This is a production-ready demonstration. The application requires valid API credentials to function correctly.

---

## Technology Stack

The project utilizes a strictly typed, modern stack:

*   **Frontend Core:** React 18
*   **Language:** TypeScript
*   **Build System:** Vite
*   **Styling:** Tailwind CSS
*   **Backend / Database:** Supabase (PostgreSQL)
*   **Integration:** REST API via Supabase Client

## Key Features

*   **Fullstack Integration:** Functional registration forms connected to a cloud database.
*   **Responsive Architecture:** Adaptive layout for Mobile, Tablet, and Desktop environments.
*   **Type Safety:** Strict TypeScript configuration (`tsconfig.strict`) to minimize runtime errors.
*   **Security Markers:** Implemented digital watermarking and console signatures for authorship verification.
*   **Performance:** optimized lazy loading for heavy route components.

---

## Intellectual Property & License

**STRICT PROPRIETARY LICENSE**

**Copyright © 2025 Mariam Bukhaidze. All Rights Reserved.**

This source code is the intellectual property of the author. It is published for **portfolio demonstration purposes only**.

1.  **Prohibited:** Commercial use, modification, redistribution, or sublicensing of this software.
2.  **Prohibited:** Copying code snippets for use in personal portfolios without explicit attribution.
3.  **Allowed:** Viewing and studying the code for educational evaluation.

Any unauthorized reproduction of this work will be considered a violation of copyright law.

---

## Installation and Setup

Since this project connects to a private database, it requires environment variables to run locally.
