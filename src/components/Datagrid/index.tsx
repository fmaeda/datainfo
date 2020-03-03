import React from "react";
import copy from 'clipboard-copy';
import { Marcacoes } from "../../model";
import { Table } from "./styled";

type Props = {
  marcacoes: Marcacoes;
};

export default class extends React.Component<Props> {
  handleClick = (horario: string) => (evt: React.MouseEvent<HTMLTableDataCellElement>) => {
    copy(horario);
    const element = (evt.target as any);
    if (element.style['background-color'] === 'tomato') {
      element.style='background-color: transparent';
    } else {
      element.style='background-color: tomato';
    }
  };

  render() {
    const { marcacoes } = this.props;
    const largestRow = Math.max(...Object.values(marcacoes).map(v => v.length));

    const titles = Array.from({ length: largestRow }, (v, k) =>
      k % 2 === 0 ? "Entrada" : "Saída"
    );
    return largestRow > 0 && (
      <Table>
        <thead>
          <tr>
            <th>Data</th>
            {titles.map((_v, idx) => (
              <th key={`head_${idx}`}>{idx % 2 === 0 ? "Entrada" : "Saída"}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(marcacoes)
            .sort(([k1], [k2]) => k1.localeCompare(k2))
            .map(([data, horarios]) => (
              <tr key={`r_${data}`}>
                <th>{data}</th>
                {horarios.map(h => (
                  <td key={`h_${h}`} onClick={this.handleClick(h)}>{h}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </Table>
    );
  }
}
