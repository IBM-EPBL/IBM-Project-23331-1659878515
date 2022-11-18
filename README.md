# Plasma Donor Application

Watch Demonstration Video [here](https://drive.google.com/file/d/190t5DLuwg5XDegypU_YGmrL9PdGcDGIl/view?usp=sharing)

Visit the application [here](http://159.122.187.24:30888/)

## Introduction

Blood is the most essential fluid for survival of human beings. 

According to the survey conducted by World Health Organization (WHO) for the Year 2019, India wants eight crore units of Blood, however solely ten lakhs units are available on the market, that shows the intense shortage of blood in our country. In a more recent study by Joy John Mammen et al. (2022), the total clinical demand of 251 health facilities with 51,562 beds was 474,627 whole blood units. Based on this, the clinical demand for India was estimated at 14.6 million whole blood units, an equivalent of 36.3 donations per 1,000 eligible population. The study indicated a demand and supply gap of 2.5 donations per 1,000 eligible persons which is around one million units.

Even with the rapid technological advancements and social media usage across the world, there is a lack of a quick and easy way to find plasma donors around the locality of the needy. Finding blood donor is a challenging issue almost worldwide, even in developed countries.

So, this project aims to create a web application where the donors register themselves by providing their general and medical information, so that they will be notified when a request for plasma is received from other users residing nearby, having an acceptable blood group.


## Motivation

- During the COVID 19 crisis, the requirement of plasma became a high priority and the donor count was lower than the demand. But now, even though the number of cases are dropping significantly worldwide, the need for plasma donation seems to rise due to spreading of other diseases such as Dengue, Malaria, Influenza, etc. Saving the donor information and helping the needy by notifying the current donors list, would be a helping hand.

- Someone in need might find it difficult to find donors with a similar or acceptable blood group.

- Also, most of the already existing donor applications are meant for specific operating systems such as Android or iOS. So, this app aims to provide a cross-platform solution that can be accessed in any device.

- In this regard, a web application is to be built which would take the donor details, store them and inform them upon a request from a person in need for plasma.


## Project Workflow

- The user interacts with the application.

- Registers by giving the details as a donor.

- The database will have the details of all the donors with different blood groups.

- If a user posts a request, then the concerned blood group donors will get notified about it.


- Setting up Application Environment
    - Create Flask project
    - Work with IBM Cloud CLI, Docker CLI, Sendgrid

- Implementation of Web Application 
   - Create UI to Interact with the application
   - Connect IBM DB2 with Python

- Integration of Sendgrid Service with Python

- Deployment of Cloud Application
   - Containerize the application
   - Upload Image in IBM container directory
   - Deploy on Kubernetes Cluster


## Objectives

- Provide an easy way to find donors quickly.

- Notify all donors nearby so that atleast one of them can immediately reach the patient's location for emergency situations.

- Resolve the imbalance between the demand and supply of plasma donation.

- Save lives by helping people in need of plasma.

- Provide a cross-platform web-based solution so that the app can be accessed from any platform or device.


## Technical Architecture
![download](https://user-images.githubusercontent.com/81003334/190962386-7ca9d0a8-a899-4abb-aeb7-d948ec8262ae.png)



