function addingEventListener(){
    const input = document.getElementById('button');

    function clickALert() {
        alert('I was clicked!');
    }
    input.addEventListener('click', clickAlert);
}