export const SERVER_URL = "http://localhost:4000/api";
export const REACT_URL = "http://localhost:3000";


export const LIST_COL = [
    { subject: 'ID', id : "id"},
    { subject: '氏名', id : "name"},
    { subject: '本部', id : "head_office"},
    { subject: '部', id : "office"},
    { subject: 'グレード', id : "grade"},
    { subject: '役職・職位', id : "postion"},
    { subject: 'ステータス', id : "status"},
    { subject: '合計(個人)', id : "private_evaluation"},
    { subject: '合計(1次)', id : "first_evaluation"},
    { subject: '合計(2次)', id : "second_evaluation"},
    { subject: '評価ランク', id : "evaluation_rank"},
    { subject: '最終評価ランク', id : "last_evaluation_rank"},
    { subject: '平均', id : "average"},
    { subject: '1次評価平均', id : "first_average"},
    { subject: '2次評価平均', id : "second_average"},
    { subject: '評価ランク', id : "average_rank"},
    { subject: '最終評価ランク', id : "last_average_rank"}
  ];

  export const EVAL_USER1 = [
    { subject: '本部', id : "head_office"},
    { subject: '部', id : "office"},
    { subject: 'グレード', id : "grade"},
  ];

  export const EVAL_USER2 = [
    { subject: '役職・職位', id : "postion"},
    { subject: '社員番号', id : "id"},
    { subject: '氏名', id : "name"},
  ]

  export const EVAL_USER3 = [
    { subject: '本部', id : "head_office"},
    { subject: '部', id : "office"},
  ];

  export const EVAL_USER4 = [
    { subject: '役職・職位', id : "postion"},
    { subject: '氏名', id : "name"},
  ];

  export const EVAL_RESULT = [
    {subject : "目標項目",subject2 : "（新規提案・改善となるもの）", id : "goals_list", style:{width:"200px", margin:"0px 0px 0px 8px"}},
    {subject : "目標（具体的内容、行動や数値）", subject2:"", id : "goals", style:{width:"270px"}},
    {subject : "ウエイト", subject2:"(計100％)", id : "weight", style:{width:"70px"}},
    {subject : "結果 (数値及び状態)", subject2:"", id : "result", style:{width:"190px"}},
    {subject : "本人コメント（結果に対するプロセスを記入）", subject2:"", id : "user_comment", style:{width:"310px"}},
    {subject : "個人達成率", subject2:"", id : "user_per", style:{width:"90px"}},
    {subject : "一次評価達成率", subject2:"", id : "first_per", style:{width:"110px"}},
    {subject : "二次評価達成率", subject2:"", id : "second_per", style:{width:"110px"}}
  ]

  export const FINAL_RANK = {
    fontSize:50,
    textAlign:"center"
  }