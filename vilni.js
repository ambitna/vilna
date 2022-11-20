(function () {
    'use strict';
    let index = 0;

    const selector = {
        $button: document.querySelector('a'),
        $one: document.querySelector('.one'),
        $two: document.querySelector('.two'),
        $three: document.querySelector('.three'),
    };
   
    showBlock()
    selector.$button.addEventListener('click', function (event) {
        event.preventDefault();
        index++;
        showBlock();
    });

    function changeDisplay($node, value) {
        $node.style.display = value;
        return $node;
    }

    function isHidden($node) {
        return window.getComputedStyle($node).display === 'none';
    }
    
    function showBlock() {
        switch(index){
            case 0:
                changeDisplay(selector.$one, 'block');
                changeDisplay(selector.$two, 'none');
                changeDisplay(selector.$three, 'none');
                return;
            case 1:
                changeDisplay(selector.$one, 'none');
                changeDisplay(selector.$two, 'block');
                changeDisplay(selector.$three, 'none');
                return;
            case 2:
                changeDisplay(selector.$one, 'none');
                changeDisplay(selector.$two, 'none');
                changeDisplay(selector.$three, 'block');
                index = 0;
                return;
        }
    } 

}());


