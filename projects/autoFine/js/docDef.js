var docDefinition = { //формирование документа с нужными фразами из массива
      content: [ 
      {
      table: {
        widths: [165, '*'],
        body: [
          ['', {text:[{text: '&courtAddress& ', bold: true},'\n&courtIndex&, &courtTown&, &courtStreet&']}],
          [{text: 'Позивач:', bold: true, alignment: 'right'}, {text:[{text: '&pozivFirsLastSurName&', bold: true},'\nІПН: &ipn& \n &pozivIndex&, &pozivTown&, &pozivStreet& \n Інші засоби зв’язку – &pozivAnotherComunications&']}],
          [{text: 'Відповідач:', bold: true, alignment: 'right'},{text:[{text: '&vidpovidOtdelenie& \n iнспектор полiцiї &vidpovidach&', bold: true},'\n &vidpovidIndex&, &vidpovidTown&, &vidpovidStreet& \n Інші засоби зв’язку - &vidpovidAnotherComaunications&.']}]
        ],
        alignment: 'right'
      },
      layout: 'noBorders'
    },                                              //0

    {text: '\n\n\n\n\n\nАДМІНІСТРАТИВНИЙ ПОЗОВ',
      style: 'header',
      alignment: 'center'},                         //1

    {text: 'про скасування постанови про накладення адміністративного стягнення\n\n',
      style: 'subheader',
      alignment: 'center'},                         //2

    {text: [
      {text: 'par', fontSize: 15, color: 'white'},                            //0
      ' &mainP1& \n', //date, postanovaNumber
      {text: 'par', fontSize: 15, color: 'white'},                            //2
      ' &mainP2& \n', //car, carNumber, carYear, address, speed
      {text: 'par', fontSize: 15, color: 'white'},                            //4
      ' &mainP3& \n',
      {text: 'par', fontSize: 15, color: 'white'},                            //6
      ' &mainP4& \n',
      {text: 'par', fontSize: 15, color: 'white'},                            //8
      ' &mainP5& \n',
      {text: 'par', fontSize: 15, color: 'white'},                            //10
      ' &mainP6& \n',
      {text: 'par', fontSize: 15, color: 'white'},                            //12
      ' &mainP7& \n',
      {text: 'par', fontSize: 15, color: 'white'},                            //14
      ' &mainP8& \n',
      {text: 'par', fontSize: 15, color: 'white'},                            //16
      ' &mainP9& \n',
      {text: 'par', fontSize: 15, color: 'white'},                            //18
      ' &mainP10& \n',
      {text: 'par', fontSize: 15, color: 'white'},                            //20
      ' &mainP11& \n',
      {text: 'par', fontSize: 15, color: 'white'},                            //22
      ' &mainP12& \n',
      {text: 'par', fontSize: 15, color: 'white'},                            //24
      ' &mainP13& \n',
      {text: 'par', fontSize: 15, color: 'white'},                            //26
      ' &mainP14& \n',
      {text: 'par', fontSize: 15, color: 'white'},                            //28
      ' &mainP15& \n',
      {text: 'par', fontSize: 15, color: 'white'},                            //30
      ' &mainP16& \n',
      ],
      style: '',
      alignment: ''},                               //3

    {text: [
      {text: 'par', fontSize: 15, color: 'white'},
      ' &arg1& \n']},                             //4

    {text: [
      {text: 'par', fontSize: 15, color: 'white'},
      ' &arg2& \n']},                             //5

    {text: [
      {text: 'par', fontSize: 15, color: 'white'},
      'Звертаю увагу суду на те, що Протокол Відповідачем не складався, хоча Позивач заперечував свою вину у вчиненні правопорушення. \n',
      {text: 'par', fontSize: 15, color: 'white'},
      'Відповідно до ч.2 ст.258 КУпАП, Протокол може не складатись у разі вчинення адміністративних порушень, розгляд яких віднесено до компетенції Національної поліції, та адміністративних порушень у сфері забезпечення безпеки дорожнього руху, зафіксованих в автоматичному режимі. Однак, системний аналіз положень КУпАП, в тому числі  ч.5 ст.258 КУпАП дає підстави для висновку, що у випадку, якщо під час складання Постанови у справі про адміністративне правопорушення особа оспорить порушення і адміністративне стягнення, що на неї накладається, уповноважена посадова особа зобов\'язана скласти Протокол про адміністративне правопорушення відповідно до вимогст.256 цього КУпАП. Такі ж вимоги містяться у Інструкції з оформлення матеріалів про адміністративні правопорушення в органах поліції, яка затверджена наказом Міністерства Внутрішніх справ №1376 від 06 листопада 2015 року, що зареєстрована у Міністерстві юстиції України 01 грудня 2015 року №1496/27941. \n',
      {text: 'par', fontSize: 15, color: 'white'},
      'Відповідно до висновків, викладених у Рішенні Конституційного Суду України від 26 травня 2015 року у справі №5-рп/2015, складання Протоколу про адміністративне правопорушення та розгляд уповноваженим органом (посадовою особою) справи про таке правопорушення належать до різних стадій адміністративного провадження. Перелік адміністративних правопорушень, за які адміністративні стягнення накладаються на місці їх вчинення, є вичерпним і може бути змінений лише законом. \n',
      {text: 'par', fontSize: 15, color: 'white'},
      'Згідно з вказаним рішенням словосполучення «на місці вчинення правопорушення» і «за місцем його вчинення», які містяться у статтях 258, 276 Кодексу, мають різне цільове спрямування і різний правовий зміст. Положення частини першої статті 276 Кодексу України про адміністративні правопорушення, яке передбачає, що «справа про адміністративне правопорушення розглядається за місцем його вчинення», в аспекті порушеного у конституційному поданні питання необхідно розуміти так, що використане в ньому словосполучення «за місцем його вчинення» визначає адміністративно-територіальну одиницю, на яку поширюється юрисдикція відповідного органу, уповноваженого законом розглядати справу про адміністративне правопорушення. \n',
      {text: 'par', fontSize: 15, color: 'white'},
      'Статтею 258 ч.3 КУпАП передбачено, що уповноваженими органами (посадовими особами) може винести Постанову на місці вчинення правопорушення, тобто - на місці зупинки транспортного засобу. Проте, Постанова не може бути винесена без розгляду адміністративної справи. Постанова щодо притягнення особи до відповідальності виноситься за результатами розгляду справи. \n',
      {text: 'par', fontSize: 15, color: 'white'},
      'Стаття 258 КУпАП вказує на те, що уповноважений орган (посадова особа) повинен дотримуватись вимог ст.283 КУпАП, яка зазначає, що Постанова виноситься тільки за результатами розгляду справи. \n',
      {text: 'par', fontSize: 15, color: 'white'},
      'Разом з тим, ст.276 КУпАП вказує, що справа про адміністративне правопорушення розглядається за місцем його вчинення, тобто - за місцезнаходженням органу, уповноваженого законом розглядати справу про адміністративне правопорушення. \n',
      {text: 'par', fontSize: 15, color: 'white'},
      'Відповідно до ст.278 КУпАП, орган (посадова особа) при підготовці до розгляду справи про адміністративне правопорушення вирішує такі питання: 1) чи належить до його компетенції розгляд даної справи; 2) чи правильно складено Протокол та інші матеріали справи про адміністративне правопорушення; 3) чи сповіщено осіб, які беруть участь у розгляді справи, про час і місце її розгляду; 4) чи витребувано необхідні додаткові матеріали; 5) чи підлягають задоволенню клопотання особи, яка притягається до адміністративної відповідальності, потерпілого, їх законних представників і адвоката. \n',
      {text: 'par', fontSize: 15, color: 'white'},
      'Відповідно до ст.279 КУпАП, розгляд справи розпочинається з оголошення складу колегіального органу або представлення посадової особи, яка розглядає дану справу. Головуючий на засіданні колегіального органу або посадова особа, що розглядає справу, оголошує, яка справа підлягає розгляду, хто притягається до адміністративної відповідальності, роз\'яснює особам, які беруть участь у розгляді справи, їх права і обов\'язки. Після цього оголошується Протокол про адміністративне правопорушення. На засіданні заслуховуються особи, які беруть участь у розгляді справи, досліджуються докази і вирішуються клопотання. \n',
      {text: 'par', fontSize: 15, color: 'white'},
      'Проте, Відповідач положень закону не дотримався та розглянув справу на місці зупинки транспортного засобу. \n',
      {text: 'par', fontSize: 15, color: 'white'},
      'Відповідно до п.24 Постанови Пленуму Верховного Суду України №14 від 23 грудня 2005 року "Про практику застосування судами України законодавства у справах про деякі злочини проти безпеки дорожнього руху та експлуатації транспорту, а також про адміністративні правопорушення на транспорті" є неприпустимим спрощений підхід до розгляду справ про адміністративні правопорушення на транспорті та ігнорування прав осіб, яких притягують до відповідальності. \n',
      {text: 'par', fontSize: 15, color: 'white'},
      'Зміст Постанови має відповідати вимогам, передбаченим статтями 283 і 284 КпАП України. У ній, зокрема, потрібно навести докази, на яких ґрунтується висновок про вчинення особою адміністративного правопорушення, та зазначити мотиви відхилення інших доказів, на які посилається правопорушник, чи висловлених останнім доводів. \n',
      {text: 'par', fontSize: 15, color: 'white'},
      'В порушення зазначених вимог, Відповідач спрощено підійшов до розгляду даної справи про адміністративне правопорушення, не ясував усіх обставин, зазначених у статтях 247 і 280 КпАП України; справа про адміністративне правопорушення була розглянута без підготовки до розгляду та без вирішення питань, які наведені у ст.278 КпАП України. \n',
      {text: 'par', fontSize: 15, color: 'white'},
      'До цього ж необхідно додати, що нескладання Відповідачем Протоколу не дало Позивачу можливості ніяким чином висловити свою незгоду із винністю у вчиненні адміністративного правопорушення, оскільки ніде, крім Протоколу, Позивач свою позицію зафіксувати не зміг би. \n',
      {text: 'par', fontSize: 15, color: 'white'},
      'У оскаржуваній Постанові ніяким чином мої пояснення або незгода із винністю у вчиненні адміністративного правопорушення не відображені. \n',
      {text: 'par', fontSize: 15, color: 'white'},
      'Відтак, грубі порушення вимог ст.268 КпАП України щодо мене при винесенні оскаржуваної постанови Відповідачем є очевидними. \n',
    ]},                                 //6

    {text: [
      {text: 'par', fontSize: 15, color: 'white'},
      'Відповідач проігнорував вимогу Позивача надати сертифікат про радар та відомості про щорічну перевірку даного приладу, а також його опломбування. \n',
      {text: 'par', fontSize: 15, color: 'white'},
      'Згідно Переліку технічних засобів, що використовуються в підрозділах Державтоінспекції МВС для виявлення та фіксування порушень ПДР затвердженого наказом МВС України від 01.03.2010 року № 33, визначено спеціальні технічні засоби, які працюють в автоматичному режимі, що мають функції фото- і кінозйомки, відеозапису до переліку яких входить - лазерний вимірювач швидкості транспортних засобів. \n',
      {text: 'par', fontSize: 15, color: 'white'},
      'Згідно зі ст.ст.10-15 Закону України “Про метрологію та метрологічну діяльність”, на вимірювання у сфері, у якій їх результати можуть бути використані у якості доказу по справі, розповсюджується державний метрологічний нагляд. За таких умов кожен засіб вимірювальної техніки має бути укомплектований документами про сертифікацію та допуск даного типу засобів вимірювальної техніки для використання в Україні, свідоцтвом про повірку, з вказаним терміном дії до наступної повірки. \n',
      {text: 'par', fontSize: 15, color: 'white'},
      'Протокол та Постанова не містить жодних відомостей про те, що прилад був укомплектований документами про сертифікацію та допуск даного типу засобів вимірювальної техніки для використання в Україні, свідоцтвом про повірку, з вказаним терміном дії до наступної повірки. Бажання Позивача на пред’явлення вищезазначених документів на прилад Відповідач проігнорував, що підтверджує їх відсутність на час вимірювання. \n',
      {text: 'par', fontSize: 15, color: 'white'},
      'За таких обставин вважаю, що Відповідачем належними доказами не доведено факт перевищення швидкості руху автомобілем Позивача. \n'
    ]},                                 //7

    {text: [
      {text: 'par', fontSize: 15, color: 'white'},
      '&main_6P1& \n', 
      {text: 'par', fontSize: 15, color: 'white'},
      '&main_6P2& \n',
      {text: 'par', fontSize: 15, color: 'white'},
      '&6_1& \n',
      {text: 'par', fontSize: 15, color: 'white'},
      '&6_2& \n',
      {text: 'par', fontSize: 15, color: 'white'},
      '&6_3& \n',
      {text: 'par', fontSize: 15, color: 'white'},
      '&6_4& \n',
      {text: 'par', fontSize: 15, color: 'white'},
      '&6_5& \n',
      {text: 'par', fontSize: 15, color: 'white'},
      '&6_6& \n',
      ////////////////////////////////////
      {text: 'par', fontSize: 15, color: 'white'},
      'Відповідно до ст. 251 КУпАП доказами в справі про адміністративне правопорушення, є будь-які фактичні дані, на основі яких у визначеному законом порядку орган (посадова особа) встановлює наявність чи відсутність адміністративного правопорушення, винність даної особи в його вчиненні та інші обставини, що мають значення для правильного вирішення справи.  Ці дані встановлюються протоколом про адміністративне правопорушення, пояснень особи, яка притягається до адміністративної відповідальності, речових доказів, тощо. \n', //17
      {text: 'par', fontSize: 15, color: 'white'},
      'До Постанови не долучено даних доказів. За таких умов Постанову слід визнати такою, що її винесено без достатніх доказів. \n', //19
      {text: 'par', fontSize: 15, color: 'white'},
      'Конституційний Суд України у Рішенні N 23-рп/2010 від 22 грудня 2010 року у пунктах 4, 4.1, 4.2 мотивувальної частини Рішення вказав на розповсюдження ряду презумпцій та правових гарантій на усі види юридичної відповідальності, у тому числі й на адміністративну відповідальність. Зокрема прямо вказав у цьому переліку (у п.4 мотивувальної частини Рішення): «обвинувачення не може ґрунтуватися на доказах,  одержаних незаконним шляхом, а також на припущеннях; усі сумніви щодо доведеності вини особи тлумачаться на її користь (ч. 3 ст. 62 Конституції України)». \n', //21
      {text: 'par', fontSize: 15, color: 'white'},
      'Обвинувачення, не підтверджене належними та допустимим доказами взагалі, має бути визнано таким, що ґрунтується на припущеннях. А відтак, Постанова, винесена щодо Позивача , є незаконною та невідповідною обставинам справи. \n', //23
      {text: 'par', fontSize: 15, color: 'white'},
      'У відповідності до ст. 245 КУпАП, завданнями провадження в справах про адміністративні правопорушення є: своєчасне, всебічне, повне і об`єктивне з`ясування обставин кожної справи, вирішення її в точній відповідності із законом.  \n', //25
      {text: 'par', fontSize: 15, color: 'white'},
      'Як зазначено в частинах другій та п`ятій статті 77 КАС України в адміністративних справах про протиправність рішень, дій чи бездіяльності суб`єкта владних повноважень обов`язок щодо доказування правомірності свого рішення, дії чи бездіяльності покладається на суб`єкта владних повноважень. \n', //27
      {text: 'par', fontSize: 15, color: 'white'},
      'Таким чином, наведені обставини свідчать про необґрунтованість притягнення Позивача до адміністративної відповідальності за ст. 122 КУпАП, а отже, Відповідач прийняв необгрунтоване рішення  без урахування та встановлення усіх обставин, що мають значення для вирішення питання про наявність правових підстав для притягнення Позивача до адміністративної відповідальності.  \n', //29
      {text: 'par', fontSize: 15, color: 'white'},
      'Відповідачем належними доказами не доведено факт перевищення швидкості руху автомобілем Позивача. Оскільки інших доказів, які б підтверджували факт умисного порушення Позивачем вимог ПДР України в матеріалах справи немає і такі суду не представлені, а тому вважаю що оскаржувана Постанова є протиправною. \n', //31
      {text: 'par', fontSize: 15, color: 'white'},
      'У справах про оскарження постанов у справах про адміністративне правопорушення у розумінні положень статей 287, 288 КпАП, статей 2 - 4 Закону N 3674-VI Позивач звільняється від сплати судового збору. КпАП дає вичерпний перелік осіб, які можуть мати статус Позивача у справах про оскарження постанови про накладення адміністративного стягнення і на цій підставі не повинні сплачувати судовий збір при зверненні до суду першої інстанції (Постанова Верховного суду України № 21-1493а16, 298/1232/15а від 13.01.2017 року). ',   //33
      ]
    },                             //8

    {text: [
             {text: 'par', fontSize: 15, color: 'white'},                            
             {text: 'На підставі вищевикладеного, керуючись ст.ст. 160-161 Кодексу адміністративного судочинства України, ст.ст.283, 288, 289 Кодексу України про адміністративні правопорушення, Правилами дорожнього руху України, затвердженими Постановою Кабінету Міністрів України №106 від 10 жовтня 2001 року,-', bold:true},
             {text: '\n\n'},
             {text: 'ПРОШУ:\n', alignment: 'center', bold:true}

               ]
          
      },                        //9

       {
      ol: [
        'Відкрити провадження по справі.',
        'Скасувати постанову по справі про адміністративне правопорушення серії &postanovaNumber& від &date& року про притягнення мене до адміністративної відповідальності за ст.122 Кодексу України про адміністративне правопорушення.',
        'Розглянути справу без участі Позивача.'
      ],
      margin: [70, 0, 0, 0],
    },                         //10

    {
       text: 'Додатки:',
       bold: true,
       margin: [30, 30, 0, 0],
       
    },                         //11

    {  
      ol: [
        'Копія постанови про адміністративне правопорушення.',
        'Копія паспорта Позивача.',
        'Копія протоколу про адміністративне правопорушення.',
        'Копія скарги.',
      ],
      margin: [70, 30, 0, 0],
    },                         //12

    {
      table: {
        widths: [165, '*'],
        body: [
          [{text: '&today& року', bold: true, alignment: 'left'}, {text: '&name&', bold: true, alignment: 'right'}]
        ],
      },
      layout: 'noBorders',
      margin: [0, 30, 0, 0]
    }                        //13

  ],
  styles: {
    header: {
      fontSize: 16,
      bold: true,
      alignment: 'justify',
      font: 'MyFont'
    },
    subheader: {
      fontSize: 13.5,
      bold: true,
      alignment: 'justify', 
      font: 'MyFont'
    }
  },
  defaultStyle: {
    font: 'MyFont'
  }

};