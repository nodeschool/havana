
/*
Angular.js application aimed at rendering NodeSchool homepage.

Initially developed for NodeSchool Havana 2016 .

Copyright (c) 2016 Olemis Lang <olemis@gmail.com> Twitter: @olemislc
*/

;(function() {

  var app = angular.module('NSHome', ['pascalprecht.translate']);

  TRANSLATIONS = {
    es : {CHAPTER_NAME : 'NodeSchool Habana',
          CHAPTER_DESC : 'El capítulo cubano de NodesSchool.io',
          LEARN_CODING : 'Aprender Node',
          LEARN_CODING_TEXT : 'Únete a nosotros y aprende a programar.  Te enseñaremos los conceptos básicos de Node.js (y un poco más).  Todo será más fácil si ya conoces JavaScript, pero no es un requisito pues, de no ser así, también te podemos ayudar.',
          SELF_GUIDED : 'A tu ritmo',
          SELF_GUIDED_TEXT : 'Puedes resolver los ejercicios al ritmo que prefieras.  Nada de charlas aburridas.  Podrás seguir aprendiendo después de los talleres pues todos los retos son software libre y se encuentran disponibles en línea en <a href="http://nodeschool.io/">nodeschool.io</a>',
          FOR_EVERYONE : 'Para todos',
          FOR_EVERYONE_TEXT : 'Creemos que programar es algo genial, así que todos son bienvenidos a nuestros talleres.  Para mantener un ambiente favorable para la realización del evento esperamos el buen trato entre todos los participantes y el respeto del <a href="https://github.com/nodeschool/havana/blob/master/Code_of_Conduct.es.md">Código de conducta</a>.',
          SIGNUP : '¡Únete a la aventura!',
          PLAN_NEXT : '¿Quieres tener otro evento de NodeSchool en La Habana? <br/> Ayuda a planearlo o muestra tu interés en <a href="https://github.com/nodeschool/havana/issues">GitHub</a>.',
          JOIN_NEXT : 'El próximo taller NodeSchool Habana tendrá lugar',
          DATE_NEXT : 'el miércoles 27 de abril del 2016 de 11h a 17h30',
          VENUE_NEXT : 'en <a href="http://cubaconf.org/location">la sede de CubaConf</a>',
          JOIN_US : '¡ Participa !',
          CONTRIBUTE : '¿ Preguntas ? ¿ Sugerencias ? ¿ Quieres ayudar ?',
          CONTRIBUTE_TEXT : 'Crea un <span lang="en">issue</span> en <a href="https://github.com/nodeschool/havana">GitHub</a> y únete a la discusión.',
          NO_GITHUB : 'Si no estás en GitHub todavía, abre una <a href="https://github.com/join">cuenta gratis</a> y consulta el taller <a href="http://nodeschool.io/#git-it">Git-it</a>, el cual te ayudará a dar tus primeros pasos con el sistema de control de versiones.',
          CONTACT_US : 'Puedes contactarnos también en Twitter : <a href="https://twitter.com/NodeSchoolCuba">@NodeSchoolCuba</a>',
          COPYRIGHT: 'Todo el HTML, CSS, imágenes y diseño estan basados en las páginas del <a href="http://nodeschool.io/paris">NodeSchool Paris</a>, a su vez <a href="http://nodeschool.io/berlin">derivado de NodeSchool Berlin</a>, a su vez <a href="http://github.com/pikkupanda/pikkupanda.github.io">derivado de pikkupanda.de</a>, a su vez <a href="https://github.com/maxogden/csvconf.com">derivado de csvconf.com</a>, el cual  <a href="https://github.com/sudomesh/peoplesopen-front">surgió a partir de PeoplesOpen.Net</a> el cual, a su vez, surgió a partir del <a href="http://martini.codegangsta.io/">tema de Martini</a>, reutilizado en todos los casos bajo los términos de la licencia MIT. El cuento es un poco largo. Sigue escribiéndolo haciendo un fork de <a href="https://github.com/nodeschool/havana">este sitio en GitHub</a>. La imágen de fondo se distribuye bajo los términos de la licencia <a href="http://creativecommons.org/licenses/by-sa/2.5/">CC BY-SA 2.5</a> por <a href="http://commons.wikimedia.org/wiki/File:2006-09-19_Berlin_Brandenburger_Tor.jpg">Stephan Czuratis</a>. Los íconos son de <a href="http://www.entypo.com/">Daniel Bruce</a>, y se utilizan bajo los términos de la licencia <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>.'
          },
    en : {CHAPTER_NAME : 'NodeSchool Havana',
          CHAPTER_DESC : 'The Cuban chapter of NodeSchool.io',
          LEARN_CODING : 'Learn Coding',
          LEARN_CODING_TEXT : 'Join us and learn coding with us. You are going to learn the basics of Node.js. It’s a plus if you know some JavaScript beforehand, but if not we can help you out.',
          SELF_GUIDED : 'Self-Guided',
          SELF_GUIDED_TEXT : 'You will go through a set of self-paced challenges. No boring talks. You can continue learning after the event since all challenges are Open Source and available online on <a href="http://nodeschool.io/">nodeschool.io</a>',
          FOR_EVERYONE : 'For Everyone',
          FOR_EVERYONE_TEXT : 'We think coding is awesome and everyone should feel welcome at our event. This includes that we are expecting all participants to be awesome to each other and respect the <a href="https://github.com/nodeschool/berlin/blob/master/codeofconduct.md">Code of Conduct</a>.',
          SIGNUP : 'Join the Adventure!',
          PLAN_NEXT : 'Want to have another NodeSchool in Havana? Help planing it or show interest at <a href="https://github.com/nodeschool/havana/issues">GitHub</a>.',
          JOIN_NEXT : 'The next NodeSchool will be on',
          DATE_NEXT : 'Wednesday April 27th, 2016 from 11h to 17h30',
          VENUE_NEXT : 'at <a href="http://cubaconf.org/location">the venue of CubaConf</a>',
          JOIN_US : 'Join us',
          CONTRIBUTE : 'Questions? Want to help out?',
          CONTRIBUTE_TEXT : 'Just open an issue on <a href="https://github.com/nodeschool/havana">GitHub</a>',
          NO_GITHUB : 'If you are not on GitHub yet, create a <a href="https://github.com/join">free account</a> and check out the <a href="http://nodeschool.io/#git-it">Git-it</a> workshop. It will help you to get started.',
          CONTACT_US : 'Follow us on Twitter : <a href="https://twitter.com/NodeSchoolCuba">@NodeSchoolCuba</a>',
          COPYRIGHT: 'HTML, CSS, images, and design are based on a design <a href="http://github.com/nodeschool/paris">forked from NodeSchool Paris</a>, which was, in turn, <a href="http://github.com/pikkupanda/pikkupanda.github.io">forked from pikkupanda.de</a> which was , in turn, <a href="https://github.com/maxogden/csvconf.com">forked from csvconf.com</a> which was, in turn, <a href="https://github.com/sudomesh/peoplesopen-front">forked from PeoplesOpen.Net</a> which was, in turn, forked from <a href="http://martini.codegangsta.io/">Martini’s template</a>, reused here under the MIT License. It’s a long story. Continue writing it by forking this site on <a href="https://github.com/nodeschool/berlin">GitHub</a>. The background picture is <a href="http://creativecommons.org/licenses/by-sa/2.5/">CC BY-SA 2.5</a> by <a href="http://commons.wikimedia.org/wiki/File:2006-09-19_Berlin_Brandenburger_Tor.jpg">Stephan Czuratis. The icons used are <a href="http://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a> by  <a href="http://www.entypo.com/">Daniel Bruce</a>.'
          }
  }

  app.config(['$translateProvider', function($i18n) {
    for (var langId in TRANSLATIONS) {
      $i18n.translations(langId, TRANSLATIONS[langId]);
    }
    $i18n.preferredLanguage('es');
  }]);

  app.controller('NSTranslate', ['$scope', '$translate', function($scope, $i18n) {
    $scope.langId = 'es';
    $scope.set_lang = function(langId) {
      if (langId != $scope.langId) {
        $i18n.use(langId);
        $scope.langId = langId;
      }
    }
  }]);

})()

