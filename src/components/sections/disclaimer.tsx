export function LPDisclaimer() {
  return (
    <div
      role="note"
      aria-label="Aviso: landing page experimental e fictícia"
      className="w-full bg-amber-50 border-b border-amber-200 text-amber-900"
    >
      <div className="mx-auto max-w-[1180px] px-[22px] py-2 flex items-start gap-2 text-[12px] sm:text-[13px] leading-[1.45]">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="flex-shrink-0 mt-px"
        >
          <path
            d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="m-0">
          <span className="font-bold">Página experimental e fictícia.</span>{" "}
          Marcas, dados, parcerias e métricas são ilustrativos e não
          representam serviços reais. Nenhum dado pessoal é coletado, em
          conformidade com a{" "}
          <abbr title="Lei Geral de Proteção de Dados">LGPD</abbr>.
        </p>
      </div>
    </div>
  );
}
