float level;
float light;

void setup() {
  Serial.begin(9600);

}

void loop() {
  // put your main code here, to run repeatedly:
  level=analogRead(0);
  //light=analogRead(1);
  //light=analogRead(0);
  //Serial.println("Water Level: ");
  Serial.println(level);
  delay(100);
  
  //Serial.println(light);
}
