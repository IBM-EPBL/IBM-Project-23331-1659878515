# Sprint 3

The following user stories are implemented in this sprint.

- USN-6 : As a user, I can ask questions to the chatbot


- USN-9 : As a patient, I want to sort out donor list


<br/>

---

<br/>

## Users can ask questions to the chatbot
The user can request plasma from individual donors in the donor page

### Sample chat with the chatbot
![ChatbotQuery](https://user-images.githubusercontent.com/81003334/202607600-dafcea3c-b7a9-491e-b64a-06633be4078f.png)

<br/>

## Filter Donor List
Patients can filter donors list based on their blood group

### Default Filter shows donors with all blood groups
![FilterAllGroups](https://user-images.githubusercontent.com/81003334/202607664-1276f447-08d1-4c4b-a798-0424999f7375.jpeg)

### Patients can filter out the donors who match their blood group's antigen
![Filter Matching Groups](https://user-images.githubusercontent.com/81003334/202607653-df7accc7-e3ea-490c-9a41-631fa9b2eaed.jpeg)

<br/>

## The application is dockerized and deployed on IBM Kubernetes Cluster Service
The application is exposed via NodePort and can be accessed by clicking [here](http://159.122.187.24:30888/)
