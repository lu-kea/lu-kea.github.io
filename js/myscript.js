//新增数据函数
function add_data(){
    var table=document.getElementById('table');
    //console.log(table);
    //获取插入位置
    var length=table.rows.length;
    //console.log(length);
    var newRom=table.insertRow(length);
    console.log(newRom);

    var nameCell=newRom.insertCell(0);
    var phoneCell=newRom.insertCell(1);
    var actionCell=newRom.insertCell(2);
    console.log(newRom);

    nameCell.innerHTML =' ';
    phoneCell.innerHTML =' ';
    actionCell.innerHTML ='<button onclick="edit_data(this)">编辑</button><button onclick="delete_data(this)">删除</button>';
}

//删除数据函数
function delete_data(button){
    var row=button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

//编辑函数
function edit_data(button){
    var row=button.parentNode.parentNode;
    var name=row.cells[0];
    var phone=row.cells[1];

    var inputName=prompt('请输入姓名');
    var inputPhone=prompt('请输入联系方式');
    if(inputName!=0)
    name.innerHTML=inputName;
    if(inputPhone!=0)
    phone.innerHTML=inputPhone;
}
