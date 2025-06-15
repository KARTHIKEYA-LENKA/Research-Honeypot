ResearchHoneypot-Based Intrusion Detection using Suricata, Python, and MySQL
This is a research mini project designed to monitor and analyze web-based intrusions using a honeypot environment. The aim is to study attack patterns, collect threat intelligence, and detect anomalies using AI/ML methods.

🔥 Key Features
🎭 Fake Banking Website using Apache & Next.js

🛡️ Traffic Monitoring using Suricata

🐍 Real-Time Log Parsing using Python

🧠 Anomaly Detection using Isolation Forest

🗃️ Data Storage in MySQL for later analysis

🧪 WordPress Decoy Pages used in earlier testing (not part of final project)

🛠️ Technologies Used
Tool/Tech	Purpose
Python	Log reading, DB insert, ML analysis
Suricata	Network IDS
MySQL	Storing intrusion logs
Next.js	Frontend simulation (banking site)
Apache Server	Static hosting
Kali Linux (VM)	Environment setup & scripting
AWS EC2	Live deployment

📋 Prerequisites
Node.js & npm (for Next.js frontend)

MySQL installed and running

Python 3.x and pip

Suricata IDS installed

Apache2 (for static hosting)

AWS EC2 instance (for public simulation)

🧩 Installation
Clone the Repository

bash
Copy
Edit
git clone https://github.com/yourusername/honeypot_project.git
cd honeypot_project
Set up Python Environment

bash
Copy
Edit
cd scripts
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
Set up MySQL Database

sql
Copy
Edit
CREATE DATABASE suricata_logs;
USE suricata_logs;
CREATE TABLE logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    timestamp DATETIME,
    event_type VARCHAR(255),
    stats JSON
);
Start Required Services

Apache or Next.js frontend

Suricata IDS

Python log reader script

🗂️ Project Structure
bash
Copy
Edit
honeypot_project/
├── apache-site/           # index.html, app.js, style.css
├── nextjs-app/            # Frontend (React + Tailwind)
├── scripts/               # suricata_log_reader.py, AI models
├── screenshots/           # All result and UI screenshots
├── eve.json               # Suricata full logs
├── fast.log               # Suricata fast alerts
├── stats.log              # Custom log outputs
├── old_ip_references.txt  # EC2 IP records
└── README.md              # Project documentation
⚙️ How It Works
This honeypot simulates a fake banking portal and tracks malicious user behavior for research.

🔁 Website Logic
👤 Normal users & attackers are redirected to a fake banking login page.

🔐 Only the admin (via private route) can access the real site/dashboard.

🎯 All login attempts are silently recorded.

🗄️ Login Logging (MySQL)
Every login attempt on the fake website is stored:

Email/Username

Password

IP Address

Timestamp

User-Agent

📡 Suricata Network Monitoring
Detects known patterns: SQLi, XSS, Port Scans, etc.

Logs saved in /var/log/suricata/eve.json

Python script reads and stores them in MySQL for future analysis

🧠 AI-Powered Intrusion Detection
Isolation Forest identifies anomalies in user behavior

Flags unusual:

IPs

Access frequency

Unexpected event combinations

Helps uncover stealthy or zero-day attacks

All detections stored for evaluation (screenshots provided)

🐍 Log Reader Script
✅ File path: scripts/suricata_log_reader.py

This script:

Reads Suricata’s JSON logs

Parses timestamp, event type, and payload

Formats it for MySQL and inserts into DB

Can be extended to run as a background daemon

🚀 How to Run the Project
⚠️ This project is for simulation or research purposes only.

1. Start Apache or Next.js
bash
Copy
Edit
sudo service apache2 start
# OR
cd nextjs-app
npm install
npm run dev
2. Start Suricata
bash
Copy
Edit
sudo suricata -c /etc/suricata/suricata.yaml -i eth0
3. Run Python Log Reader
bash
Copy
Edit
cd scripts/
python3 suricata_log_reader.py
4. View Logs in MySQL
sql
Copy
Edit
USE suricata_logs;
SELECT * FROM logs;
🔍 Anomaly Detection (ML)
We used Isolation Forest to identify:

🚨 Suspicious IP behavior

🚨 Rare event_type sequences

🚨 Bot-like access patterns

🧪 The ML detection is experimental and will improve with more data.

🖼️ Screenshots
Fake Website View	Fake Signup/signin For Genralpeople/Attackers

Suricata Log Alerts	Original Website Covered By Fake Banking Page

Login Attempts in MySQL	Live Attack Simulation View


🚧 Future Enhancements
 Real-time dashboard for live attack viewing

 SMS/Email alerts for high-severity events

 Auto-blacklisting based on AI confidence

 Use deeper ML models for attack classification

📄 License
Licensed under the MIT License — see the LICENSE file for details.

🙋‍♂️ Author
Name: Lenka Karthikeya


LinkedIn: linkedin.com/in/lenka-karthikeya


Trailhead: https://www.salesforce.com/trailblazer/eabsk3msp2zdtqju0h
📢 Note
This is a research-only honeypot. It does not actively prevent attacks but is designed to log, learn, and detect malicious behaviors for educational and research purposes.

