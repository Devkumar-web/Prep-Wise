# PrepWise: Ace Your Interviews with AI-Powered Practice

[![Deployed on Vercel](https://vercel.com/button)](https://prep-wise-lovat.vercel.app)

**Prepare for your dream job with PrepWise, the intelligent AI-powered interview practice platform. Get realistic interview simulations and insightful feedback to boost your confidence and technical skills.**

## ✨ Key Features

* **Realistic AI Voice Interviews:** Experience interviews that feel just like the real thing, thanks to the seamless integration of **Vapi's advanced AI voice technology**.
* **Customizable Interview Generation:** Tailor your practice sessions by providing prompts to **Gemini AI**, focusing on specific roles, companies, or technical domains.
* **Comprehensive Feedback:** Receive detailed feedback on your performance, including assessments of your **confidence levels and technical proficiency**, powered by AI analysis.
* **Secure Authentication:** User authentication managed securely with **Firebase Auth**.
* **Organized Data Storage:** Interview data and user information stored efficiently using **Firebase Firestore**.
* **Modern Web Interface:** Built with **Next.js**, **TypeScript**, and **Tailwind CSS** for a fast, responsive, and intuitive user experience.
* **Accessible Anywhere:** Practice anytime, anywhere with the deployed application on **Vercel**: [prep-wise-lovat.vercel.app](https://prep-wise-lovat.vercel.app)

## 🚀 Technologies Used

* **AI Voice & Workflow:** [Vapi](https://vapi.ai/)
* **AI-Powered Interview Generation:** [Google Gemini](https://ai.google.dev/)
* **<i class="devicon-nextjs-line"></i> Frontend Framework:** [Next.js](https://nextjs.org/)
* **Type Safety:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Authentication & Database:** [Firebase](https://firebase.google.com/)

## ⚙️ Getting Started

While the application is live, here's a glimpse into how a developer might set up a local development environment (if you plan to open-source or collaborate):

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Devkumar-web/Prep-Wise
    cd prep-wise
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up Firebase:**
    * Create a new project on the [Firebase Console](https://console.firebase.google.com/).
    * Enable Authentication (Email/Password) and Firestore.
    * Obtain your Firebase configuration object and replace the placeholder in your `firebase.config.js` or `.env` file.

4.  **Set up Vapi and Gemini AI:**
    * Obtain API keys for Vapi and Google Gemini.
    * Store these keys securely as environment variables (e.g., `.env` file).

5.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

    Open your browser and navigate to `http://localhost:3000`.

## 💡 How It Works

1.  **User Authentication:** Users can securely sign up and log in using Firebase Authentication.
2.  **Interview Configuration:** Users provide prompts or select from pre-defined interview scenarios. This prompt is sent to Gemini AI.
3.  **AI Interview Generation:** Gemini AI generates interview questions based on the provided prompt.
4.  **Voice-Based Interaction:** Vapi's AI voice agent asks the generated questions to the user. The user responds verbally.
5.  **Response Analysis:** The user's voice responses are processed (potentially transcribed and analyzed).
6.  **Feedback Generation:** Based on the interview performance, the AI analyzes confidence levels, technical skills (based on keywords and content), and potentially other relevant metrics. This analysis is then presented as feedback to the user.
7.  **Data Storage:** Interview questions, user responses (potentially transcribed), and feedback are stored in Firebase Firestore.

## 💪 Future Enhancements

* **More Granular Feedback:** Provide more specific feedback on areas like communication skills, problem-solving approaches, and domain knowledge.
* **Behavioral Questions:** Incorporate and analyze responses to behavioral interview questions.
* **Customizable Feedback Parameters:** Allow users to specify the areas they want feedback on.
* **Integration with Calendar and Scheduling:** Enable users to schedule practice interviews.
* **Performance Tracking and History:** Allow users to track their progress over multiple practice sessions.
* **Role-Specific Interview Templates:** Offer curated interview templates for various job roles.
* **Multi-language Support:** Expand the platform to support interviews in different languages.

## 🙏 Contributions

(If you plan to open-source)

Contributions are welcome! If you have ideas for improvement or find any issues, please feel free to open a pull request or submit an issue on GitHub.

## 📄 License

(Add your license information here, e.g., MIT License)

---

**Ready to level up your interview skills? Try PrepWise today!** [prep-wise-lovat.vercel.app](https://prep-wise-lovat.vercel.app)