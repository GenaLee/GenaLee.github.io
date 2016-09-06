var testPage = {

	createElements: function(){
		body = document.body;
		container = document.createElement('div'),
		containerHeader = document.createElement('header');
		headerText = document.createElement('h3');
		testForm = document.createElement('form');
		
	},

  appendElements:function(){
  	body.appendChild(container);
  	container.appendChild(containerHeader);
  	containerHeader.appendChild(headerText);
  	container.appendChild(testForm);
  },


  setElementsAttribute: function(){
  	setBodyAttribute();
  	setContainerAttribute();
  	setContainerHeaderAttribute();
  	setHeaderTextAttribute();
  	setFormAttribute();

   function setBodyAttribute(){
  		body.style.height = '100%';
	  	body.style.width = '100%';
		  body.style.backgroundColor = 'lightgrey';
		  body.style.fontFamily = 'Helvetica, Arial';
  	};
  	

    function setContainerAttribute(){
      container.classList.add('container');
      container.style.width = '70%';
      container.style.margin = '50px auto';
      container.style.backgroundColor = 'white';
      container.style.display = 'block';
      container.style.border = '1px solid black'
    };

   function setContainerHeaderAttribute(){
  	 containerHeader.classList.add('container__header');
  	 containerHeader.classList.add('containerHeader');
  	 containerHeader.style.textAlign = 'center';
   };

   function setHeaderTextAttribute(){
     headerText.classList.add('containerHeader__text');
   	 // headerText.setAttribute('font-size', '14');
   	 headerText.style.fontSize = '22px';
  	 headerText.setAttribute('color', 'black');
  	 headerText.innerHTML = 'Тест по программированию';
   };

   function setFormAttribute(){
   	 testForm.classList.add('container__form');
   	 testForm.classList.add('testForm');
   	 testForm.style.width = '100%';
   };

  },

  createQuestionBlock: function(){
		var questionList = document.createElement('ul');
   	questionList.classList.add('testForm__list');
   	questionList.classList.add('questionList');
   	questionList.style.listStyle = 'none';
		
  	testForm.appendChild(questionList);

   	for (var i = 1; i <= 3; i++){
   		var questionText = document.createElement('li');
   		questionText.classList.add('questionList__text');
   		questionText.classList.add('question');
   		questionText.style.fontSize = '26px';
   		questionText.style.margin = '20px 0';
   		questionText.innerHTML = i + ". Вопрос №" + i;
   		
   		questionList.appendChild(questionText);

   		var answerList = document.createElement('ul');
   		answerList.classList.add('question__answerList');
   		answerList.classList.add('answerList');
   		answerList.style.margin = '20px 0';
   		answerList.style.listStyle = 'none';
   		questionText.appendChild(answerList);

   		for (var k = 1; k <= 3; k++){
   			var answerLi = document.createElement('li');
   			answerLi.classList.add('answerList__answer');
   			answerLi.classList.add('answer');

   			answerList.appendChild(answerLi);

   			var answer = document.createElement('label');
   			answer.classList.add('answer__lablel');
   			answer.style.fontSize = '20px';
   			answer.innerHTML = 'Вариант ответа №' + k;
        answer.style.cursor = 'pointer';
        answer.style.fontWeight = 'normal';

        answerLi.appendChild(answer);

        var answerInput = document.createElement('input');
        answerInput.classList.add('answer__checkbox');
        answerInput.classList.add('checkbox');
        answerInput.setAttribute('type', 'checkbox');
        answerInput.style.float = "left";
        answerInput.style.marginRight = '5px';
        answerInput.style.fontSize = '20px';
        answer.appendChild(answerInput);
   		}
   	}
   
  }

}

testPage.createElements();
testPage.appendElements();
testPage.setElementsAttribute();
testPage.createQuestionBlock();