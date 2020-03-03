export type Marcacoes = {
  [data: string]: string[];
};

export type Usuario = {
  nome: string;
  pis: string;
}

export type FiltroMes = {
  ano: number;
  mes: Mes;
};

export enum Mes {
  JANEIRO = '01',
  FEVEREIRO = '02',
  MARCO = '03',
  ABRIL = '04',
  MAIO = '05',
  JUNHO = '06',
  JULHO = '07',
  AGOSTO = '08',
  SETEMBRO = '09',
  OUTUBRO = '10',
  NOVEMBRO = '11',
  DEZEMBRO = '12',
}

export const mesLabels: {[key in Mes]: string } = {
  [Mes.JANEIRO]: 'Janeiro',
  [Mes.FEVEREIRO]: 'Fevereiro',
  [Mes.MARCO]: 'Março',
  [Mes.ABRIL]: 'Abril',
  [Mes.MAIO]: 'Maio',
  [Mes.JUNHO]: 'Junho',
  [Mes.JULHO]: 'Julho',
  [Mes.AGOSTO]: 'Agosto',
  [Mes.SETEMBRO]: 'Setembro',
  [Mes.OUTUBRO]: 'Outubro',
  [Mes.NOVEMBRO]: 'Novembro',
  [Mes.DEZEMBRO]: 'Dezembro',
};
