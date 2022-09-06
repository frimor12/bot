const { VK } = require('vk-io');
const request = require("request");
const fs = require('fast-json-stable-stringify');
const https = require('http-signature');
require('dotenv').config();
const vk = new VK({
  token: '9a6dff3b30edfc110eb93b1397228b21043a1d19aa6399a44f2b9017992160b36a05247edea8f154de143',
  pollingGroupId: 197139976
});
const user = new VK({
	token: process.env.TOKEN_USER
});
// 
const utils = {
	sp: (int) => {
		int = int.toString();
		return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join('.').split('').reverse().join('');
	},
	random: (x, y) => {
		return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
	},
	pick: (array) => {
		return array[utils.random(array.length - 1)];
	}
}


var nodejsWeatherApp = require('nodejs-weather-app');

var now = new Date().toLocaleDateString();

const commands = [];

var sperma = '0';
var nz = 'Не задано';
var dz2 = '\n • ';
var dz3 = ' • ';

let users = require('./users.json');

async function savebaze()
{
  require('fs').writeFileSync('./users.json', JSON.stringify(users, null, '\t'));
	return true;
}

let angl = require ('./angl.json')
let fiz = require ('./fiz.json')
let geo = require ('./geo.json')
let geom = require ('./geom.json')
let him = require ('./him.json')
let inf = require ('./inf.json')
let lit = require ('./lit.json')
let mat = require ('./mat.json')
let prof = require ('./prof.json')
let rus = require ('./rus.json')
let his = require ('./his.json')
let obsh = require ('./obsh.json')
let obzh = require ('./obzh.json')




async function savebaze()
{
	require('fs').writeFileSync('./obsh.json', JSON.stringify(obsh, null, '\t'));
	require('fs').writeFileSync('./obzh.json', JSON.stringify(obzh, null, '\t'));
	require('fs').writeFileSync('./his.json', JSON.stringify(his, null, '\t'));
	require('fs').writeFileSync('./rus.json', JSON.stringify(rus, null, '\t'));
	require('fs').writeFileSync('./prof.json', JSON.stringify(prof, null, '\t'));
	require('fs').writeFileSync('./mat.json', JSON.stringify(mat, null, '\t'));
	require('fs').writeFileSync('./lit.json', JSON.stringify(lit, null, '\t'));
	require('fs').writeFileSync('./inf.json', JSON.stringify(inf, null, '\t'));
	require('fs').writeFileSync('./him.json', JSON.stringify(him, null, '\t'));
	require('fs').writeFileSync('./geom.json', JSON.stringify(geom, null, '\t'));
	require('fs').writeFileSync('./geo.json', JSON.stringify(geo, null, '\t'));
	require('fs').writeFileSync('./fiz.json', JSON.stringify(fiz, null, '\t'));
	require('fs').writeFileSync('./angl.json', JSON.stringify(angl, null, '\t'));
	return true;
}


setInterval(async () => {
	await savebaze();
	console.log('saved');
}, 10000);

const { updates } = vk;

updates.startPolling();


updates.on('message', async (message) => {
	if(Number(message.senderId) <= 0) return;
	if(/\[club197139976\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[club197139976\|(.*)\]/ig, '').trim();

  if(!users.find(x=> x.id === message.senderId))
  {
    users.push({
      id: message.senderId,
	  adm: 0,
	  ban: false,
    })
  }
  
  message.user = users.find(x=> x.id === message.senderId)

  const command = commands.find(x=> x[0].test(message.text));
  if(!command) return;

  randomId = utils.random(1, 100)

  message.args = message.text.match(command[0]);
  await command[1](message);
})

const cmd = {
  on: (p, f) => {
    commands.push([p, f]);
  }
}

cmd.on(/^(?:дз)$/i, async(message) => {
  message.send(`Текущее дз:
  Русский 🇷🇺 -  ${rus}
  Алгебра 📈 - ${mat}
  Физика 🌡 - ${fiz}
  Геометрия 📐 - ${geom}
  География 🏞 - ${geo}
  Английский 1 группа 🇬🇧 - ${angl}
  Английский 2 группа 🇬🇧 - ${inf}
  Химия 🧪 - ${him}
  История 📜 - ${his}
  Литература 📔 - ${lit}
  Обществознание 💵 - ${obsh}
  ОБЖ 🔥 - ${obzh}
  Остальное ДЗ 🔇 - ${prof}`);
})


cmd.on(/^(?:русский)\s(.*)$/i, async (message, bot) => {
	if(message.args[1].length >= 999909090900909) message.send(`иди в попу`);

	rus = message.args[1];
	message.send(`Дз по русскому теперь: \n ${rus}`);
});

cmd.on(/^(?:алгебра)\s(.*)$/i, async (message, bot) => {
	if(message.args[1].length >= 999909090900909) message.send(`иди в попу`);

	mat = message.args[1];
	message.send(`Дз по алгебре теперь: \n ${mat}`);
});

cmd.on(/^(?:физика)\s(.*)$/i, async (message, bot) => {
	if(message.args[1].length >= 999909090900909) message.send(`иди в попу`);

	fiz = message.args[1];
	message.send(`Дз по физике теперь: \n ${fiz}`);
});

cmd.on(/^(?:геометрия)\s(.*)$/i, async (message, bot) => {
	if(message.args[1].length >= 999909090900909) message.send(`иди в попу`);

	geom = message.args[1];
	message.send(`Дз по геометрии теперь: \n ${geom}`);
});

cmd.on(/^(?:география)\s(.*)$/i, async (message, bot) => {
	if(message.args[1].length >= 999909090900909) message.send(`иди в попу`);

	geo = message.args[1];
	message.send(`Дз по географии теперь: \n ${geo}`);
});

cmd.on(/^(?:англ1)\s(.*)$/i, async (message, bot) => {
	if(message.args[1].length >= 999909090900909) message.send(`иди в попу`);

	angl = message.args[1];
	message.send(`Дз по английскому 1 группы теперь: \n ${angl}`);
});

cmd.on(/^(?:химия)\s(.*)$/i, async (message, bot) => {
	if(message.args[1].length >= 999909090900909) message.send(`иди в попу`);

	him = message.args[1];
	message.send(`Дз по химии теперь: \n ${him}`);
});

cmd.on(/^(?:история)\s(.*)$/i, async (message, bot) => {
	if(message.args[1].length >= 999909090900909) message.send(`иди в попу`);

	his = message.args[1];
	message.send(`Дз по истории теперь: \n ${his}`);
});

cmd.on(/^(?:англ2)\s(.*)$/i, async (message, bot) => {
	if(message.args[1].length >= 999909090900909) message.send(`иди в попу`);

	inf = message.args[1];
	message.send(`Дз по английскому 2 группы теперь: \n ${inf}`);
});


cmd.on(/^(?:литература)\s(.*)$/i, async (message, bot) => {
	if(message.args[1].length >= 999909090900909) message.send(`иди в попу`);

	lit	= message.args[1];
	message.send(`Дз по литературе теперь: \n ${lit}`);
});

cmd.on(/^(?:общество)\s(.*)$/i, async (message, bot) => {
	if(message.args[1].length >= 999909090900909) message.send(`иди в попу`);

	obsh = message.args[1];
	message.send(`Дз по обществознанию теперь: \n ${obsh}`);
});

cmd.on(/^(?:обж)\s(.*)$/i, async (message, bot) => {
	if(message.args[1].length >= 999909090900909) message.send(`иди в попу`);

	obzh = message.args[1];
	message.send(`Дз по обж теперь: \n ${obzh}`);
});

cmd.on(/^(?:другое)\s(.*)$/i, async (message, bot) => {
	if(message.args[1].length >= 999909090900909) message.send(`иди в попу`);

	prof = message.args[1];
	message.send(`Остальное ДЗ теперь: \n ${prof}`);
});



cmd.on(/^(?:сдз)$/i, async(message) => {

	angl = nz;
	fiz = nz;
	geo = nz;
	geom = nz;
	him = nz;
	inf = nz;
	his = nz;
	lit = nz;
	mat = nz;
	obsh = nz;
	obzh = nz;
	prof = nz;
	rus = nz;
	prof = nz;
	message.send(`все гг`);
});



cmd.on(/^(?:ст)\s(.*)$/i, async (message, bot) => {
	if(message.args[1].length >= 999909090900909) message.send(`иди в попу`);
	message.send(`всем кукуку`);
   	vk.api.messages.send({ peer_id: 2000000000+9, message: `хуй` });
});




cmd.on(/^(?:пг)$/i, async(message) => {;
nodejsWeatherApp.getWeather('Izhevsk').then(val => {
	printWeather(val);
});

function printWeather(weather) {
	message.send(`Всем доброе утро. \n Температура в Ижевске ${weather.main.temp}°C`);
	  setTimeout(() => {
   	vk.api.messages.send({ peer_id: 2000000000+9, message: `Всем доброе утро. \n Температура в Ижевске ${weather.main.temp}°C` });
  }, 28800000)
}
});



cmd.on(/^(?:анек)$/i, async (message, bot) => {
	let anek = utils.pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

	
	message.user.balance -= 1
	
	if(anek === 1)
	{
		message.send(`Пошел мужик служить по контракту сапером. В первый же день перед ним поставили задачу: разминировать участок дороги, усеянный противопехотными минами.
Мужик прибыл на место, снял штаны и насрал на одно из взрывных устройств.
После того, как рассеялась пыль, командир взвода подбежал к мужику и заорал ему на ухо:
- Ты что - долбоеб?!
Ухо не ответило.`);
	}

	if(anek === 2)
	{
		message.send(`Однажды молодая пара очень сильно хотела завести детей. Меняли позы, мази, таблетки, проходили многих врачей, но все безрезультатно. Как-то раз они услышали о знахаре, который живёт неподалеку, они пришли к нему, а он им и говорит: - ''Мужики, вы че совсем охуели?''.`);
	}

	if(anek === 3)
	{
		message.send(`Идет воровской сходняк. Все 'свои' сидят, старый вор с учениками делится.
— Всему я вас научил, всё рассказал, но вот один грех за мной есть, и не могу держать в себе. Только уговор: никому! Пришел я с 8-й ходки, баба мне постель постелила, и не удержался я — лизнул у неё.
— Михалыч, так ты, выходит зашкваренный
— Вот я и говорю, что — никому! Молчок ! А то если я зашкваренный- то вас короновал, выходит и вы зашкаваренные все!
Все задумались.... Бля и правда......... и один самый молодой:
— Мы — могила! Но скажи нам ученикам верным — какая она на вкус–то?
Михалыч облегченно рукой машет:
— Да ничего особенного, такая же как хуй....`);
	}
	
	if(anek === 4)
	{
		message.send(`Секс подобен шахматам:
1. Нужно практиковаться, чтобы стать лучше.
2. Нужно реагировать на каждое движение партнёра.
3. Твоя первая игра была с дедушкой.`);
	}
		
	if(anek === 5)
	{
		message.send(`После экскурсии на свиноферму два городских мальчика, восхищённые
увиденным, возвращаются домой. Старший говорит матери:
— Мама, мы на ферме видели свинью, которая намного толще и жирнее тебя!
Мать в истерике, она даёт подзатыльник своему сыну и начинает горько
плакать.
Младший сын тоже готов расплакаться вместе с мамой. Он пытается
успокоить её, гладит по руке и говорит:
— Успокойся мама… Толще тебя нет ни одной свиньи на свете!`);;
	}
	
	if(anek === 6)
	{
		message.send(`Гуляет девочка с собакой, а мимо идет женщина.
Женщина спрашивает: ''Девочка, а как тебя зовут?''
-Роза
-Какое красивое имя, а почему тебя так назвали?
-Когда я родилась, мой папа подарил моей маме розовое масло, а капелька этого масла упала мне на лоб.
-Какая красивая история, а как зовут твоего песика?
-Хряк
-А почему его так назвали?
-Он свиней ебет`);
	}
	
	if(anek === 7)
	{
		message.send(`Разговор папы с дочкой:
-Доча, если он к тебе полезет - ты сопротивляйся, отказывай ему. Но грудь все-таки дай потрогать
-Пап!
-Что? Дед и так редко к нам заходит`);
	}
	
	if(anek === 8)
	{
		message.send(`Ебет один клоун другого, а режиссер думает: «Блять, что-то съемки "Оно 3" пошли не по плану», но продолжает снимать`);
	}
	
		if(anek === 9)
	{
		message.send(`У нас сегодня в школе из класса выгоняли всех геев. Что дальше было я не знаю.`);
	}
	
		if(anek === 10)
	{
		message.send(`Идут как-то Уинстон Черчилль, койвбой Мальборо, Джэймс Бонд, Петр 1 и говорят: "Бля, пацаны, курить пиздец хочется"`);
	}
	
		if(anek === 11)
	{
		message.send(`— Как вас зовут?
— Дмитрий
— Ух ты! Это в вашу честь назвали форму власти?
— Какую?
— Димакратия`);
	}
	
		if(anek === 12)
	{
		message.send(`Приходит мужик записываться в ККК.
Спрашивает у принимающего:
— Скажите, как вступить в вашу организацию?
— Это просто. Нужно замочить 6 негров и одного кота.-отвечает принимающий.
— А кота за что?
— Поздравляю, вы приняты!`);
	}
	
});	



