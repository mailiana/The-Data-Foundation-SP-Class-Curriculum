export const stats = [
  { number: "6", label: "SQL Days" },
  { number: "6", label: "Python Days" },
  { number: "2", label: "Capstone Projects" },
  { number: "12", label: "Live Sessions" },
];

export const sqlDays = [
  {
    day: "01", title: "Intro to Databases & Relational Systems",
    objectives: [
      "Explain what a database is and how it differs from a spreadsheet",
      "Describe the structure of a relational database: tables, rows, columns, and keys",
      "Install and connect to MySQL locally or via a cloud tool",
      "Write and run a first SELECT query to view table data",
    ],
    syntax: ["SELECT", "FROM", "WHERE", "LIMIT", "ORDER BY"],
    deliverable: "A connected MySQL environment with a sample database loaded and 5 basic SELECT queries written and tested.",
  },
  {
    day: "02", title: "CRUD Operations: Creating Databases & Tables",
    objectives: [
      "Create a new database and a table with correctly defined column types",
      "Insert rows of data into a table using INSERT statements",
      "Update existing records and delete specific rows safely",
      "Understand PRIMARY KEY and NOT NULL constraints",
    ],
    syntax: ["CREATE DATABASE", "CREATE TABLE", "INSERT INTO", "UPDATE", "DELETE", "PRIMARY KEY"],
    deliverable: "A student-built database with at least 2 tables, populated with 10+ rows each, using all four CRUD operations.",
  },
  {
    day: "03", title: "Intermediate Querying: Joins & Aggregations",
    objectives: [
      "Combine data from two tables using INNER JOIN and LEFT JOIN",
      "Use GROUP BY to summarize data by category",
      "Apply aggregate functions to answer real business questions",
      "Filter grouped results with the HAVING clause",
    ],
    syntax: ["INNER JOIN", "LEFT JOIN", "GROUP BY", "HAVING", "COUNT()", "SUM()", "AVG()"],
    deliverable: "6 queries answering specific business questions using joins and aggregations on a sales or retail dataset.",
  },
  {
    day: "04", title: "Data Loading: Importing CSVs into MySQL",
    objectives: [
      "Create a table schema that matches an existing CSV file structure",
      "Import a CSV file into MySQL using LOAD DATA and the import wizard",
      "Verify the import by running row counts and spot-check queries",
      "Handle common import errors: wrong delimiters, null values, date formats",
    ],
    syntax: ["LOAD DATA INFILE", "SHOW WARNINGS", "COUNT(*)", "DESCRIBE", "ALTER TABLE"],
    deliverable: "A real-world CSV dataset loaded into MySQL with a screenshot of the row count query confirming successful import.",
  },
  {
    day: "05", title: "Advanced Analysis: Window Functions & CASE Statements",
    objectives: [
      "Rank rows within partitions using ROW_NUMBER and RANK",
      "Calculate running totals and moving averages with window functions",
      "Write CASE statements to create conditional columns in query output",
      "Combine CASE with GROUP BY to build pivot-style summaries",
    ],
    syntax: ["OVER(PARTITION BY)", "ROW_NUMBER()", "RANK()", "SUM() OVER", "CASE WHEN", "THEN / ELSE"],
    deliverable: "A query file with 4 advanced queries: one ranking query, one running total, and two CASE-based segment analyses.",
  },
  {
    day: "06", title: "SQL Capstone: Technical Report & GitHub Documentation",
    objectives: [
      "Structure a complete SQL analysis project with at least 8 queries",
      "Write clear SQL comments explaining the purpose of each query block",
      "Push the .sql file and a README to a GitHub repository",
      "Present 3 key findings from the dataset to the cohort",
    ],
    syntax: ["All Previous SQL", "-- Comments", "CREATE VIEW", "Subqueries"],
    deliverable: "A GitHub repository with a .sql capstone file, a README.md explaining the project, and a 5-minute live presentation.",
    isCapstone: true,
  },
];

export const pythonDays = [
  {
    day: "07", title: "Intro to Python: Syntax, Variables & Logic",
    objectives: [
      "Set up a Python environment using Google Colab or Jupyter Notebook",
      "Declare variables and understand data types: string, int, float, bool",
      "Write conditional logic using if, elif, and else",
      "Build a simple for loop to repeat operations over a list",
    ],
    syntax: ["Variables", "print()", "if / elif / else", "for loop", "input()", "type()"],
    deliverable: "A Colab notebook with 10 cells: variable declarations, type checks, 2 conditional blocks, and a loop that prints a summary.",
  },
  {
    day: "08", title: "Data Structures: Lists, Dictionaries & Functions",
    objectives: [
      "Store and access data in lists and dictionaries",
      "Use list methods: append, remove, sort, and index",
      "Write reusable functions with parameters and return values",
      "Loop through a list of dictionaries to process structured records",
    ],
    syntax: ["list[]", "dict{}", ".append()", ".keys() / .values()", "def function()", "return"],
    deliverable: "A notebook with a student records dictionary, 3 reusable functions that process it, and printed output for each function call.",
  },
  {
    day: "09", title: "Pandas Essentials: Loading & Cleaning Data",
    objectives: [
      "Import a CSV into a Pandas DataFrame and inspect its structure",
      "Check for null values and handle them: fill or drop",
      "Rename columns, change data types, and filter rows by condition",
      "Export a cleaned DataFrame back to a CSV file",
    ],
    syntax: ["pd.read_csv()", ".info()", ".isnull()", ".fillna()", ".dropna()", ".rename()", ".astype()", ".to_csv()"],
    deliverable: "A Colab notebook that loads a messy CSV, cleans it with documented steps, and exports the cleaned file.",
  },
  {
    day: "10", title: "Exploratory Data Analysis (EDA) with Pandas",
    objectives: [
      "Generate summary statistics for numerical and categorical columns",
      "Group and aggregate data to answer specific business questions",
      "Sort and rank results to find top and bottom performers",
      "Write a structured EDA narrative with findings documented in markdown cells",
    ],
    syntax: [".describe()", ".value_counts()", ".groupby()", ".agg()", ".sort_values()", ".nlargest()", "Markdown Cells"],
    deliverable: "A structured EDA notebook with at least 5 business questions, the code to answer each one, and a markdown summary below each result.",
  },
  {
    day: "11", title: "Data Visualization: Matplotlib & Seaborn",
    objectives: [
      "Create bar charts, line plots, and histograms using Matplotlib",
      "Build polished distribution and correlation plots using Seaborn",
      "Add titles, axis labels, and annotations to every chart",
      "Save plots as image files for use in reports and LinkedIn posts",
    ],
    syntax: ["plt.bar()", "plt.plot()", "plt.hist()", "sns.heatmap()", "sns.boxplot()", "plt.savefig()"],
    deliverable: "A visualization notebook with 5 charts (3 Matplotlib, 2 Seaborn), all labeled and saved as PNG files.",
  },
  {
    day: "12", title: "Capstone: Insights, Storytelling & Final Project",
    objectives: [
      "Combine cleaning, EDA, and visualization into one end-to-end analysis notebook",
      "Write an executive summary in markdown at the top of the notebook",
      "Push the final notebook to GitHub with a detailed README",
      "Present 3 insights with supporting charts to the cohort in 5 minutes",
    ],
    syntax: ["All Previous Python", "End-to-End Pipeline", "README.md", "GitHub Push"],
    deliverable: "A published GitHub repository with the full analysis notebook, saved chart images, and a README that explains the dataset, questions, and findings.",
    isCapstone: true,
  },
];

export const skills = [
  { num: "01", type: "sql", title: "Database Design", desc: "Students create relational databases with properly typed columns, primary keys, and constraint rules." },
  { num: "02", type: "sql", title: "SQL Querying", desc: "Students write SELECT, JOIN, GROUP BY, HAVING, window function, and CASE queries from memory." },
  { num: "03", type: "sql", title: "Data Loading", desc: "Students import CSV files into MySQL, handle common errors, and verify import integrity with queries." },
  { num: "04", type: "sql", title: "GitHub (SQL)", desc: "Students push a documented .sql project file and README to a public GitHub repository." },
  { num: "05", type: "python", title: "Python Fundamentals", desc: "Students write variables, conditionals, loops, and reusable functions without reference material." },
  { num: "06", type: "python", title: "Pandas Analysis", desc: "Students load, clean, filter, group, and export data using Pandas DataFrames." },
  { num: "07", type: "python", title: "Data Visualization", desc: "Students produce labeled charts using Matplotlib and Seaborn and save them as PNG files." },
  { num: "08", type: "python", title: "GitHub (Python)", desc: "Students publish a complete analysis notebook to GitHub with chart outputs and a professional README." },
];

export const capstoneItems = [
  { label: "SQL Capstone (Day 6)", text: "A .sql file with 8+ queries covering CRUD, joins, aggregations, window functions, and CASE statements, pushed to GitHub with a README." },
  { label: "Python Capstone (Day 12)", text: "A full analysis notebook covering data cleaning, EDA with Pandas, and 5 visualizations, published to GitHub with chart images and a README." },
  { label: "LinkedIn Post", text: "Each student posts their GitHub link and a chart screenshot to LinkedIn with a short write-up of what they built and what they found in the data." },
  { label: "Peer Presentation", text: "Students present their Python capstone notebook live. Teachers assess code quality, insight clarity, chart labeling, and the strength of the final narrative." },
];
