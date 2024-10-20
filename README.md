# Assignment 2 - Cloud-Based Web Application

## Student Information
- **Name**: Faisal Uddin Mohammed
- **Student ID**: 21507105
- **Course**: CSE5006
- **Assignment**: Assignment 2

## Project Overview
This project demonstrates the development of a cloud-based web application using various technologies, including:
- **React** for front-end development
- **Node.js** and **Express** for the back-end
- **PostgreSQL** as the database
- **Sequelize** ORM for database interaction
- **Docker** for containerization

The project includes a REST API to perform CRUD operations on a contacts database, as well as a user interface for managing contacts and associated phone numbers. The application has been expanded to support additional tables and functionality, including managing companies.

## Table of Contents
- [System Setup](#system-setup)
- [Project Structure](#project-structure)
- [Tasks Completed](#tasks-completed)
  - [Task 1: User Interface Changes](#task-1-user-interface-changes)
  - [Task 2: API Command Demonstrations](#task-2-api-command-demonstrations)
  - [Task 3: Database Modelling with Sequelize](#task-3-database-modelling-with-sequelize)
  - [Task 4: Expanding the Existing Tables](#task-4-expanding-the-existing-tables)
  - [Task 5: Front-End for Companies Table](#task-5-front-end-for-companies-table)
  - [Task 6: Bonus Application](#task-6-bonus-application)
- [Running the Application](#running-the-application)
- [Screenshots](#screenshots)
- [Conclusion](#conclusion)

## System Setup
To run this project locally, make sure you have the following:
- **Node.js** and **npm**
- **Docker** and **Docker Compose**
- **PostgreSQL** database (setup inside Docker container)

### Steps to Run:
1. Clone the repository:
   ```bash
   git clone https://github.com/Miyabhai-Kirak/FaisalUddin-21507105
## Project Structure

The main folders and files in this project include:

- `/models`: Sequelize models for database tables (`contacts`, `phones`, `companies`).
- `/controllers`: Handlers for CRUD operations (Create, Read, Update, Delete) for each table.
- `/routes`: Defines API routes.
- `/components`: React components for the front-end.
- `App.js`: Main entry point for the React app.

---

## Tasks Completed

### Task 1: User Interface Changes 
- Changed the "Delete" button label to "Delete Contact" .
- Changed the "Add" button label in the phone component to include the contact’s name .
- Replaced the "Name" input with a drop-down menu with four categories .
- In the `<tr>` element of the table, changed the label "Name" to "Phone Type" .

---

### Task 2: API Command Demonstrations 
The following API commands were tested:

1. **Show Contact** (`GET /contacts`): Displays a list of contacts .
2. **Add Contact** (`POST /contacts`): Adds a new contact to the database .
3. **Delete Contact** (`DELETE /contacts/:contactId`): Deletes a contact by ID .
4. **Update Contact** (`PUT /contacts/:contactId`): Updates a contact’s details .
5. **Show Phone** (`GET /contacts/:contactId/phones`): Retrieves phone numbers for a contact .
6. **Add Phone** (`POST /contacts/:contactId/phones`): Adds a new phone number .
7. **Delete Phone** (`DELETE /contacts/:contactId/phones/:phoneId`): Deletes a phone by ID .
8. **Update Phone** (`PUT /contacts/:contactId/phones/:phoneId`): Updates a phone’s details .

---

### Task 3: Database Modelling with Sequelize 

1. **Modify the `contacts` Table **:
   - Updated the `contacts` table to include `id`, `name`, and `address`.

2. **Modify the `phones` Table **:
   - Updated the `phones` table to include `id`, `phone_type`, `phone_number`, and `contactId`.

3. **Adjust the Front-End **:
   - Modified the front-end to reflect the updated backend structure, ensuring that the UI aligns with the changes made to the `contacts` and `phones` tables.

4. **Test All APIs **:
   - Tested all APIs (POST, GET, PUT, DELETE) for the modified `contacts` and `phones` tables.

---

### Task 4: Expanding the Existing Tables 

1. **Table Creation **:
   - Created a new `companies` table with the following attributes:
     - `company_id`: Primary key for each company.
     - `company_name`: Name of the company.
     - `company_address`: Address of the company.
     - `contact_id`: Foreign key referencing the `contacts` table.

2. **API Creation **:
   - Developed the following API commands to manage the `companies` table:
     - **Create Company** (`POST /companies`): Adds a new company.
     - **Get Company** (`GET /companies/:companyId`): Retrieves a specific company by ID.
     - **Update Company** (`PUT /companies/:companyId`): Updates details of a company.
     - **Delete Company** (`DELETE /companies/:companyId`): Deletes a company by ID.

---

### Task 5: Front-End for Companies Table 

- Created a React-based front-end interface for managing the `companies` table.
- The front-end includes the ability to:
  - Add a new company.
  - Update company details.
  - Delete a company.
  - Display a list of companies.
- All changes are persisted in the PostgreSQL database, with CRUD operations seamlessly integrated into the UI.

---

### Task 6: Bonus Application 

1. **Design a Database Structure**:
   - Created three new tables (`items`, `customers`, `orders`) with at least two attributes each:
     - `items`: Includes `item_id`, `item_name`, and `item_price`.
     - `customers`: Includes `customer_id`, `customer_name`, and `customer_email`.
     - `orders`: Includes `order_id`, `order_date`, `customer_id`, and `item_id`.

2. **API Implementation**:
   - Demonstrated at least 12 APIs covering operations such as GET, UPDATE, CREATE, and POST for the three tables.

3. **Data Persistence**:
   - Ensured that the database accurately persists data across all CRUD operations.

4. **Front-End/User Interface**:
   - Created a front-end interface that accesses the three tables (`items`, `customers`, `orders`) and allows for updates across the system.
## Running the Application

### Clone the repository:
```bash
git clone https://github.com/Miyabhai-Kirak/Assignment2
docker compose up --build


![1](./screenshots/Screenshot%20(170).png)
![2](./screenshots/Screenshot%20(171).png)
![3](./screenshots/Screenshot%20(172).png)
![4](./screenshots/Screenshot%20(178).png)
![5](./screenshots/Screenshot%202024-10-19%20170920.png)
![6](./screenshots/Screenshot%202024-10-19%20170937.png)
![7](./screenshots/Screenshot%202024-10-19%20171152.png)
![8](./screenshots/Screenshot%202024-10-19%20171204.png)
![9](./screenshots/Screenshot%202024-10-19%20171217.png)
![10](./screenshots/Screenshot%202024-10-19%20171240.png)
![11](./screenshots/Screenshot%202024-10-19%20172104.png)
![12](./screenshots/Screenshot%202024-10-19%20172656.png)



