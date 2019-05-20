// Из списка навыков выбираем js, отмеченные галкой
var $jsLevelInputs = $('.js-level-input[data-js="true"]');
// Результат помещаем сюда
var $jsLevelValue = $('.js-level-value');
// Каждому навыку назначаем условную цену в 200
var jsSkillPrice = 200;

// Конечным результатом будет произведение двух последних
var getJSLevel = function() {
    var jsSkills = document.querySelectorAll('.js-level-input[data-js="true"]:checked');
    return jsSkills.length * jsSkillPrice;
}

var jsLevel = getJSLevel();

// Для анимации результата используем готовую библиотеку jquery.animate-number
// animateNumber accepts same arguments, as animate does
// it adds only 'number' and 'numberStep' params

var updateResult = function() {
    // Обновляем переменную
    jsLevel = getJSLevel();

    $jsLevelValue.animateNumber(
        {
          number: jsLevel,
      
          // optional custom step function
          // using here to keep '%' sign after number
          numberStep: function(now, tween) {
            var floored_number = Math.floor(now),
                target = $(tween.elem);
            target.text(floored_number);
          }
        },
        {
          easing: 'swing',
          duration: 1800
        }
    );
    // По пропорции вычисляем угол
    var indicatorDegree = Math.round(jsLevel * 180 / 1000);
    // Назначаем стили стрелке индикатора
    document.querySelector('.js-level-indicator').style.transform = "translateX(calc(-100% + 15px)) rotate(" + indicatorDegree + "deg)";
}

updateResult();

// Если значение навыка по js поменяется - индикатор сменит свое значение
$jsLevelInputs.on('input', function() {
    updateResult();
});