import mysql from "mysql2/promise";

const db = mysql.createPool({
    host: "localhost",
    user: "debian-sys-maint",  // Change from 'root' to 'debian-sys-maint'
    password: "sGG7LIdjdvNW0hhh",  // Use password from /etc/mysql/debian.cnf
    database: "banking_logs",
});

export async function logLoginAttempt(username: string, password: string, ip: string, userAgent: string) {
    try {
        const query = "INSERT INTO login_attempts (username, password, ip_address, user_agent) VALUES (?, ?, ?, ?)";
        await db.execute(query, [username, password, ip, userAgent]);
        console.log("Login attempt recorded.");
    } catch (error) {
        console.error("Database error:", error);
    }
}
