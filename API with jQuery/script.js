$.getJSON("http://dummy.restapiexample.com/api/v1/employees", function(response) {
        console.log(response);
        let d=response.data;
        console.log(d);
        let temp="";
        let i=0;
        $.each(d, function (key, value) {
            temp+='<tr>';
            temp+="<td>"+ d[i].id+"</td>";
            temp+="<td>"+ d[i].employee_name+"</td>";
            temp+="<td>"+ d[i].employee_salary+"</td>";
            temp+='</tr>';
            i+=1;

        });
        $("#empt").append(temp);
        console.log(temp)

});