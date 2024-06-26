# Task 1
---

> [!abstract]
> Here's an enhanced and refined walkthrough for creating and configuring a new Db2 database named MUSICDB, complete with native encryption and sophisticated data management strategies. This guide provides a detailed sequence for setting up a keystore, configuring Db2 instance options, establishing storage groups, defining tablespaces, and utilizing Db2 commands and SQL queries for thorough review and verification.

---
### Detailed Guide for Setting Up MUSICDB in Db2

#### **Preparation and Environment Setup**

1. **System Login**:
   - **Action**: Log into your Linux system using the username `inst23` and password `ibm2blue`.
   - **Method**: Access the terminal by right-clicking on the Linux desktop and selecting "Open in Terminal."

2. **Environment Preparation**:
   - **Action**: Navigate to the `$HOME/ddl` directory to access essential Db2 commands and SQL scripts.
   - **Command**:
     ```bash
     cd $HOME/ddl
     ```

3. **Instance Verification**:
   - **Action**: Confirm that you are operating under the Db2 instance `inst23`.
   - **Command**:
     ```bash
     db2 get instance
     ```

#### **Keystore Creation and Encryption Setup**

4. **Keystore Initialization**:
   - **Action**: Generate a local keystore using IBM's Global Security Kit to facilitate native encryption.
   - **Commands**:
     ```bash
     cat create_keystore.cmd  # Review the keystore creation script.
     ./create_keystore.cmd    # Execute the script to create the keystore.
     ```

5. **Encryption Configuration**:
   - **Action**: Configure the database manager for encryption by specifying the keystore type and location.
   - **Commands**:
     ```bash
     db2 update dbm cfg using KEYSTORE_TYPE pkcs12 KEYSTORE_LOCATION $HOME/ddl/inst23keystore.p12
     db2stop force  # Forcefully stop the Db2 instance to apply changes.
     db2start       # Restart the instance to activate the new configuration.
     ```

#### **Database Creation and Configuration**

6. **Database Initialization**:
   - **Action**: Create the MUSICDB database with encryption enabled, specifying both the database and storage paths.
   - **Commands**:
     ```bash
     db2 create database musicdb on /dbauto/path1 dbpath on /database encrypt
     db2 connect to musicdb
     ```

#### **Storage Group and Tablespace Management**

7. **Storage Group Setup**:
   - **Action**: Create a new storage group to manage application storage efficiently.
   - **Command**:
     ```bash
     db2 "CREATE STOGROUP stogroup1 ON '/dbauto/path1'"
     ```

8. **Tablespace Configuration**:
   - **Action**: Establish tablespaces for user data and indexes, allocating them to the newly created storage group.
   - **Commands**:
     ```bash
     db2 "CREATE TABLESPACE userdata MANAGED BY AUTOMATIC STORAGE USING STOGROUP stogroup1 EXTENTSIZE 4"
     db2 "CREATE TABLESPACE indexdata MANAGED BY AUTOMATIC STORAGE USING STOGROUP stogroup1 EXTENTSIZE 4"
     ```

#### **Review and Verification**

9. **Database Configuration Review**:
   - **Action**: Utilize SQL queries and `db2pd` commands to inspect and verify database configurations and storage settings.
   - **Commands**:
     ```bash
     db2pd -d musicdb -tablespaces
     db2 "SELECT TBSP_NAME, TBSP_TYPE FROM SYSCAT.TABLESPACES"
     ```

#### **Additional Configuration and Management**

10. **DSM Service Activation**:
    - **Action**: Start the Data Server Manager service using root access.
    - **Commands**:
      ```bash
      su - root
      cd /root/ibmdsm/ibm-datasrvrmgr/bin
      ./start.sh
      exit
      ```

11. **Service Status and Log Review**:
    - **Action**: Verify that the DSM service is active and review the log for any potential issues.
    - **Output Log Review**:
      ```bash
      cat /root/ibmdsm/ibm-datasrvrmgr/logs/dsserver.0.log
      ```

12. **Database Connection Profile Setup in DSM**:
    - **Action**: Determine the service port for the inst23 instance and configure a connection profile in DSM.
    - **Command**:
      ```bash
      db2 get dbm cfg | grep SVCENAME
      ```

---

> [!summary]
> By meticulously following these steps, administrators will not only establish a robust and secure Db2 database but also ensure precise and efficient management of database configurations and data storage solutions.

---


# Task 2
---

> [!abstract]
> To configure a connection to the MUSICDB database in IBM Data Server Manager (DSM), follow this detailed step-by-step guide. This process will enable you to manage the MUSICDB database through DSM's graphical interface, making it easier to monitor, manage, and perform database operations.

---
### Step-by-Step Guide to Configure DSM Connection for MUSICDB

#### **Step 1: Access DSM via Web Browser**
1. **Open a Web Browser**:
   - Launch Firefox or any preferred browser on your system.

2. **Navigate to DSM**:
   - Access DSM by using the bookmarked link or by typing the URL directly into the browser's address bar:
     ```
     http://ibmclass:11080
     ```

#### **Step 2: Log In to DSM**
3. **DSM Login**:
   - Use the credentials provided or set up during the DSM installation.
   - **Username**: db2admin
   - **Password**: ibm2blue

#### **Step 3: Manage Connections**
4. **Open Connection Management**:
   - In the DSM interface, navigate to `Settings > Manage Connections`.

5. **Add a New Database Connection**:
   - Click on `Add > Add a database` to start the configuration of a new database connection.

#### **Step 4: Configure Connection Details**
6. **Enter Connection Details**:
   - Fill in the connection details in the "Add Database Connection" window. Make sure to input all the information as specified:
     - **Database connection name**: MUSICDB
     - **Database name**: MUSICDB
     - **Host name**: ibmclass
     - **Port number**: 50004 (Ensure this is the correct port number from your DBM configuration).

7. **Set Additional Options**:
   - Keep default values for any non-specified options for simplicity unless specific changes are required.

8. **Enable Features**:
   - Check the options for `Enable operation` and `Enable data collection` to allow full functionality in DSM.

#### **Step 5: Credentials Setup**
9. **Input Credentials**:
   - Click on `*Credential` to set up user credentials for both operation and data collection:
     - **User ID**: inst23
     - **Password**: ibm2blue
     - Ensure to check `Save credentials to repository` for easier future access.

#### **Step 6: Test and Save the Connection**
10. **Test the Connection**:
    - After entering all details, click on `Test Connection` for each credential type to ensure that connections to the MUSICDB database can be established without issues.
    - Wait for the confirmation message: 'The connection to MUSICDB was successful'.

11. **Finalize the Connection Setup**:
    - Click `OK` to save the configuration and complete the connection setup process.

#### **Verification and Review**
12. **Verify Connection**:
    - Navigate to the main dashboard or connection area in DSM to see if MUSICDB is listed and accessible.
    - Perform a simple query or operation to confirm active connection and proper configuration.

---

> [!summary]
> By following these detailed steps, you can successfully configure a connection to the MUSICDB database using IBM Data Server Manager. This setup not only facilitates efficient database management but also ensures that you have robust tools at your disposal for ongoing database operations and monitoring.

---


# Task 3
---

> [!abstract]
> To adjust the configuration options for the MUSICDB database to better suit its intended usage, you can update the database configuration through the Db2 command line processor or the Data Server Manager (DSM) tool. Below, I'll guide you through both methods. Choose the one that best fits your workflow or accessibility.

---
### Task 3A: Using the Db2 Command Line Processor

**Steps to Change Database Configuration Using Command Line:**

1. **Connect to MUSICDB**:
   - Open your Linux terminal and execute the following command to connect to the MUSICDB database:
     ```bash
     db2 connect to musicdb
     ```

2. **Update Database Configuration**:
   - Adjust the number of primary and secondary log files by executing:
     ```bash
     db2 update db cfg for musicdb using logprimary 5 logsecond 10
     ```
   - This command might return a warning (SQL1363W), indicating that the changes to `LOGPRIMARY` will require a database restart to take effect, as this setting cannot be changed dynamically.

3. **Review Changes**:
   - To verify the changes, use the following command to display the detailed database configuration:
     ```bash
     db2 get db cfg for musicdb show detail | more
     ```

4. **Restart Database** (if required):
   - To make sure all configuration changes take effect, especially those that are not dynamic, you may need to restart the database:
     ```bash
     db2stop force
     db2start
     ```

### Task 3B: Using the Data Server Manager Tool

**Steps to Change Database Configuration Using DSM:**

1. **Access DSM**:
   - Open a web browser and navigate to the DSM by entering the URL:
     ```
     http://localhost:11080
     ```
   - Log in using the username `db2admin` and password `ibm2blue`.

2. **Navigate to Database Administration**:
   - Once logged in, click `Home` on the left sidebar.
   - Use the dropdown menu for the MUSICDB database and select `Administer > Database`.

3. **Access Configuration Parameters**:
   - If prompted, log in with the MUSICDB database credentials (`inst23` and `ibm2blue`).
   - Navigate to `Configuration parameters` under the MUSICDB overview.

4. **Modify Logging Parameters**:
   - Locate the `Logging` section within the DBCFG tab (you might need to scroll).
   - Find `LOGPRIMARY` and `LOGSECOND` settings and enter new values:
     - **LOGPRIMARY**: 5
     - **LOGSECOND**: 10
     - Ensure the `Immediate` checkbox is **cleared** to defer the change until the next restart.

5. **Execute Configuration Changes**:
   - Click `Run` at the bottom of the page to apply the changes.
   - Wait for the process to complete; you should see a confirmation message indicating the command was successful.

> [!NOTE] **Important Note**: Some changes, particularly those related to logging, require a restart of the database to take effect. If your adjustments include such parameters, plan for an appropriate time to restart the database to minimize disruption.

> [!summary]
> By following these detailed steps for either the command line or DSM, you can effectively manage and tailor the database settings of MUSICDB to meet specific operational needs or performance optimizations.

---


# Task 4
---

> [!abstract]
> To create a new storage group named APP_DATA for the MUSICDB database, you can use either the Db2 command line processor or the Data Server Manager (DSM) tool. Below, I've outlined the steps for both methods. Choose the method that best suits your workflow or accessibility preferences.

---
### Task 4A: Using the Db2 Command Line Processor

**Steps to Create a New Storage Group via Command Line:**

1. **Navigate to the Directory**:
   - Move to the directory where the SQL script for creating the storage group is located.
   - Command:
     ```bash
     cd $HOME/ddl
     ```

2. **Connect to the Database**:
   - Ensure you are connected to the MUSICDB database where the storage group will be created.
   - Command:
     ```bash
     db2 connect to musicdb
     ```

3. **Execute the DDL File**:
   - Run the SQL script that contains the `CREATE STOGROUP` statement to establish the new storage group.
   - Command:
     ```bash
     db2 -tvf create_stogroup.ddl
     ```

4. **Verify the Storage Group**:
   - Use the `db2pd` command to list and confirm the new storage group's configuration.
   - Command:
     ```bash
     db2pd -db musicdb –storage
     ```

### Task 4B: Using the Data Server Manager Tool

**Steps to Create a New Storage Group via DSM:**

1. **Access DSM**:
   - Open a web browser and navigate to DSM by entering the appropriate URL, for example, `http://localhost:11080`.
   - Log in using credentials if necessary (`db2admin` and `ibm2blue`).

2. **Navigate to Database Administration**:
   - Once logged in, select `Home` on the left sidebar.
   - From the MUSICDB database dropdown menu, choose `Administer - Database`.

3. **Manage Storage Groups**:
   - Navigate to `Administer > Storage Objects > Storage Groups` to access the storage group configuration.

4. **Create New Storage Group**:
   - Click on `Create` at the top left corner to begin defining a new storage group.
   - Input the following values:
     - **Storage group name**: APP_DATA
     - **Default storage group**: NO
     - **Storage paths**: `/dbauto/path2`
   - You can view the generated command by clicking on the `+` next to `Command`, which should display:
     ```
     CREATE STOGROUP APP_DATA ON '/dbauto/path2';
     ```

5. **Execute the Creation Command**:
   - Select `Run` to execute the command and create the new storage group.

6. **Confirm the Operation**:
   - Wait for the command to be processed and check for a success message indicating that the storage group was created successfully.

---

> [!NOTE] Conclusion
> Both methods will effectively create the new storage group APP_DATA on the specified path `/dbauto/path2`. Using the command line gives you a direct and scriptable approach, while DSM provides a graphical interface that might be easier for visual verification and management. After creating the storage group, proceed to the next task or operations as planned.

---


# Task 5
---

> [!abstract]
> For Task 5, you will create a new tablespace named TSP01 that supports application objects with specific attributes. This task can be completed using either the Db2 command line processor or the Data Server Manager (DSM) tool. Below are the detailed steps for both methods, allowing you to choose the one that suits your environment or preference.

---
### Task 5A: Using the Db2 Command Line Processor

**Steps to Create a New Tablespace via Command Line:**

1. **Navigate to the DDL File Directory**:
   - Change to the directory containing the DDL script for creating the new tablespace.
   - Command:
     ```bash
     cd $HOME/ddl
     ```

2. **Connect to the MUSICDB Database**:
   - Ensure you are connected to the MUSICDB database where the tablespace will be created.
   - Command:
     ```bash
     db2 connect to musicdb
     ```

3. **Execute the DDL File**:
   - Run the DDL script that contains the `CREATE TABLESPACE` statement.
   - Command:
     ```bash
     db2 -tvf create_tablespace_tsp01.ddl
     ```

4. **Verify the Tablespace**:
   - Use the `db2pd` command to list and confirm the new tablespace's configuration.
   - Command:
     ```bash
     db2pd -db musicdb -tablespaces | more
     ```

### Task 5B: Using the Data Server Manager Tool

**Steps to Create a New Tablespace via DSM:**

1. **Access DSM**:
   - Open a web browser and navigate to DSM by entering the appropriate URL.
   - Log in using credentials if necessary.

2. **Navigate to Database Administration**:
   - Once logged in, select `Administer > Storage Objects > Table Spaces` from the left sidebar.

3. **Create New Tablespace**:
   - Click `Create` at the top left corner to begin defining a new tablespace.
   - Fill in the tablespace details:
     - **Name**: TSP01
     - **Type of Data**: (Accept default or adjust as needed)
     - **Managed By**: (Select Automatic Storage)
     - **Buffer Pool**: IBMDEFAULTBP
     - **Database Partition Group**: (Accept default)
     - **Storage Group Name**: APP_DATA
     - **Extent Size**: 4
     - **Initial Size**: 1M
     - **Increase Size**: 100K
     - **Autosize**: Yes (Ensure this is enabled)
   - The DSM tool generates the CREATE TABLESPACE statement that defines the new tablespace TSP01.

4. **Execute the Creation Command**:
   - Click `Run` to execute the command and create the new tablespace.

5. **Confirm the Operation**:
   - Wait for the command to be processed and check for a success message indicating that the tablespace was created successfully.
   - Refresh the Table Spaces list to see the new tablespace, TSP01, included in the list.

---

> [!summary]
> Both methods effectively create the TSP01 tablespace with the specified configurations, integrating it into the MUSICDB database environment. Whether you prefer the scriptability and direct control of the command line or the visual feedback and ease of use provided by DSM, both pathways are set up to meet your operational needs effectively.

---


# Task 6
---

> [!abstract]
> Task 6 involves creating a set of tablespaces using a SQL file that contains multiple `CREATE TABLESPACE` statements. You can execute this task using either the Db2 command line processor or the Data Server Manager (DSM) tool. Below are the steps for each method:

---
### Task 6A: Using the Db2 Command Line Processor

**Steps to Execute SQL File via Command Line:**

1. **Navigate to the Directory Containing the SQL File:**
   - Change to the directory where your SQL script is located.
   - Command:
     ```bash
     cd $HOME/ddl
     ```

2. **Connect to the MUSICDB Database:**
   - Ensure you are connected to the MUSICDB database.
   - Command:
     ```bash
     db2 connect to musicdb
     ```

3. **Execute the SQL Script:**
   - Run the SQL file that contains the `CREATE TABLESPACE` statements for creating multiple tablespaces.
   - Command:
     ```bash
     db2 -tvf create_tablespaces.ddl
     ```

4. **Verify the Tablespaces:**
   - Use the `LIST TABLESPACES` command to list the tablespaces for the MUSICDB database.
   - Command:
     ```bash
     db2 list tablespaces | more
     ```

### Task 6B: Using the Data Server Manager Tool

**Steps to Execute SQL File via DSM:**

1. **Start DSM and Select the MUSICDB Database:**
   - If not already started, open DSM and log in. Navigate to the MUSICDB database from the top database list.
   - Click on 'Run SQL' from the left navigation pane.

2. **Load the SQL Script:**
   - Click on 'Script > Open from Client' to open the SQL file.
   - Use the 'Browse' button in the 'Open SQL Script' window to find and select the `create_tablespaces.ddl` file located at `inst23/ddl`.
   - Click 'Open'.

3. **Review and Execute the SQL Statements:**
   - Once loaded, the SQL editor will display the SQL statements. Review them to ensure they are correct.
   - Click 'Run > Run All' to execute all SQL statements in the file.

4. **Verify the Execution:**
   - Wait for the SQL statements to be processed. The DSM should display a success message for each statement.
   - You may view the execution log under 'VIEW RESULTS' to confirm each statement's success.

5. **Refresh Tablespaces List:**
   - To see the new tablespaces, navigate back to 'Administer > Storage Objects > Table Spaces' in DSM and refresh the list.

---

> [!summary]
> These steps will help you successfully create multiple tablespaces using a pre-defined SQL file, either through the command line or DSM, enhancing the storage structure of your MUSICDB database effectively.

---


# Task 7
---

> [!abstract]
> In Task 7, you'll use various Db2 commands and SQL queries to extract detailed information about the tablespaces in the MUSICDB database. This task can be completed using either the Db2 command line processor or the Data Server Manager (DSM) tool.

---
### Task 7A: Using the Db2 Command Line Processor

**Steps to Retrieve Tablespace Information:**

1. **Navigate to Directory and Connect:**
   - Move to the directory where your SQL scripts are stored.
   - Connect to the MUSICDB database.
   ```bash
   cd $HOME/ddl
   db2 connect to musicdb
   ```

2. **Execute SQL Query for Tablespace Information:**
   - Run the SQL script `select_tablespaces.sql` which uses the `SYSCAT.TABLESPACES` view to retrieve tablespace information.
   ```bash
   db2 -tvf select_tablespaces.sql
   ```

3. **Review Tablespace Attributes:**
   - The output will display information such as tablespace name, definer, internal identifier, type, data type, and associated storage group. 
   - The query to view might look like this:
   ```sql
   SELECT substr(tbspace,1,18) AS tbspace,
          substr(definer,1,10) AS definer, 
          tbspaceid, 
          tbspacetype, 
          datatype, 
          sgname
   FROM syscat.tablespaces;
   ```

4. **Additional Tablespace and Disk Path Information:**
   - Execute another SQL file `dbpaths.sql` to get details about the disk paths used by the database.
   ```bash
   db2 -tvf dbpaths.sql
   ```
   - The output from this command will provide disk path types and their respective paths.

5. **List Storage Groups and Tablespace Configuration:**
   - Use the `db2pd` command to get detailed information on storage groups and tablespaces.
   ```bash
   db2pd -db musicdb -storage | more
   ```

### Task 7B: Using the Data Server Manager Tool

**Steps to Execute SQL Queries via DSM:**

1. **Open DSM and Load SQL File:**
   - Start DSM and select the MUSICDB database.
   - Navigate to 'Run SQL'.
   - Click 'Script > Open from Client' and load the `select_tablespaces.sql` file.

2. **Execute the SQL Script:**
   - Click 'Run All' to execute the loaded SQL statements.
   - The results will display tablespace information including names, types, and associated storage groups.

3. **Review and Analyze the Output:**
   - Check the 'Result Set' under 'View Results' to analyze the data returned by the script.

4. **Additional Queries:**
   - Repeat the process to execute `dbpaths.sql` to get information on disk paths.
   - Each query's results can be reviewed in the 'Result Set' section.

5. **Execute and Review:**
   - For additional insights, execute other relevant SQL files such as `select_mon_get_cont.sql` to see container-level details related to tablespaces.

---

> [!NOTE] Conclusion
> Both methods provide robust tools for database administrators to monitor and manage tablespaces and associated resources effectively. By following these steps, you can gather comprehensive data on tablespaces, their configuration, and their storage, facilitating better management and optimization of database resources.

---