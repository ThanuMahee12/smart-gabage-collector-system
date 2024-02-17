#include <Arduino.h>
#if defined(ESP32)
#include <WiFi.h>
#elif defined(ESP8266)
#include <ESP8266WiFi.h>
#endif
#include <Firebase_ESP_Client.h>

//Include Ultrasonic Sensor Library
#include <NewPing.h>

//Provide the token generation process info.
#include "addons/TokenHelper.h"
//Provide the RTDB payload printing info and other helper functions.
#include "addons/RTDBHelper.h"

// Insert your network credentials
// #define WIFI_SSID "newOne"
// #define WIFI_PASSWORD "*Pinthu07$"

#define WIFI_SSID "Babbulu"
#define WIFI_PASSWORD "12345678"

// Insert Firebase project API Key
#define API_KEY "AIzaSyAKE3PXozJDz30Lzk1l3ymw7PT4dKNceL4"

// Insert RTDB URL
#define DATABASE_URL "https://my-sketch-27f56-default-rtdb.asia-southeast1.firebasedatabase.app/"

//Define Firebase Data object
FirebaseData fbdo;

FirebaseAuth auth;
FirebaseConfig config;

unsigned long sendDataPrevMillis = 0;
int count = 0;
bool signupOK = false;

// Define ultrasonic sensor pins
#define TRIGGER_PIN 2
#define ECHO_PIN 4
#define MAX_DISTANCE 100 

// Create ultrasonic sensor object
NewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE);

void setup(){
  Serial.begin(115200);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED){
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  /* Assign the api key (required) */
  config.api_key = API_KEY;

  /* Assign the RTDB URL (required) */
  config.database_url = DATABASE_URL;

  // auth.user.email = "pinthu@gmail.com";
  // auth.user.password = "Pinthu07";

  /* Sign up */
  if (Firebase.signUp(&config, &auth, "", "")){
    Serial.println("ok");
    signupOK = true;
  }
  else{
    Serial.printf("%s\n", config.signer.signupError.message.c_str());
  }

  /* Assign the callback function for the long running token generation task */
  config.token_status_callback = tokenStatusCallback; //see addons/TokenHelper.h
  
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
}

void loop(){
  if (Firebase.ready() && signupOK && (millis() - sendDataPrevMillis > 15000 || sendDataPrevMillis == 0)){
    sendDataPrevMillis = millis();
   
    // Read distance from ultrasonic sensor
    int distance = sonar.ping_cm();
    Serial.println(distance);
    
    // Write distance data to Firebase
    if (Firebase.RTDB.setInt(&fbdo, "ultrasonic/distance_cm", distance)){
      if(distance < 10) {
              Firebase.RTDB.setBool(&fbdo,"Dustbin/1/fill", true);
      }else{
              Firebase.RTDB.setBool(&fbdo,"Dustbin/1/fill", false);
      }
      Serial.println("PASSED: Distance sent to Firebase");
      Serial.println("PATH: " + fbdo.dataPath());
      Serial.println("TYPE: " + fbdo.dataType());
      

    }
    else {
      Serial.println("FAILED: Error sending distance to Firebase");
      Serial.println("REASON: " + fbdo.errorReason());
    }
    
    delay(1000); // Delay before next reading
  }
}


