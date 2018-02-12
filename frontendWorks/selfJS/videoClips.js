$(document).ready(function () {
	
	const videosArray = [{"url":"https://www.wikihow.com/Bat-in-Cricket", "params" : ".m-video"}]
	
	$('#videoList').click(function () {
		for (let videos of videosArray) {
			$.post('/video', {
				url: videos.url,
				params: videos.params
			}, (data) => {
				displayVideos(data)
			})
		}
	});
	
	$('#videoList').click()
	let videoList = $('#videoList');
	
	function displayVideos(totalVideos) {
		$('#videoList').hide();
		$('#preLOADER').show();
		for(let video = 0; video <totalVideos.length; video++) {
			if ( video === 5) continue
			let card = $(`<div class="card" style="margin: 20px;width: 44rem; float: left">
												<a href="http://www.ddca.in/" target="_blank"><img class="card-img-top" style="width: 100%; height: 100%" src="${totalVideos[video]}" alt="Card image cap"></a>
												
											</div>`);
			videoList.append(card);
			if (video === totalVideos.length -1) {
        $('#videoList').show();
        $('#preLOADER').hide();
			}
		}
		videoList.append(`</tbody>
                </table>
              `);
	}
	
})
