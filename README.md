## Welcome to FileBucket!

FileBucket is a single web page app that allows users to upload and save photos. After signing up for an account with FileBucket, the user may upload load pictures of buckets, share them, and download them. User owned resources can be updated and deleted, while resources belonging to other owners can be viewed and downloaded. Images are stored in S3 on AWS while information regarding image tags are saved to our database using an Express back-end.

### ERD

![image from ios](https://user-images.githubusercontent.com/38407813/50248393-dd146080-03a8-11e9-9f3b-eec64e752bb1.jpg)

### AUTH/BUCKETS ROUTES:
1. CREATE - POST
2. SHOW - GET
3. INDEX - GET
4. UPDATE - PATCH
5. DELETE - DELETE

### TECHOLOGIES:
1. Mongoose
2. Express
3. MongoDB
4. multer
6. passport
7. aws-sdk
8. bcrypt

### Planning, process and problem-solving strategy:
1. Planning:
- User stories: We guided the design and structure of out application by understanding user requirements.
- Trello: This project management application helped us assign tasks and implement a work breakdown structure.
- Wireframes: This helped us conceptualize the design of the frontend and the user experience to guide our work.
- ERD: Creating an entity relationship diagram ensured that we understood the ways our collections interacted in Express.

2. Process:
 Stand-ups: We used this agile approach to team meetings to begin each day and discuss what each member of the team was working on and where support was needed.
 - Pair programming: When there were parts of the assignment that would be most effective with collaboration we pair programmed to ensure that each one of us contributed ideas equally and gained understanding of different aspects of the application.

3. Problem solving: We came together as a team to discuss ways to resolve issues and examined programming documentation to find solutions whenever possible. We also sought out support form classmates and instructors when we needed additional insight.

#### FileBucket Back-end Repo:
https://github.com/Git-Power/FileBucket/

#### Heroku:
https://stormy-crag-73344.herokuapp.com/

#### FileBucket Front-end repo:
https://github.com/Git-Power/FileBucket-client

#### FileBucket Github pages:
https://git-power.github.io/FileBucket-client/

### Future iterations and unsolved problems:
- We'd like to add a dedicated download route and button.
- The ability to update and delete images from S3 would also improve functionality.

#### Completed during the Web Development Immersive PVD 4 Cohort, a full-stack development training course offered through General Assembly.
[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)
