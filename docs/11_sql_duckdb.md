# Exploring SQL Databases with DuckDB

___

##  Database

* A database is a structured collection of data.
* It allows for the storage, retrieval, modification, and deletion of data in an organized manner.
* Databases come in various types, including relational and NoSQL. Relational databases organize data into tables, which are interconnected.
* Each table represents a related data collection and is organized into rows and columns.
<img src="https://github.com/ua-datalab/DataEngineering/blob/main/images/unnamed.png" alt="Relational DB Image" style="height: 400px; width:500px;"/>

___

## SQL stands for Structured Query Language.
 
It's a programming language that stores and processes information in relational databases.

### Types of SQL Statements

* DDL (Data Definition Language): DDL statements are used to define, modify, and remove database structures, but not the data within them. Common DDL statements include CREATE, ALTER, and DROP.
* DML (Data Manipulation Language): DML statements manage data within schema objects. They include SELECT, INSERT, UPDATE, and DELETE.

___

## DuckDB
<img src="https://duckdb.org/images/DuckDB-Footer.svg" alt="Duck DB Logo" style="height: 200px; width:200px;"/>

* An in-memory, columnar database management system optimized for analytical queries."
* Open-source and designed for simplicity, speed, and efficiency in processing analytical workloads."
* Supports SQL standards for easy integration with existing tools and workflows.
___
## Install DuckDB
### With Python set up, you can now install DuckDB using pip. In your terminal or command line, execute:
```console 
pip install duckdb
```
___

### To ensure DuckDB is installed correctly, launch your jupyter Notebook and try importing the DuckDB module:

```python 
pip install duckdb
```
### If no errors occur, DuckDB is successfully installed and ready to use.
___
### In your Jupyter Notebook, import duckdb by running
```python 
import duckdb
```
### For this tutorial, we will be using a pre-configured Duckdb Database. 
### Let's download the database file:
```python 
!wget --content-disposition https://arizona.box.com/shared/static/uozg0z86rtdjupwpc7i971xwzuzhp42o.duckdb
```

### Connect to the database using: 
```python 
conn = duckdb.connect(database='/content/my_database.duckdb', read_only=True)
```



