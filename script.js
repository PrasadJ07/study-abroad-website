body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
}

header {
    background-color: #333;
    color: white;
    padding: 10px 20px;
    text-align: center;
}

nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
}

section {
    padding: 20px;
    background-color: white;
    margin: 10px 0;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.hidden {
    display: none;
}

#search-box {
    margin-top: 20px;
}

#search-input {
    padding: 10px;
    width: 200px;
    border-radius: 5px;
    border: 1px solid #ddd;
}

#search-box button {
    padding: 10px;
    margin-left: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    background-color: #007bff;
    color: white;
    cursor: pointer;
}

#search-box button:hover {
    background-color: #0056b3;
}

#program-list li {
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

#program-list li:last-child {
    border-bottom: none;
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px 0;
    position: fixed;
    width: 100%;
    bottom: 0;
}
