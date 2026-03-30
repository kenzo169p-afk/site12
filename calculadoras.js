const presumido = document.getElementById("lucro-presumido");
const simples = document.getElementById("simples-nacional");
const economia = document.getElementById("economia-btn");

const economiaResults = document.getElementById("economia-results");
const simplesResults = document.getElementById("simples-results");
const presumidoResults = document.getElementById("presumido-results");

const calcSimples = document.getElementById("calc-simples");
const calcPresumido = document.getElementById("calc-presumido");
const calcEconomia = document.getElementById("calc-economia");

const economiaFaturamento = document.getElementById("economia-faturamento");
const colaboradores = document.getElementById("colaboradores");
const regime = document.getElementById("regime");

const simplesMensal = document.getElementById("simples-mensal");
const simplesAnual = document.getElementById("simples-anual");

const presumidoMensal = document.getElementById("presumido-mensal");
const presumidoAnual = document.getElementById("presumido-anual");


function economiaClick(button) {
  presumido.className = [];
  simples.className = [];
  button.classList = ["active"];

  calcEconomia.style.display = "grid";
  calcSimples.style.display = "none";
  calcPresumido.style.display = "none";

  economiaResults.style.display = "flex";
  presumidoResults.style.display = "none";
  simplesResults.style.display = "none";
}

function simplesClick(button) {
  presumido.className = [];
  economia.className = [];
  button.classList = ["active"];

  calcSimples.style.display = "grid";
  calcEconomia.style.display = "none";
  calcPresumido.style.display = "none";

  simplesResults.style.display = "flex";
  presumidoResults.style.display = "none";
  economiaResults.style.display = "none";
}

function presumidoClick(button) {
  button.classList = ["active"];
  simples.className = [];
  economia.className = [];

  calcSimples.style.display = "none";
  calcEconomia.style.display = "none";
  calcPresumido.style.display = "grid";

  presumidoResults.style.display = "flex";
  simplesResults.style.display = "none";
  economiaResults.style.display = "none";
}

economiaFaturamento.addEventListener("change", event => {
  economiaSubmit();
});

colaboradores.addEventListener("change", event => {
  economiaSubmit();
});

regime.addEventListener("change", event => {
  economiaSubmit();
});

function economiaSubmit() {

  const faturamento = economiaFaturamento.value;
  const nColaboradores = Number(colaboradores.value);

  const simplesDisplay = document.getElementById("economia-simples");
  const realDisplay = document.getElementById("economia-presumido");

  
  const regimeValue = regime.value;

  const tabelaValores = {
    "servico": {
      faturamentoDeclarado: {
        '30000': { simples: 357.00, presumido: 497.00, indvalue: 80 },
        '60000': { simples: 497.00, presumido: 637.00, indvalue: 70 },
        '300000': { simples: 797.00, presumido: 997.00, indvalue: 60 },
      },    
    },
    "indCom": {
      faturamentoDeclarado: {
        '30000': { simples: 497.00, presumido: 637.00, indvalue: 80 },
        '60000': { simples: 797.00, presumido: 1097.00, indvalue: 70 },
        '300000': { simples: 997.00, presumido: 1297.00, indvalue: 60 },
      },
    },
  };

  let tabelaSelecionada;
  tabelaSelecionada = tabelaValores[regimeValue].faturamentoDeclarado[faturamento]; 

  simplesDisplay.innerText = formatAny(tabelaSelecionada.simples + (tabelaSelecionada.indvalue * nColaboradores));
  realDisplay.innerText = formatAny(tabelaSelecionada.presumido + (tabelaSelecionada.indvalue * nColaboradores));
}

simplesMensal.addEventListener("change", event => {
  simplesAnual.value = event.target.value * 12;
  simplesSubmit();
});

simplesAnual.addEventListener("change", event => {
  simplesMensal.value = event.target.value / 12;
  simplesSubmit();
});

let attach = 1;

function simplesSubmit() {
  const efetivaDisplay = document.getElementById("simples-efetiva-percent");
  const valueDisplay = document.getElementById("simples-efetiva-value");
  const value = simplesMensal.value;
  const yearValue = value * 12;

  let percent = 0;
  let discount = 0;

  switch (attach) {
    case 1:
      if (yearValue <= 180000) {
        percent = 4;
      } else if (yearValue <= 360000) {
        percent = 7.3;
        discount = 5940;
      } else if (yearValue <= 720000) {
        percent = 9.5;
        discount = 13860;
      } else if (yearValue <= 1800000) {
        percent = 10.7;
        discount = 22500;
      } else if (yearValue <= 3600000) {
        percent = 14.3;
        discount = 87300;
      } else if (yearValue <= 4800000) {
        percent = 19;
        discount = 378000;
      }

      break;
    case 2:
      if (yearValue <= 180000) {
        percent = 4.5;
      } else if (yearValue <= 360000) {
        percent = 7.8;
        discount = 5940;
      } else if (yearValue <= 720000) {
        percent = 10;
        discount = 13860;
      } else if (yearValue <= 1800000) {
        percent = 11.2;
        discount = 22500;
      } else if (yearValue <= 3600000) {
        percent = 14.7;
        discount = 85500;
      } else if (yearValue <= 4800000) {
        percent = 30;
        discount = 720000;
      }
      break;
    case 3:
      if (yearValue <= 180000) {
        percent = 6;
      } else if (yearValue <= 360000) {
        percent = 11.2;
        discount = 9360;
      } else if (yearValue <= 720000) {
        percent = 13.5;
        discount = 17640;
      } else if (yearValue <= 1800000) {
        percent = 16;
        discount = 35640;
      } else if (yearValue <= 3600000) {
        percent = 21;
        discount = 125640;
      } else if (yearValue <= 4800000) {
        percent = 33;
        discount = 648000;
      }
      break;
    case 4:
      if (yearValue <= 180000) {
        percent = 4.5;
      } else if (yearValue <= 360000) {
        percent = 9;
        discount = 8100;
      } else if (yearValue <= 720000) {
        percent = 10.2;
        discount = 12420;
      } else if (yearValue <= 1800000) {
        percent = 14;
        discount = 39780;
      } else if (yearValue <= 3600000) {
        percent = 22;
        discount = 183780;
      } else if (yearValue <= 4800000) {
        percent = 33;
        discount = 828000;
      }
      break;
    case 5:
      if (yearValue <= 180000) {
        percent = 15.5;
      } else if (yearValue <= 360000) {
        percent = 18;
        discount = 4500;
      } else if (yearValue <= 720000) {
        percent = 19.5;
        discount = 9900;
      } else if (yearValue <= 1800000) {
        percent = 20.5;
        discount = 17100;
      } else if (yearValue <= 3600000) {
        percent = 23;
        discount = 62100;
      } else if (yearValue <= 4800000) {
        percent = 30.5;
        discount = 540000;
      }
      break;
    default:
      break;
  }

  const aliq = handlePercent(percent, yearValue) - discount;

  const result = (aliq / 12 / value) * 100;

  const simples = result * value;

  efetivaDisplay.value = result.toFixed(2) + "%";
  valueDisplay.value = formatCurrency(simples / 100);
}

function attachmentClick(attachment) {
  const att1 = document.getElementById("att1");
  const att2 = document.getElementById("att2");
  const att3 = document.getElementById("att3");
  const att4 = document.getElementById("att4");
  const att5 = document.getElementById("att5");

  switch (attachment) {
    case 1:
      att1.classList = ["attachment active"];
      att2.classList = ["attachment"];
      att3.classList = ["attachment"];
      att4.classList = ["attachment"];
      att5.classList = ["attachment"];

      attach = 1;
      break;

    case 2:
      att1.classList = ["attachment"];
      att2.classList = ["attachment active"];
      att3.classList = ["attachment"];
      att4.classList = ["attachment"];
      att5.classList = ["attachment"];

      attach = 2;
      break;

    case 3:
      att1.classList = ["attachment"];
      att2.classList = ["attachment"];
      att3.classList = ["attachment active"];
      att4.classList = ["attachment"];
      att5.classList = ["attachment"];

      attach = 3;
      break;

    case 4:
      att1.classList = ["attachment"];
      att2.classList = ["attachment"];
      att3.classList = ["attachment"];
      att4.classList = ["attachment active"];
      att5.classList = ["attachment"];

      attach = 4;
      break;

    case 5:
      att1.classList = ["attachment"];
      att2.classList = ["attachment"];
      att3.classList = ["attachment"];
      att4.classList = ["attachment"];
      att5.classList = ["attachment active"];

      attach = 5;
      break;

    default:
      break;
  }

  simplesSubmit();
}

presumidoMensal.addEventListener("change", event => {
  presumidoAnual.value = event.target.value * 12;
  presumidoSubmit();
});

presumidoAnual.addEventListener("change", event => {
  presumidoMensal.value = event.target.value / 12;
  presumidoSubmit();
});

function presumidoSubmit() {
  const priceDisplay = document.getElementById("price-presumido-anual");
  const issDisplay = document.getElementById("presumido-iss");
  const pisDisplay = document.getElementById("presumido-pis");
  const cofinsDisplay = document.getElementById("presumido-cofins");
  const csllDisplay = document.getElementById("presumido-csll");
  const ali_irDisplay = document.getElementById("presumido-ali-ir");
  const aliqEfetivaDisplay = document.getElementById("price-presumido-pis");
  const presumidoTipo = document.getElementById("presumido-tipo");
  const csllIrDisplay = document.getElementById("csll-ir");
  const adicionalIR = document.getElementById("adicional-ir");

  const value = presumidoMensal.value;

  const iss = handlePercent(5, value);
  issDisplay.value = formatCurrency(iss);

  const pis = handlePercent(0.65, value);
  pisDisplay.value = formatCurrency(pis);

  const cofins = handlePercent(3, value);
  cofinsDisplay.value = formatCurrency(cofins);

  let porcentagem = presumidoTipo.value === "servico" ? 32 : 8;

  const servicos = handlePercent(porcentagem, value);

  const csll = handlePercent(9, servicos);
  csllDisplay.value = formatCurrency(csll);

  const ali_ir = handlePercent(15, servicos);
  ali_irDisplay.value = formatCurrency(ali_ir);

  csllIrDisplay.innerText = formatAny(csll + ali_ir);

  let ad_ir = 0;
  if (handlePercent(porcentagem, value) > 20000) {
    ad_ir = handlePercent(10, servicos - 20000);
    console.log(value);
  }
  adicionalIR.value = formatCurrency(ad_ir);

  const total = iss + pis + cofins + csll + ali_ir + ad_ir;
  aliqEfetivaDisplay.innerText = formatAny((total / value) * 100);

  priceDisplay.innerText = formatAny(total);
}

function handlePercent(percent, amount) {
  var result = (percent / 100) * amount;
  return result;
}

function formatCurrency(value) {
  return value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}

function formatAny(value) {
  return value.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
  });
}
