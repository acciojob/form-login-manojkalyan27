const inps = document.querySelectorAll('input');
const sub = document.querySelector("#sub");
sub.addEventListener("click",getFormvalue);

	function getFormvalue() {
    //Write your code here
    event.preventDefault();
		let firstName = inps[0].value;
		let lastName = inps[1].value;
            alert(firstName+" "+lastName);
}
