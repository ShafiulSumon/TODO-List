function addMore(){
    document.getElementById("error").innerHTML = "";

    let text = document.getElementById("input-text").value;

    if(text==""){
        document.getElementById("error").innerHTML = "Please add some task";
    }
    else{
        let input_text = document.getElementById("lists");
        let li = document.createElement('li');
        li.textContent = text;

        let a = document.createElement('a');
        a.textContent = "(delete)";
        a.href = "javascript:void(0)";
        a.className="remove";
        li.appendChild(a);

        let pos = input_text.firstElementChild;

        if(pos==null){
            input_text.appendChild(li);    
        }
        else{
            input_text.insertBefore(li,pos);
        }
    }
    document.getElementById("input-text").value = "";
}

let btn = document.querySelector('ul');
btn.addEventListener('click',function(e){
    let input_text = document.getElementById('lists');
    let li = e.target.parentNode;
    input_text.removeChild(li);
});