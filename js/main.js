//按键监听 音效播放 添加动画
//${e.keyCode} 模板字符串
function play(e){
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`); //获取具有data-key属性的audio标签
    const key=document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio||!key) {
        return;
    }

    key.classList.add('playing'); //为其添加属性 playing
    audio.currentTime=0; //在每一次点击之前重置
    audio.play();
    
}

// 事件
window.addEventListener("keydown",play); //添加事件监听 按键按下去

// 清楚样式渐变
function removeTransition(e){

    if (e.propertyName!=='transform') {
        return;
    }

    // propertyName属性值存在transition时 将playing 移除 即移除transition效果
    e.target.classList.remove('playing');
    
}

const keys = Array.from(document.querySelectorAll('.key')); //将dom转换成真正的数组
keys.forEach(key=>key.addEventListener("transitionend",removeTransition)); 
//遍历数组将其中 监听按键的transitionend时间 动画结束后触发函数removeTransition