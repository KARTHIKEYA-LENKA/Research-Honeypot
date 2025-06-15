import json
import time
import mysql.connector
from datetime import datetime

# Path to your Suricata eve.json log file
log_file_path = "/var/log/suricata/eve.json"

# MySQL connection details
db_host = 'localhost'
db_user = 'root'
db_password = 'your_password'
db_name = 'suricata_logs'

# Connect to the MySQL database
def connect_to_db():
    return mysql.connector.connect(
        host=db_host,
        user=db_user,
        password=db_password,
        database=db_name
    )

# Function to convert the timestamp to a compatible format
def convert_to_mysql_datetime(timestamp):
    try:
        # Remove timezone information and convert to MySQL DATETIME format
        dt = datetime.strptime(timestamp, "%Y-%m-%dT%H:%M:%S.%f%z")
        return dt.strftime("%Y-%m-%d %H:%M:%S")
    except Exception as e:
        print(f"Error converting timestamp: {e}")
        return None

# Function to insert log data into MySQL
def insert_log_to_db(log_data):
    connection = connect_to_db()
    cursor = connection.cursor()

    # Prepare the SQL statement to insert the log data
    sql_query = "INSERT INTO logs (timestamp, event_type, stats) VALUES (%s, %s, %s)"
    timestamp = log_data.get('timestamp')
    event_type = log_data.get('event_type')
    stats = json.dumps(log_data.get('stats'))  # Convert stats to a JSON string for storage

    # Convert the timestamp to a MySQL-compatible format
    timestamp = convert_to_mysql_datetime(timestamp)

    if timestamp:
        # Execute the SQL query
        cursor.execute(sql_query, (timestamp, event_type, stats))
        connection.commit()

    cursor.close()
    connection.close()

# Function to read Suricata logs and insert them into MySQL
def read_suricata_logs():
    # Open the Suricata log file
    with open(log_file_path, 'r') as file:
        for line in file:
            try:
                log_data = json.loads(line)
                print(f"Log Data: {log_data}")
                
                # Insert the log data into MySQL database
                insert_log_to_db(log_data)
            except json.JSONDecodeError:
                pass  # Ignore lines that are not valid JSON

if __name__ == "__main__":
    while True:
        read_suricata_logs()
        time.sleep(1)  # Wait for new data to be written to the file
