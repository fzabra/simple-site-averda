import React from "react";

const data = [
  {
    projeto: "AVERA SKATE 2",
    cnpj: "10.698.627/0001-11",
    emenda: "41190007 - Maria Rosas",
    valorTotal: "R$ 200.000,00",
    valorLiberado: "R$ 200.000,00",
    instrumento: "TERMO DE FOMENTO Nº 941298/2023\nPROCESSO Nº 71000.033657/2023-04",
    orgao: "MINISTÉRIO DO ESPORTE",
    assinatura: "17/07/2023",
    vigencia: "17/07/2023 a 17/07/2024",
    objeto:
      "Implementação e Desenvolvimento do Projeto Avera Skate 2, no Município de São Vicente/SP.",
    situacao: "Prestação de Contas enviada para Análise",
    previsaoPrestacao: "15/09/2024",
    envioAnalise: "-",
    conclusao: "-",
  },
  {
    projeto: "AVERA SKATE 2",
    cnpj: "10.698.627/0001-11",
    emenda: "41190003 - Maria Rosas",
    valorTotal: "R$ 100.000,00",
    valorLiberado: "R$ 100.000,00",
    instrumento: "TERMO DE FOMENTO Nº 927910/2022\nPROCESSO Nº 71000.011069/2022-21",
    orgao: "MINISTÉRIO DO ESPORTE",
    assinatura: "05/10/2022",
    vigencia: "05/10/2022 a 11/11/2023",
    objeto:
      "Implementação e Desenvolvimento do Projeto Avera Skate, no Município de São Vicente/SP.",
    situacao: "Prestação de Contas enviada para Análise",
    previsaoPrestacao: "10/01/2024",
    envioAnalise: "-",
    conclusao: "-",
  },
  {
    projeto: "AVERA SKATE 3",
    cnpj: "10.698.627/0001-11",
    emenda: "41190007 (Maria Rosas)",
    valorTotal: "R$ 200.000,00",
    valorLiberado: "R$ 200.000,00",
    instrumento: "TERMO DE FOMENTO Nº 973635/2024\nProcesso nº 71000.012875/2024-88",
    orgao: "MINISTÉRIO DO ESPORTE",
    assinatura: "31/12/2024",
    vigencia: "31/12/2024 a 31/12/2025",
    objeto:
      "Implementação e Desenvolvimento do Projeto Avera Skate 3, no Município de São Vicente/SP.",
    situacao: "Em execução.",
    previsaoPrestacao: "31/03/2026",
    envioAnalise: "-",
    conclusao: "-",
    link: "https://drive.google.com/open?id=1mB0wipl-IHZiT62jyiy9yy-jJ0luwgG&usp=drive_fs",
  },
];

const Transparencia: React.FC = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-10 fix-transparencia">

    <div className="mb-8 text-center bt-download">
        <a
        href="https://jumpshare.com/s/OyKRwr4xtUhLyBtTXRrF"
        download
        className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded"
        >
        📥 Relatório de Emendas (.pdf)
        </a>
    </div>

      {data.map((item, index) => (
        <div key={index} className="bg-gray-100 rounded shadow-md p-6 mb-8 bg-transparencia">
          <h1 className="text-3xl font-bold text-center mb-8">Transparência (MROSC)</h1>
          <h2 className="text-xl font-bold text-teal-700 mb-4">{item.projeto}</h2>
          <p><strong>Organização da Sociedade Civil:</strong> ASSOCIAÇÃO VICENTINA DE ESPORTES RADICAIS</p>
          <p><strong>CNPJ:</strong> {item.cnpj}</p>
          <p><strong>Número e Autor da emenda:</strong> {item.emenda}</p>
          <p><strong>Valor Total da Parceria:</strong> {item.valorTotal}</p>
          <p><strong>Valor liberado:</strong> {item.valorLiberado}</p>
          <p><strong>Projeto:</strong> {item.projeto}</p>
          <p><strong>Instrumento:</strong> <pre className="inline whitespace-pre-wrap">{item.instrumento}</pre></p>
          <p><strong>Órgão:</strong> {item.orgao}</p>
          <p><strong>Data de Assinatura:</strong> {item.assinatura}</p>
          <p><strong>Vigência:</strong> {item.vigencia}</p>
          <p><strong>Objeto da Parceria:</strong> {item.objeto}</p>
          <p><strong>Situação da parceria:</strong> {item.situacao}</p>
          <p><strong>Data prevista para apresentação da prestação de contas:</strong> {item.previsaoPrestacao}</p>
          <p><strong>Data de envio da prestação de contas para a análise:</strong> {item.envioAnalise}</p>
          <p><strong>Data de conclusão da prestação de contas:</strong> {item.conclusao}</p>
          {item.link && (
            <p className="mt-2">
              <strong>Link da íntegra do termo de fomento:</strong>{" "}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 underline"
              >
                Acessar documento
              </a>
            </p>
          )}
        </div>
      ))}

      <div><img src="/discriminarias.jpeg" className="img-sample" /></div>
    </section>
  );
};

export default Transparencia;
