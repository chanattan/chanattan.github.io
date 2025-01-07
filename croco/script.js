var id1 = null;
var id2 = null;

function ani(str) {
	const croc1 = document.getElementById('croc1');
	const croc2 = document.getElementById('croc2');
	const croc3 = document.getElementById('croc3');
	switch (str) {
		case "croc1":
			if (id1 == null) {
				croc1.className = 'wrong';
				id1 = window.setTimeout(function(){
					croc1.className = 'nothing';
					id1 = null;
				},2500);
			}
			break;
		case "croc3":
			if (id2 == null) {
				croc3.className = 'wrong';
				id2 = window.setTimeout(function(){
					croc3.className = 'nothing';
					id2 = null;
				},2500);
			}
			break;
		case "croc2":
			if (id1 != null) {
				window.clearTimeout(id1);
			}
			if (id2 != null) {
				window.clearTimeout(id2);
			}
			croc2.className = 'right';
			croc1.className = 'hidden';
			croc3.className = 'hidden';
			const q = document.getElementById('question');
			q.className = 'hidden';
			const resume = document.getElementById('resume');
			resume.className = 'button';
			const t = document.getElementById('text');
			t.className = 'question';
			break;
	}
}