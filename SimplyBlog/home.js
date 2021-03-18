// Click on a close button to hide the current list item.
var close = document.getElementsByClassName('btn btn-danger delete');
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var span = this.parentElement;
        var div1 = span.parentElement;
        var maindiv = div1.parentElement;
        var li = maindiv.parentElement;
        li.style.display = 'None'
    }
}


function AddBlog()
{
    var title = document.getElementById("input_blogname").value;
    var desc = document.getElementById("blog_desc").value;
    var image = document.getElementById("blog_img").value;

    document.getElementById("span_title").style.display= 'none';
        document.getElementById("span_desc").style.display= 'none';
        document.getElementById("span_img").style.display= 'none';

    if(title === undefined || title === null || title === "")
    {
        document.getElementById("span_title").style.display= 'block';
    }
    else if(desc === undefined || desc === null || desc === "")
    {
        document.getElementById("span_desc").style.display= 'block';
    }
    else if(image === undefined || image === null || image === "")
    {
        document.getElementById("span_img").style.display= 'block';
    }
    else
    {
        
        createblog(title, desc, image);
    }
    return false;
}

function createblog(blogtitle, blogdesc, blogimage)
{
    var li = document.createElement('li');   
    var maindiv = document.createElement('div');  

    var div1 = document.createElement('div');  
    div1.innerHTML = blogtitle;
    div1.className = "font-weight-bolder div-title";

    var imgtag = document.createElement('img');  
    imgtag.src = blogimage.replace('C:\\fakepath\\', "images/" );
    imgtag.className = "offset-4";

    var div2 = document.createElement('div');  
    div2.innerHTML = blogdesc;
    div2.className = "text-justify mt-3";

    maindiv.appendChild(div1);
    maindiv.appendChild(imgtag)
    maindiv.appendChild(div2)
    li.appendChild(maindiv)

    document.getElementById('myList').appendChild(li);

}
