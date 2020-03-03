import React from 'react';
import { mesLabels, FiltroMes } from '../../model';
import { Container } from './styled';

type Props = {
  filtro: FiltroMes;
  active: boolean;
  onClick: (mes: FiltroMes) => void;
};

export default class extends React.Component<Props> {
  render() {
    const { active, onClick, filtro } = this.props;

    return (
      <Container active={active} onClick={() => onClick(filtro)}>
        <span>{mesLabels[filtro.mes]}</span>
        <span>{filtro.ano}</span>
      </Container>
    )
  }
}
