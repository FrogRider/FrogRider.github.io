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
      '&q1& \n'
    ]},                                 //6

    {text: [
      {text: 'par', fontSize: 15, color: 'white'},
      '&q2& \n'
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
      '&6_6&',
      ]
    }                              //8
  ],
  styles: {
    header: {
      fontSize: 16,
      bold: true,
      alignment: 'justify'
    },
    subheader: {
      fontSize: 13.5,
      bold: true,
      alignment: 'justify'
    }
  }
    };
