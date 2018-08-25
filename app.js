            // [
            //         { "text": "Programming", "value": 91, "id": 91, "parentid": 0, "children": [{
            //             "text": "Frontend", "value": 911, "id": 911, "parentid": 91, "children": [
            //                 { "text": "Angular 1", "value": 9111, "id": 9111, "parentid": 911 }, 
            //                 { "text": "Angular 2", "value": 9112, "id": 9111, "parentid": 911 },
            //                 { "text": "ReactJS", "value": 9113, "id": 9113, "parentid": 911 }
            //             ]
            //         }, {
            //             "text": "Backend", "value": 912, "id": 912, "parentid": 91, "children": [
            //                 { "text": "C#", "value": 9121, "id": 9121, "parentid": 912 },
            //                 { "text": "Java", "value": 9122, "id": 9122, "parentid": 912 }, 
            //                 { "text": "Python", "value": 9123, "id": 9123, "parentid": 912 }
            //             ]
            //         }]
            //     }, 
            //     {
            //         "text": "Networking", "value": 92, "id": 92, "parentid": 0, "children": [{
            //             "text": "Internet", "value": 921, "id": 921, "parentid": 92 }, 
            //             { "text": "Security", "value": 922, "id": 922, "parentid": 92 }
            //         ]
            //     }
            // ]
var arr = [

    {'text': 'Programming', 'value': 91, 'id': 91, 'parentid': 0},
    {'text': 'Frontend', 'value': 911, 'id': 911, 'parentid': 91},
    {'text': 'Angular 1', 'value': 9111 , 'id': 9111, 'parentid': 911},
    {'text': 'Angular 2', 'value': 9112 , 'id': 9111, 'parentid': 911},
    {'text': 'ReactJS', 'value': 9113, 'id': 9113, 'parentid': 911},
    {'text': 'Backend', 'value': 912, 'id': 912, 'parentid': 91},
    {'text': 'C#', 'value': 9121 , 'id': 9121, 'parentid': 912},
    {'text': 'Java', 'value': 9122 , 'id': 9122, 'parentid': 912},
    {'text': 'Python', 'value': 9123, 'id': 9123, 'parentid': 912},
    {'text': 'Networking', 'value': 92, 'id': 92, 'parentid': 0},
    {'text': 'Internet', 'value': 921 , 'id': 921, 'parentid': 92},
    {'text': 'Security', 'value': 922 , 'id': 922, 'parentid': 92}
];

unflatten = function( array, parent, tree ){
   
    tree = typeof tree !== 'undefined' ? tree : [];
    parent = typeof parent !== 'undefined' ? parent : { id: 0 };
        
    var children = _.filter( array, function(child){ return child.parentid == parent.id; });
    
    if( !_.isEmpty( children )  ){
        if( parent.id == 0 ){
           tree = children;   
        }else{
           parent['children'] = children
        }
        _.each( children, function( child ){ unflatten( array, child ) } );                    
    }
    
    return tree;
}

tree = unflatten( arr );
var myJSON = JSON.stringify(tree);

//xmlhttp.open("GET", "json_demo.txt", true);

console.log(myJSON);
// document.body.innerHTML = "<pre>" + (JSON.stringify(tree, null, " "))