
# NodeJs - ExpressJs - Dynamic MongoDb

Dynamic CRUD for collection.

**Step**:

start mongo database at default port
create new database test

open cmd
 1. npm i
 2. npm run start

**API Test**
Post:*localhost:3500/find*
**POST DATA**

    {
    	"collection": "quiz",
    	"filter": {
    		"group": "thi cuoi ki 1"	
    	},
    	"project": {
    		"quiz": 1
    	}
    }

Post: *localhost:3500/insert*
**POST DATA**

    {
    	"collection": "quiz",
    	"data": {
    		"id": "1124",
    		"quiz": "Châu phi ở đâu?",
    		"group":"thi cuoi ki 1",
    		"type": "multiple choose, 1 correct answer",
    		"answers": [
    			{
    				"isCorrect": true,
    				"answer": "Bán cầu bắc"
    			},
    			{
    				"isCorrect": false,
    				"answer": "Bán cầu nam"
    			},
    			{
    				"isCorrect": false,
    				"answer": "Cả hai bán cầu"
    			}
    		]
    	}
    }

POST *localhost:3500/update*
**POST DATA**

    {
    	"collection": "test",
    	"filter": {
    		"id": "5000"
    	},
    	"data":  { "$set": { "completedAt": "1/1/2019 " } }
    }



