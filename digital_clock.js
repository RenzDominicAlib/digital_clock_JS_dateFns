const clock = document.querySelector('.clock');


		const tick = function(){
			const now = new Date();
			const hour = now.getHours();
			const mins = now.getMinutes();
			const seconds = now.getSeconds();
			let dateToday = dateFns.format(now, 'dddd, Do of MMMM YYYY');
			// console.log(dateToday);

			let htmlPM = `
			<span>  ${hour - 12}  </span>
			<span>:</span>
			<span>  ${mins}  </span>
			<span>:</span>
			<span>  ${seconds}  </span>
			<span>PM</span><br>
			<p>${dateToday}</p>
			`
			let htmlAM = `
			<span>  ${hour}  </span>
			<span>:</span>
			<span>  ${mins}  </span>
			<span>:</span>
			<span>  ${seconds}  </span>
			<span>AM</span><br>
			<p>${dateToday}</p>
			`

			if (hour >= 12) {
				clock.innerHTML = htmlPM;
			}
			else{
				clock.innerHTML = htmlAM;
			}
		};

		setInterval(tick, 1000);

