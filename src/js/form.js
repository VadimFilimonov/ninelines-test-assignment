let form;

const findElements = () => {
	form = document.querySelector('.form');
};

const onError = (error) => {
	// eslint-disable-next-line no-console
	console.error(error);
};

const onSuccess = (data) => {
	if (!data.message) {
		return;
	}
	// eslint-disable-next-line no-alert
	alert(data.message);
	form.reset();
};

const sendForm = () =>
	fetch(form.action, {
		method: 'post',
		body: new FormData(form),
	});

const onSubmit = (event) => {
	event.preventDefault();
	sendForm()
		.then((response) => response.json())
		.then(onSuccess)
		.catch(onError);
};

const subscribe = () => {
	form.addEventListener('submit', onSubmit);
};

export default () => {
	findElements();
	subscribe();
};
