"use strict";
//
// For development only, queries for testing and debugging
//
function useTestQuery($scope) {

    $scope.q =  {
        description: "Find all wins",
        className:"Fighters",
        op:"$and",
        nodes: [
            { prop:"lastName", val:"Jones", op:"$e" }
        ]
    }

    $scope.q2 =  {
        description: "Find all wins",
        className:"Fighters",
        op:"$and",
        nodes: [
            {
                op:"$or",
                nodes: [
                    { prop:"firstName", val:"John", op:"$e" },
                    { prop:"lastName", val:"^someText", op:"$regex", options:"" }
                ]
            },
            { prop:"campObjectId", val: {className:"Camps","objectId":"wlACM6pMCv"}, op:"$e" },
            { prop:"birthDate", val: { __type:"Date", iso:"2013-01-01T12:00:00.000Z" }, op:"$e" },
            {
                op:"$and",
                nodes: [
                    { prop:"wins", val:5, op:"$gte" },
                    { prop:"wins", val:72, op:"$lt" }
                ]
            }
        ]
    }

    $scope.q11 =  {
        className:"Fighters",
        op:"$and",
        nodes: [

            { prop:"losses", val:1, op:"$e" },
            { prop:"losses", val:4, op:"$e" },
            { prop:"firstName", val:"Tony", op:"$e" },
                { prop:"losses", val:2, op:"$lt" },
                { prop:"losses", val:3, op:"$gt" }
        ]
    }

    $scope.q1 =  {
        className:"Fighters",
        op:"$and",
        nodes: [
            { prop:"firstName", val:"Tony", op:"$e" },
            { prop:"losses", val:1, op:"$e" },
            { prop:"losses", val:2, op:"$lt" },
            {
                op:"$or",
                nodes: [
                    { prop:"lastName", val:"John", op:"$e" },
                    { prop:"wins", val:3, op:"$e" },
                    { prop:"wins", val:4, op:"$lt" },
                    {
                        op:"$and",
                        nodes: [
                            { prop:"lastName", val:"Smith", op:"$e" },
                            { prop:"draws", val:5, op:"$e" },
                            { prop:"draws", val:6, op:"$gte" },
                            { prop:"draws", val:7, op:"$lte" }
                        ]
                    }
                ]
            }
        ]
    }
}

