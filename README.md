## Final group project from Dev Academy

Positively is a gamified habit formation app. 

I took up the Scrum Master role and was the main UX/UI developer.     

This app was completed within seven days, from planning and conception to presenting the final working product. We were a team of six bootcamp students, working day and night to complete this app and solidify our learning from the 15 week bootcamp. Our main focus was on learning and working as an agile team. 

I worked mostly on the frontend, with a sprinkling of backend tasks and writing component tests. The bulk of my workload focused on getting the UI up and running using bootstrap. This entailed setting up a bunch of the React components, with myself and others adding more functionality as the project progressed. Other team members did more work on the backend, but I had a good understanding of what was going on. My main focus was getting the product to look professional and be responsive.

### Browser compatibility warning:

The image for the UserDetails component uses the css aspect-ratio property in order to keep the image properly circular regardless of the image's inherent aspect ratio. This css property is still quite new and not widely supported, but will work fine on chrome. Worst case scenario will be the user uploads a non-square image and it renders as an oval on browsers that don't support the feature yet.

### Data object shapes

GET 'api/v1/user/:id' will return the following object:

```
[
    {
        "id": 2,
        "firstName": "Allyson",
        "lastName": "Wonderland",
        "userImage": "Image goes here",
        "totalXp": 0,
        "pw": "abc123",
        "habits": [
            {
                "id": 2,
                "title": "smoking",
                "description": "I know it's bad for me but I enjoy it.",
                "habitIcon": "some icon",
                "totalGoalCount": 0,
                "priority": 1,
                "goalCount": 0
            },
            {
                "id": 3,
                "title": "picking my nose",
                "description": "I also enjoy picking my nose",
                "habitIcon": "some icon",
                "totalGoalCount": 0,
                "priority": 1,
                "goalCount": 0
            }
        ]
    }
]
```

POST 'api/v1/habit' accepts a json

```
{
    "userId": "2",
    "title": "running",
    "description": "30min a day",
    "habitIcon": "some icon",
    "totalGoalCount": 0,
    "priority": 2,
    "goalCount": 0
}
```

