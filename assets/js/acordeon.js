acordeon.addEventListener('click', function(event){
    console.log(event.target.className);
    if(event.target.className=='acrd__item__nombre'){
        console.log('1212');
        var oldItem=document.querySelector('.acrd__item__nombre.pre__activo');
        oldItem.classList.remove('pre__activo');
        event.target.classList.add('pre__activo');
    };
});