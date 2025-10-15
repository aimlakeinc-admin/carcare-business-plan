# 🚀 Local Preview Setup Guide (macOS)

# Step 1 — Install Node and npm
Go to 👉 https://nodejs.org
 Click the LTS (Recommended for Most Users) green button.
 Download the macOS Installer (.pkg) file.
 Double-click it → Continue → Install → Finish (keep defaults).


# Step 2 — Verify installation
Open a new Terminal window and run:
 node -v
 npm -v
 brew -v


# Step 3 — Go to your project folder
 Example (if your project is on Desktop):
 cd ~/Desktop/CarCareProject


# Step 4 — Install dependencies
   Inside the project folder, run:
   npm install


# Step 5 — Start the Vite dev server 
   After install finishes, run:
   npm run dev
     You should see something like:
       VITE v5.x.x  ready in 300 ms
       ➜  Local:   http://localhost:5173/


🎉 **Your app is now running locally!**  
Any time you edit and save, Vite automatically reloads the browser with your changes.


