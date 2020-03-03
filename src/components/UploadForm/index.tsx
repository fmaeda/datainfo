import React from "react";
import Dropzone from "react-dropzone";
import { Marcacoes, Usuario, FiltroMes, Mes } from "../../model";
import { Container, DropArea, FiltrosContainer } from "./styled";
import MesButton from "../MesButton";
import Datagrid from "../Datagrid";

type Props = {};

type State = {
  filtrosMes: FiltroMes[];
  mesSelecionado: FiltroMes | null;
  usuarioSelecionado: Usuario | null;
  usuarios: Usuario[];
  marcacoes: {
    [pis: string]: Marcacoes;
  };
  marcacoesSelecionadas: Marcacoes;
};

export default class extends React.Component<Props, State> {
  state: State = {
    filtrosMes: [],
    usuarios: [],
    mesSelecionado: null,
    usuarioSelecionado: null,
    marcacoes: {},
    marcacoesSelecionadas: {}
  };

  handleDrop = (files: File[]) => {
    const [file] = files;
    const reader = new FileReader();
    reader.onload = async e => {
      const text = e.target?.result;
      const rawData = text?.toString().split("\n");
      const usuarios =
        rawData
          ?.filter(l => l.length === 107)
          .map(l => ({
            nome: l.substring(35, 87).trim(),
            pis: l.substring(23, 35)
          }))
          .reduce((acc: Usuario[], v) => {
            if (acc.some(u => u.pis === v.pis)) {
              return acc;
            }
            return [...acc, v];
          }, [])
          .filter(u => !u.pis.includes("0000"))
          .sort((u1, u2) => u1.nome.localeCompare(u2.nome)) ?? [];

      const marcacoes =
        rawData
          ?.filter(l => l.length === 39)
          .map(l => ({
            pis: l.substring(22, 34),
            data: `${l.substring(10, 12)}/${l.substring(12, 14)}/${l.substring(
              14,
              18
            )}`,
            hora: `${l.substring(18, 20)}:${l.substring(20, 22)}`
          }))
          // .filter(l => l.data.includes("02/2020"))
          .reduce(
            (acc: { [pis: string]: Marcacoes }, { pis, data, hora }) => ({
              ...acc,
              [pis]: {
                ...(acc[pis] ?? []),
                [data]: [...((acc[pis] ?? [])[data] ?? []), hora]
              }
            }),
            {}
          ) ?? {};

      this.setState({
        usuarios,
        marcacoes
      });
    };
    reader.readAsText(file);
  };

  handleUserChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("change", evt.target.value);
    const { usuarios, marcacoes } = this.state;
    const { value } = evt.target;

    const usuarioSelecionado = usuarios.find(u => u.pis === value) ?? null;
    this.setState({
      usuarioSelecionado
    });

    if (usuarioSelecionado) {
      const currDate = new Date();
      const ano = currDate.getFullYear();
      const mes = currDate.getMonth() + 1;

      const filtrosMes = [
        {
          mes: (mes === 1 ? 12 : mes - 1).toString().padStart(2, "0") as Mes,
          ano: mes === 1 ? ano - 1 : ano
        },
        {
          mes: mes.toString().padStart(2, "0") as Mes,
          ano
        }
      ];

      // console.log('filtros', filtrosMes);
      // const marcacoesSelecionadas = Object.fromEntries(
      //   Object.entries(marcacoes[usuarioSelecionado.pis]).filter(
      //     ([k]) => k.endsWith(ano.toString()) || k.endsWith(`12/${ano - 1}`)
      //   )
      // );

      this.setState({
        marcacoesSelecionadas: {},
        filtrosMes
      });
    }
  };

  renderUserSelect = (usuarios: Usuario[]) => {
    return (
      <select onChange={this.handleUserChange}>
        <option />
        {usuarios.map(({ nome, pis }) => (
          <option value={pis} key={`opt_${pis}`}>
            {nome}
          </option>
        ))}
      </select>
    );
  };

  handleMesClick = (filtro: FiltroMes) => {
    console.log("mes", filtro);
    const { marcacoes, usuarioSelecionado } = this.state;
    if (usuarioSelecionado) {
      const marcacoesSelecionadas = Object.fromEntries(
        Object.entries(marcacoes[usuarioSelecionado.pis]).filter(([data]) =>
          data.includes(`/${filtro.mes}/`)
        )
      );

      console.log("marcacoesSelecionadas", marcacoesSelecionadas);

      this.setState({
        mesSelecionado: filtro,
        marcacoesSelecionadas,
      });
    }
  };

  renderFiltros = () => {
    const { filtrosMes, mesSelecionado } = this.state;
    return (
      <FiltrosContainer>
        {filtrosMes.map(f => (
          <MesButton
            key={`btn_${f.ano + f.mes}`}
            onClick={this.handleMesClick}
            active={mesSelecionado === f}
            filtro={f}
          />
        ))}
      </FiltrosContainer>
    );
  };

  renderData = () => {
    const { marcacoesSelecionadas } = this.state;

    return <Datagrid marcacoes={marcacoesSelecionadas} />;
  };

  render() {
    const { usuarios } = this.state;

    return (
      <Container>
        {usuarios.length === 0 ? (
          <Dropzone onDrop={this.handleDrop}>
            {({ getRootProps, getInputProps }) => (
              <DropArea {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Arraste o arquivo</p>
              </DropArea>
            )}
          </Dropzone>
        ) : (
          <>
            {this.renderUserSelect(usuarios)}
            {this.renderFiltros()}
            {this.renderData()}
          </>
        )}
      </Container>
    );
  }
}
