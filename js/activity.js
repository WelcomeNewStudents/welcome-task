let json = {
	title:[
		'开会需要准备什么东西？1',
		'开会需要准备什么东西？2',
		'开会需要准备什么东西？3',
		'开会需要准备什么东西？4',
		'开会需要准备什么东西？5',
		'开会需要准备什么东西？6',
		'开会需要准备什么东西？7',
		'开会需要准备什么东西？8',
		'开会需要准备什么东西？9',
		'开会需要准备什么东西？10',
		'开会需要准备什么东西？11',
		'开会需要准备什么东西？12',
		'效果13',
		'效果14',
		'效果15',
		'效果16',
		'效果17',
		'效果18',
		'效果19',
		'效果20',
		'效果21',
		'效果22',
		'效果23',
		'效果24',
		'效果25',
		'效果26',
		'效果27',
		'效果28',
		'效果29',
		'效果30',
		'效果31',
		'效果32',
		'效果33',
		'效果34',
		'效果35',
		'效果36',
		'效果37',
		'效果38',
		'效果39',
		'效果40',
		'效果41',
		'效果42',
		'效果43',
		'效果44',
		'效果45',
		'效果46',
		'效果47',
		'效果48',
		'效果49',
		'效果50',
		'效果51',
		'效果52',
		'效果53',
		'效果54',
		'效果55',
		'效果56',
		'效果57',
		'效果58',
		'效果59',
		'效果60',
		'效果61',
		'效果62',
		'效果63',
		'效果64',
		'效果65',
		'效果66',
		'效果67',
		'效果68',
		'效果69',
		'效果70',
		'效果71',
		'效果72',
		'效果73',
		'效果74',
		'效果75',
		'效果76',
		'效果77',
		'效果78',
		'效果79',
		'效果80',
		'效果81',
		'效果82',
		'效果83',
		'效果84',
		'效果85',
		'效果86',
		'效果87',
		'效果88',
		'效果89',
		'效果90',
		'效果91',
		'效果92',
		'效果93',
		'效果94'
	],
	questioner: [
		'小红',
		'小红',
		'小红',
		'小红',
		'小红',
		'小红',
		'小红',
		'小红',
		'小红',
		'小红',
		'小蓝',
		'小蓝',
		'小蓝',
		'小蓝',
		'小蓝',
		'小蓝',
		'小蓝',
		'小蓝',
		'小蓝',
		'明明',
		'明明',
		'明明',
		'明明',
		'明明',
		'明明',
		'明明',
		'明明',

	],
	time: [
		'2016-10-1',
		'2016-10-1',
		'2016-10-1',
		'2016-10-1',
		'2016-10-1',
		'2016-10-1',
		'2016-10-1',
		'2016-10-1',
		'2016-10-1',
		'2016-10-1',
		'2016-10-1',
		'2016-10-1',
		'2016-10-1',
		'2016-10-1',
		'2016-10-1',
		'2016-10-1',
		'2016-10-1',
		'2016-10-1',
		'2016-10-1',
		'2016-10-1',
		'2016-10-1'

	],
	reply: [
		'啊啊啊啊啊',
		'啊啊啊啊啊',
		'啊啊啊啊啊',
		'啊啊啊啊啊',
		'啊啊啊啊啊',
		'啊啊啊啊啊',
		'啊啊啊啊啊',
		'啊啊啊啊啊',
		'啊啊啊啊啊',
		'啊啊啊啊啊',
		'啊啊啊啊啊',
		'啊啊啊啊啊',
		'啊啊啊啊啊'

	]
};
page({
	id:'div1',
	nowNum: 3,
	allNum:Math.ceil(json.title.length/11),
	//页面显示的回调函数
	callBack: function(now,all) { 
		let num = now * 11 < json.title.length ? 11 : json.title.length - (now - 1) * 11; 
		let oUl = document.getElementById('ul1');
		let aLi = oUl.getElementsByTagName('li');

		if (oUl.innerHTML == '') {
			for (let i = 0; i < num; i++) {
				let oLi = document.createElement('li');
				oLi.innerHTML = json.title[(now - 1) * 11 + i];
				oUl.appendChild(oLi);
				//点击放大效果
				oLi.onclick = function () {
				    openNew();
				    console.log(1)
				}
				function openNew() {
				    let oMask = document.createElement("div");
				    oMask.id = "mask";
				    document.body.appendChild(oMask);
				    let oBig = document.createElement("div");
				    oBig.id = "fc_big";
				    document.body.appendChild(oBig);
				    //要加入的内容在下面写
				    oBig.innerHTML = "<div class = 'big_close'></div><div class = 'question_mark'></div><div class = big_qes></div><div class = 'reply'>提问回复()</div><div class = 'ul_container2'><ul id = 'ul4'></ul><ul id = 'ul5'></ul><ul id = 'ul6'></ul></div><div id = 'div2'></div> "
				    let oClose = document.querySelector('.big_close');
				    oMask.onclick = oClose.onclick = function () {
				    document.body.removeChild(oMask);
				    document.body.removeChild(oBig);

				    }

				}

			}

		} else {
			for (let i = 0; i < num; i++) {
				aLi[i].innerHTML = json.title[(now - 1) * 11 + i];
				//最后的那一页不知道怎么去除标签了.所以还是显示的11个;
			}
		}
		//questioner
		let oUl2 = document.getElementById('ul2');
		let aLi2 = oUl2.getElementsByTagName('li');
		if (oUl2.innerHTML == '') {
			for (let i = 0; i < num; i++) {
				let oLi = document.createElement('li');
				oLi.innerHTML = json.questioner[(now - 1) * 11 + i];
				oUl2.appendChild(oLi);
			}

		} else {
			for (let i = 0; i < num; i++) {
				aLi2[i].innerHTML = json.questioner[(now - 1) * 11 + i];
				//最后的那一页不知道怎么去除标签了.所以还是显示的11个;
			}
		}
		//time
		let oUl3 = document.getElementById('ul3');
		let aLi3 = oUl3.getElementsByTagName('li');
		if (oUl3.innerHTML == '') {
			for (let i = 0; i < num; i++) {
				let oLi = document.createElement('li');
				oLi.innerHTML = json.time[(now - 1) * 11 + i];
				oUl3.appendChild(oLi);
			}

		} else {
			for (let i = 0; i < num; i++) {
				aLi3[i].innerHTML = json.time[(now - 1) * 11 + i];
				//最后的那一页不知道怎么去除标签了.所以还是显示的11个;
			}
		}

	}

});


function page(opt) {
	if(!opt.id){
		return false;
	}
	let obj = document.getElementById(opt.id);
	let nowNum = opt.nowNum || 1;
	let allNum = opt.allNum || 5;
	let callBack = opt.callBack || function() {

	}
	//上一页
	if (nowNum >= 2) {
		let oA = document.createElement('a');
		oA.href = '#' + (nowNum - 1);
		oA.id = 'paging_prev';
		obj.appendChild(oA);

	}
	if (nowNum == 1) {
		let oA = document.createElement('a');
		oA.removeAttribute('href');
		oA.id = 'paging_prev_not';
		obj.appendChild(oA);
	}

	if (allNum<=5) {
		//当前数据的页数小于5页;
		for (let i = 1; i <= allNum; i++) {
			let oA = document.createElement('a');
			oA.href = '#' + i;
			// oA.id = 'paging_num';
			if(nowNum == i) {
				oA.innerHTML = i;
				oA.id = "paging_num";
				// console.log(oA.id);
			} else {
				oA.innerHTML = i;
				oA.id = "paging_num_oth";
			}
			
			obj.appendChild(oA);
		}
	} else {
		for (let i = 1; i <= 5; i++) {
			let oA = document.createElement('a');
			//处理当前页为1,2;
			if(nowNum == 1 || nowNum == 2) {
				oA.href = '#' + i;
				if (nowNum == i) {
					oA.id = "paging_num";
					oA.innerHTML = i;
				} else {
					oA.id = "paging_num_oth";
					oA.innerHTML = i;
				}	
			} else if ((allNum - nowNum) == 0|| (allNum - nowNum) == 1) {
				//处理最后两页
				oA.href = '#' + (allNum - 5 + i);
				if ((allNum - nowNum) == 0 && i == 5) {
					//最后一项
					oA.id = "paging_num";
					oA.innerHTML = (allNum - 5 + i);
				} else if (allNum - nowNum == 1 && i == 4) {
					//倒数第二页
					oA.id = "paging_num";
					oA.innerHTML = (allNum - 5 +i);
				}
				else {
					oA.id = "paging_num_oth";
					oA.innerHTML = allNum - 5 +i;
				}
			}
			else {
				oA.href = '#' + (nowNum - 3 +i);
				if (i == 3) {
					oA.id = "paging_num";
					oA.innerHTML = (nowNum - 3 +i);
				} else {
					oA.id = "paging_num_oth";
					oA.innerHTML = nowNum - 3 +i;
				}
			}			
			obj.appendChild(oA);
		}
	}
	//下一页
	if ((allNum - nowNum) >= 1) {
		let oA1 = document.createElement('a');
		oA1.href = '#' + (nowNum + 1);
		// oA1.innerHTML = '下一页';
		oA1.id = 'paging_next';
		obj.appendChild(oA1);
	}
	//下一页不可点击
	if ((allNum - nowNum) == 0) {
		let oA1 = document.createElement('a');
		//oA1.href = ''
		oA1.id = 'paging_next_not';

		oA1.removeAttribute('href');
		obj.appendChild(oA1);
	}

	callBack(nowNum,allNum);
	//添加锚链接
	let aA = obj.getElementsByTagName('a');
	for (let i = 0; i < aA.length; i++) {
		aA[i].onclick = function() {
			let nowNum = parseInt(this.getAttribute('href').substring(1));
			
			obj.innerHTML = '';
			page({
				id: opt.id,
				nowNum: nowNum,
				allNum: allNum,
				callBack: callBack
			});
			return false;//阻止url的#...
		};
	}
}





//点击放大,分页,模仿上面得到page函数
// page2({
// 	id:'div2',
// 	nowNum: 3,
// 	allNum:Math.ceil(json.reply.length/7),
// 	//页面显示的回调函数
// 	callBack: function(now,all) { 
// 		let num = now * 7 < json.reply.length ? 7 : json.reply.length - (now - 1) * 7; 
// 		let oUl = document.getElementById('ul1');
// 		let aLi = oUl.getElementsByTagName('li');

// 		if (oUl.innerHTML == '') {
// 			for (let i = 0; i < num; i++) {
// 				let oLi = document.createElement('li');
// 				oLi.innerHTML = json.reply[(now - 1) * 7 + i];
// 				oUl.appendChild(oLi);
// 				//点击放大效果


// 			}

// 		} else {
// 			for (let i = 0; i < num; i++) {
// 				aLi[i].innerHTML = json.reply[(now - 1) * 7 + i];
// 				//最后的那一页不知道怎么去除标签了.所以还是显示的7个;
// 			}
// 		}
// 		//questioner
// 		let oUl2 = document.getElementById('ul2');
// 		let aLi2 = oUl2.getElementsByTagName('li');
// 		if (oUl2.innerHTML == '') {
// 			for (let i = 0; i < num; i++) {
// 				let oLi = document.createElement('li');
// 				oLi.innerHTML = json.questioner[(now - 1) * 7 + i];
// 				oUl2.appendChild(oLi);
// 			}

// 		} else {
// 			for (let i = 0; i < num; i++) {
// 				aLi2[i].innerHTML = json.questioner[(now - 1) * 7 + i];
// 				//最后的那一页不知道怎么去除标签了.所以还是显示的7个;
// 			}
// 		}
// 		//time
// 		let oUl3 = document.getElementById('ul3');
// 		let aLi3 = oUl3.getElementsByTagName('li');
// 		if (oUl3.innerHTML == '') {
// 			for (let i = 0; i < num; i++) {
// 				let oLi = document.createElement('li');
// 				oLi.innerHTML = json.time[(now - 1) * 7 + i];
// 				oUl3.appendChild(oLi);
// 			}

// 		} else {
// 			for (let i = 0; i < num; i++) {
// 				aLi3[i].innerHTML = json.time[(now - 1) * 7 + i];
// 				//最后的那一页不知道怎么去除标签了.所以还是显示的11个;
// 			}
// 		}




// 	}

// });
// function page2(opt) {
// 	if(!opt.id){
// 		return false;
// 	}
// 	let obj = document.getElementById(opt.id);
// 	let nowNum = opt.nowNum || 1;
// 	let allNum = opt.allNum || 5;
// 	let callBack = opt.callBack || function() {

// 	}
// 	//上一页
// 	if (nowNum >= 2) {
// 		let oA_big = document.createElement('a');
		
// 		oA_big.href = '#' + (nowNum - 1);
// 		oA_big.id = 'paging_prev2';
// 		console.log(oA_big);
// 		obj.appendChild(oA_big);

// 	}
// 	if (nowNum == 1) {
// 		let oA_big = document.createElement('a');
// 		oA_big.removeAttribute('href');
// 		oA_big.id = 'paging_prev_not';
// 		obj.appendChild(oA_big);
// 	}

// 	if (allNum<=5) {
// 		//当前数据的页数小于5页;
// 		for (let i = 1; i <= allNum; i++) {
// 			let oA_big = document.createElement('a');
// 			oA_big.href = '#' + i;
// 			// oA_big.id = 'paging_num';
// 			if(nowNum == i) {
// 				oA_big.innerHTML = i;
// 				oA_big.id = "paging_num";
// 				// console.log(oA_big.id);
// 			} else {
// 				oA_big.innerHTML = i;
// 				oA_big.id = "paging_num_oth";
// 			}
			
// 			obj.appendChild(oA_big);
// 		}
// 	} else {
// 		for (let i = 1; i <= 5; i++) {
// 			let oA_big = document.createElement('a');
// 			//处理当前页为1,2;
// 			if(nowNum == 1 || nowNum == 2) {
// 				oA_big.href = '#' + i;
// 				if (nowNum == i) {
// 					oA_big.id = "paging_num";
// 					oA_big.innerHTML = i;
// 				} else {
// 					oA_big.id = "paging_num_oth";
// 					oA_big.innerHTML = i;
// 				}	
// 			} else if ((allNum - nowNum) == 0|| (allNum - nowNum) == 1) {
// 				//处理最后两页
// 				oA_big.href = '#' + (allNum - 5 + i);
// 				if ((allNum - nowNum) == 0 && i == 5) {
// 					//最后一项
// 					oA_big.id = "paging_num";
// 					oA_big.innerHTML = (allNum - 5 + i);
// 				} else if (allNum - nowNum == 1 && i == 4) {
// 					//倒数第二页
// 					oA_big.id = "paging_num";
// 					oA_big.innerHTML = (allNum - 5 +i);
// 				}
// 				else {
// 					oA_big.id = "paging_num_oth";
// 					oA_big.innerHTML = allNum - 5 +i;
// 				}
// 			}
// 			else {
// 				oA_big.href = '#' + (nowNum - 3 +i);
// 				if (i == 3) {
// 					oA_big.id = "paging_num";
// 					oA_big.innerHTML = (nowNum - 3 +i);
// 				} else {
// 					oA_big.id = "paging_num_oth";
// 					oA_big.innerHTML = nowNum - 3 +i;
// 				}
// 			}			
// 			obj.appendChild(oA_big);
// 		}
// 	}
// 	//下一页
// 	if ((allNum - nowNum) >= 1) {
// 		let oA1 = document.createElement('a');
// 		oA1.href = '#' + (nowNum + 1);
// 		// oA1.innerHTML = '下一页';
// 		oA1.id = 'paging_next';
// 		obj.appendChild(oA1);
// 	}
// 	//下一页不可点击
// 	if ((allNum - nowNum) == 0) {
// 		let oA1 = document.createElement('a');
// 		//oA1.href = ''
// 		oA1.id = 'paging_next_not';

// 		oA1.removeAttribute('href');
// 		obj.appendChild(oA1);
// 	}

// 	callBack(nowNum,allNum);
// 	//添加锚链接
// 	let aA = obj.getElementsByTagName('a');
// 	for (let i = 0; i < aA.length; i++) {
// 		aA[i].onclick = function() {
// 			let nowNum = parseInt(this.getAttribute('href').substring(1));
			
// 			obj.innerHTML = '';
// 			page({
// 				id: opt.id,
// 				nowNum: nowNum,
// 				allNum: allNum,
// 				callBack: callBack
// 			});
// 			return false;//阻止url的#...
// 		};
// 	}
// }