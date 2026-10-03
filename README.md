# DefendIQ - AI-Powered Security Dashboard

DefendIQ is a next-generation, AI-enhanced Security Information & Event Management (SIEM) platform built with Next.js, Firebase, and cutting-edge web technologies. It provides a comprehensive suite of tools for real-time log analysis, threat detection, incident response, and security posture visualization.

The dashboard is designed to be dynamic and responsive, offering security analysts a single, intelligent view of their organization's security landscape.

**Version:** 2.0.0

## Key Features

- **Dynamic Dashboard**: Real-time, auto-updating widgets for threat level, active alerts, system status, and event breakdowns.
- **Live Log Viewer**: A live-streaming log interface that ingests and displays security events as they happen, complete with filtering and search capabilities.
- **Alert Management**: Configure and manage custom alert rules based on specific event conditions and severity.
- **Report Generation**: Create detailed security reports based on various parameters and analysis.
- **Threat Intelligence Analysis**: A utility to analyze suspicious log entries or data against known vulnerabilities.
- **User Authentication**: Secure user sign-up and login with Email/Password, Google, and GitHub providers.
- **Account Management**: Users can manage their profile, including changing their profile picture (with local file upload) and updating their password.
- **Interactive Terminal**: A command-line interface to quickly query system status and recent alerts.
- **Real-time Messaging**: A built-in chat feature for team collaboration.
- **Theming**: Supports both Dark and Light mode for user comfort.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Backend & Database**: [Firebase](https://firebase.google.com/) (Authentication, Firestore, Cloud Storage)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Charting**: [Recharts](https://recharts.org/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later recommended)
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-repo/defendiq.git
   cd defendiq
   ```

2. **Install NPM packages:**
   ```sh
   npm install
   ```

3. **Set up Firebase:**
   - Create a new project in the [Firebase Console](https://console.firebase.google.com/).
   - Add a new Web App to your project.
   - Copy the `firebaseConfig` object.
   - In the root of this project, create a new file named `.env.local`.
   - Add your Firebase configuration to `.env.local` (this step is handled by Firebase Studio automatically but is required for local development outside the platform). Your `src/firebase/config.ts` should already be populated.

4. **Run the development server:**
   ```sh
   npm run dev
   ```

   Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## License

This project is licensed under the MIT License. See the `LICENSE` section below for more information.

---

### MIT License

Copyright (c) 2024

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
