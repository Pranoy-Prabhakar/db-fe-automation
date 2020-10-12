# Digital Bank FE Automation
The project implements front end automation of digital bank with testCafe. The setup has been done with POM approach.
### Please find below description of the Tests 
| TestScenario | Test Sceanrio Descriptio | Test Data | Test Type
| ------ | --- | ----- | ----- |
| DB_TS_1 | Login with correct username and password   | test1234@test.com/Test1234.  | Positive |
| DB_TS_2 | Login with incorrect username and password  |   test1234@test.com/Test.  | Negative |
| DB_TS_3 | Login without username and password  |     | Negative |
| DB_TS_4 | Register User  |     | Positive |

1. Clone Repo and install dependencies
```
  git clone https://github.com/Pranoy-Prabhakar/db-fe-automation.git
  cd db-fe-automation-master
  npm install
```
2. Install testcafe globally (skip if already installed)
 ```
   npm install -g testcafe
 ```
3. Test Data setup

#### Kindly update the test data file using below data for successfull registration of user 
| SSN | Email Id | status |
| ------ | --- | ----- |
| 157824536    | Henry_Quinton3167@qater.org   | Not Used    |
| 084048700    | Javier_Silva8279@infotech44.tech  | Not Used     |
| 002619374    | Daron_Larkin5030@dionrab.com   | Not Used     |
| 551740437    | Aiden_Clarkson6460@gembat.biz   | Not Used     |
| 621628232    | Oliver_Booth8906@acrit.org   | Not Used     |
| 287625059    | Enoch_Durrant7221@hourpy.biz   | Not Used     |
4. Execute tests
```
  testcafe chrome .\tests\ --skip-js-errors
````

 <mark>while running make sure that you are not in any vpn as it will block the proxy.</mark>
