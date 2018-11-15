function delArticle(id){
		if(confirm('确定删除该项?')){
			$.ajax({
				type:'POST',
				url:'/articles/deleteArticle',
				data:{id:id},
				dataType:'JSON',
				success:function(data){
					if(data['code'] === 200){
						alert(data['msg']);
						window.location.reload();
					}
				}
			});
		}else{
			return false;
		}
	}