(function (){
	var ue = UE.getEditor('container');

	$('body').on("click" , '#save' , function(e){
		e.preventDefault();
		let title = $('#title').val(),
			content = ue.getContent();
		$.ajax({
			type:'POST',
			url:'/articles/addArticle',
			data:{title:title,content:content},
			dataType:'JSON',
			success:function(data){
				if(data['code'] === 200){
					alert("提交成功");
					//location.href = '/users/queryAll';
				}
			}
		});
	});
})()