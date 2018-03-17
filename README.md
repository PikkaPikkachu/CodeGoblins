# Jobster

# Visit it here 
https://jobsterdevsprint.herokuapp.com/

## SetUp for Development


  fork the github repository and run the following commands in a new directory on your PC
 
 ```
  git init .
  git clone https://github.com/PikkaPikkachu/CodeGoblins
  cd CodeGoblins
  npm install
``` 
  set up a local mongodb database in any local directory using the following command. Remember to change the URI and database name in `mongo/models.js
   
```
  mongod --dbpath=./path-to-directory
```
  Start the node server, ensure that you have the nltk and punkt modules of python installed. Post an issue or search on stackOverflow for any python related installation errors, they are pretty easy and straightforward to solve.
                                                  
```
  node server.js

```

Visit `https://localhost:3000` and start contributing. 

## Problem Statement Identified 
Task is to design simple Natural Language processing tools such as Text Classifier, POS Tagger, Text Summarizer, Text Keyword extraction and Text Matcher. All these tools are to be designed as modules and to be used in a web-app for rating Resume and CVs. The app would have the option to upload any job requirement document and CV/Resume. After uploading both the documents, the user will receive a rating score of the uploaded CV/Resume against the corresponding job requirement which will be the measure of how likely is the Resume going to be shortlisted for the job requirement.

## Solution Proposed 
The web-app allows user to upload their resume. On basis of their resume, our app provides them with their rating for a particular project. The app also provides user with the facility to share their resume on professional sites like naukri.com. 
The app is Node based app that interacts with nltk scripts in python.  

## Developed by : 
 - Prakriti Bansal [@PikkaPikkachu](https://github.com/PikkaPikkachu)
 - Shikhar Agnihotri [@shikhar-scs](https://github.com/shikhar-scs)
 - Soumya Himanish Mohapatra [@himanish-star](https://github.com/himanish-star)
 - Tanvi Dadu [@tanvidadu](https://github.com/tanvidadu)
 
...with :ghost:

## Contributions:
We are open to any contributions/ideas! Feel free to open an issue or send a PR. 



