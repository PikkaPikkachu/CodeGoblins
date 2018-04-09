# Jobster [![Build Status](https://travis-ci.org/shikhar-scs/CodeGoblins.svg?branch=master)](https://travis-ci.org/shikhar-scs/CodeGoblins)
[![Build Status](https://travis-ci.org/shikhar-scs/CodeGoblins.svg?branch=master)](https://travis-ci.org/shikhar-scs/CodeGoblins) 

## Visit it here 
https://jobsterdevsprint.herokuapp.com/

## SetUp for Development


  fork the github repository and run the following commands in a new directory on your PC
 
 ```
  git init .
  git clone https://github.com/PikkaPikkachu/CodeGoblins
  cd CodeGoblins
  npm install
``` 
  set up a local mongodb database in any local directory using the following command. Remember to change the URI and database name in `mongo/models.js`
   
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
Built using the nltk and textBlob libraries of Python and NodeJS, this app allows a user to score their resume based on a job description uploaded by a company. This helps them to improve their resume and make it more relevant for the given job description through various keyword matching scripts (run in Python) using text matching algorithms and NLP. This app also allows the user to share their resume on several job portals.


## Developed by 
 - Prakriti Bansal [@PikkaPikkachu](https://github.com/PikkaPikkachu)  :ghost:
 - Shikhar Agnihotri [@shikhar-scs](https://github.com/shikhar-scs)  :slightly_smiling_face:
 - Soumya Himanish Mohapatra [@himanish-star](https://github.com/himanish-star)  :relieved:
 - Tanvi Dadu [@tanvidadu](https://github.com/tanvidadu)  :relaxed:


## Contributions
Big or small, contribute it all. Each and every contribution is priceless to us. So, let em flow.

Contribution guidelines are the same as the general standard maintained over github.

  - Issues would be appreciaed with relevant screenshots.
  - PR's would be appreciated if filed from a separate branch and includes a working gif demo or relevant screenshots.


## License 
```
Copyright (c) 2018 CodeGoblins

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

```
