const $jsLevelInputs = $(".js-level-input[data-js='true']");
const $jsLevelValue = $('.js-level-value');
const jsSkillPrice = 200;

const getJSLevel = () => {
	const jsSkills = [...document.querySelectorAll('.js-level-input[data-js="true"]:checked')];

	return jsSkills.length * jsSkillPrice;
};

let jsLevel = getJSLevel();

const updateResult = () => {
	jsLevel = getJSLevel();
	$jsLevelValue.animateNumber(
		{
			number: jsLevel,
			numberStep(now, tween) {
				const flooredNumber = Math.floor(now);
				const target = $(tween.elem);

				target.text(flooredNumber);
			},
		},
		{
			easing: 'swing',
			duration: 1800,
		}
	);
	const indicatorDegree = Math.round((jsLevel * 180) / 1000);
	const levelIndicator = document.querySelector('.js-level-indicator');

	levelIndicator.style.transform = `translateX(calc(-100% + 15px)) rotate(${indicatorDegree}deg)`;
};

updateResult();

$jsLevelInputs.on('input', () => {
	updateResult();
});
