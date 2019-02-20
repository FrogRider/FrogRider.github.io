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
      {text: 'par', fontSize: 15, color: 'red'},
      ' &mainP1& \n', //date, postanovaNumber
      {text: 'par', fontSize: 15, color: 'red'},
      ' &mainP2& \n', //car, carNumber, carYear, address, speed
      {text: 'par', fontSize: 15, color: 'red'},
      ' &mainP3& \n',
      {text: 'par', fontSize: 15, color: 'red'},
      ' &mainP4& \n',
      {text: 'par', fontSize: 15, color: 'red'},
      ' &mainP5& \n',
      {text: 'par', fontSize: 15, color: 'red'},
      ' &mainP6& \n',
      {text: 'par', fontSize: 15, color: 'red'},
      ' &mainP7& \n',
      // {text: 'par', fontSize: 15, color: 'red'},
      // ' &mainP8& \n',
      // {text: 'par', fontSize: 15, color: 'red'},
      // ' &mainP9& \n',
      // {text: 'par', fontSize: 15, color: 'red'},
      // ' &mainP10& \n',
      // {text: 'par', fontSize: 15, color: 'red'},
      // ' &mainP11& \n',
      // {text: 'par', fontSize: 15, color: 'red'},
      // ' &mainP12& \n',
      // {text: 'par', fontSize: 15, color: 'red'},
      // ' &mainP13& \n',
      // {text: 'par', fontSize: 15, color: 'red'},
      // ' &mainP14& \n',
      // {text: 'par', fontSize: 15, color: 'red'},
      // ' &mainP15& \n',
      ],
      style: '',
      alignment: ''},                               //3

    {text: '&arg1&',
      style: '',
      alignment: ''},                               //4

    {text: '&arg2&',
      style: '',
      alignment: ''},                               //5

    {text: '&q1&',
      style: '',
      alignment: ''},                               //6

    {text: '&q2&',
      style: '',
      alignment: ''},                               //7

    {text: '&main_6&',
      style: '',
      alignment: ''}                                //8
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
