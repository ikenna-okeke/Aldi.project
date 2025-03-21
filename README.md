# TWILO AGENT

read up here https://www.twilio.com/en-us/blog/send-and-receive-email-with-sap-cap

- To add test data run cds add data and then a csv file with the the test data structure will be added form your schema cds definition
- I am using twilo agent to send an email so for this do - npm add @sendgrid/mail

# TESTING CAP BACKEND APPLICATION

- since this is a typescript application, to test application locally, run on the terminal : npm run start:local, as con tained in the package.json file
- now head over to the test folder or a rest client (PostMan) and conduct test on local host 3001

# WORKING LOCALLY

- while working locally, the database type is sqlite and the authentication switched to dummy to require no authentication

```
"cds": {
    "[hybrid]": {
      "auth": "dummy",
        "db": {
        "kind": "sqlite",
        "model": [
          "db",
          "srv"
        ]
      },
    }
  }
```

# WORKING IN DEPLOYMENT

- while working in deployment, the databse is switched to hana and the authenticati to xsuaa

```
"cds": {
    "requires": {
      "auth": "xsuaa",
      "db": {
        "kind": "hana",
        "model": [
          "db",
          "srv"
        ]
      },
      "uaa": {
        "kind": "xsuaa"
      }
    },
    "hana": {
      "deploy-format": "hdbtable"
    }
  }
```

# EXTRAS

- Please do well to check out the build, approuter-fiori folders as i have some added configurations for the deployments there
- also during build, the fiori app built is deployed to approuter-fiori folder
- additionally, a deployment multi target archive file have been added in the build folder for the deployment of the application
- create a hana database in the cloud foundry space where the deployment will take place.
- after login in to a cloud foundry space, a quick deployment can be done using npm run deploy:cf
- after deployment, the Admin service and the fiori application can then be connected using the bound destination service instance
- the deployed Admin service protected with the xsuaa is then added as a destination called "space-fahrer-admin" (as described in the xs-app.json file in the folder approuter-fiori) in the service bindings of the deployed fiori app

# OBSERVATION

- I have worked with fiori a few times so that might not be my strongest forte even though i understand how it works, as I have been working mainly with freestyle ui5 applications and Coupling it with CAP
- It is worthy to note that instead of using fiori, this exact same architecture can be rebuilt easily using a free style ui5 application and a flexible column layout control(fcl) with the control aggregations configured accordingly in the manifest.json
- The data completely bound to odata v4 views, sorting and filtering being taken care of easily and pagination been taken care of by the growing and growingThreshold of the Table control and when this is not enough, custom implementation of pagination would also be possible.

# MY ABAP CODE

- This is the code from my local ABAP setup

```
CLASS zcl_001_hello_world DEFINITION
  PUBLIC
  FINAL
  CREATE PUBLIC .

  PUBLIC SECTION.

    INTERFACES if_oo_adt_classrun .
  PROTECTED SECTION.
  PRIVATE SECTION.
ENDCLASS.



CLASS zcl_001_hello_world IMPLEMENTATION.

  METHOD if_oo_adt_classrun~main.

  out->write( 'Hello ikenna okekek!' ).
DATA: example TYPE string VALUE 'ABAP4BTP is amazing',
      words TYPE TABLE OF string,
      unique_chars TYPE TABLE OF string,
      word TYPE string,
      char TYPE c LENGTH 1,
      word_count TYPE i,
      unique_count TYPE i,
      i TYPE i,
      lv_offset TYPE i,
      j TYPE i,
      found TYPE abap_bool.

SPLIT example AT space INTO TABLE words.

word_count = lines( words ).

LOOP AT words INTO word.
  CLEAR unique_chars.
  unique_count = 0.

  DO strlen( word ) TIMES.
    lv_offset = sy-index - 1.
    char = word+lv_offset(1).
    found = abap_false.
   LOOP AT unique_chars INTO DATA(temp_char).
      IF temp_char = char.
        found = abap_true.
        EXIT.
      ENDIF.
    ENDLOOP.

    IF found = abap_false.
      APPEND char TO unique_chars.
      unique_count = unique_count + 1.
    ENDIF.

  ENDDO.

* Display the word and its unique character count
out->write( word ).
out->write( unique_count ).

ENDLOOP.

  ENDMETHOD.
ENDCLASS.

```

# HANA CLOUD

- Before deploying or building the hana hdi tables, remove the data/csv folder and rather import the csv files into the hana cloud tables after creation
- first of all create an HANA cloud application and then assign a hana cloud admin role to user and then create a hana cloud db in the same cf environment
