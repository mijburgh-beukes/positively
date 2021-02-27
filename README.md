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

