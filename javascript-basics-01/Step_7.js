
function mix(){
    shoe_sizes = document.getElementById("shoe_size").value;
    birth = document.getElementById("year").value;
    product = (shoe_sizes * 2 + 5) * 50;
    finish = birth - product + 1766;
    document.write(finish)



}



