// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(function(ref)
// {
//     return ref.json()
// })
// .then(function(res)
// {
//     console.log(res);
// })

var products;
fetch("https://reqres.in/api/products")
    .then(heelo => heelo.json())
    .then(hii => {
        products = hii.data;
        console.log(products)
        display(products)
        op()
        op1()
        op2()
        op3()
      




    })
function display(data) {
    var ele = data.map(value => {
        return (
            `<tr>
            <td>${value.name}</td>
            <td>${value.year}</td>
            <td>${value.color}</td>
            <td>${value.pantone_value}</td>
            </tr>`

        )
    });
    document.getElementById("td").innerHTML = ele

}
function op() {
    var e = products.map((value) => {
        return `
    <option>${value.name}</option>
    
    `

    }
    );
    document.getElementById("one").innerHTML = e
}
function op1() {
    var ee = products.map((value) => {
        return `<option>${value.year}</option>`

    }
    );
    document.getElementById("two").innerHTML = ee
}
function op2() {
    var ed = products.map((value) => {
        return `<option>${value.color}</option>`

    }
    );
    document.getElementById("three").innerHTML = ed
}
function op3() {
    var ef = products.map((value) => {
        return `<option>${value.pantone_value}</option>`

    }
    );
    document.getElementById("four").innerHTML = ef
}

document.getElementById("search").addEventListener('keyup',function(value)
{
    const searchValue=document.getElementById("search").value;
    var md=products.filter((value) => {
        return value.name.indexOf(searchValue) > -1  //||
        // value.year.toLowerCase().indexOf(searchValue) > -1 ||
        // value.color.toLowerCase().indexOf(searchValue) > -1 ||
        // value.pantone_value.toLowerCase().indexOf(searchValue) > -1;

    });
    // console.log(products);
    // console.log(md)
   display(md)
})


    





